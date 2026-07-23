/* ============================================================
   MOTOR DEL CHATBOT — NO NECESITAS EDITAR ESTE ARCHIVO.
   Toda la personalización por cliente vive en config.js.
   ============================================================ */

(function () {
  const CFG = window.CHATBOT_CONFIG || CHATBOT_CONFIG;

  // Modo llamada: otra interfaz (llamada.html) usa el cerebro del bot
  // sin dibujar el widget. Define window.CBN_MODO_LLAMADA = true ANTES
  // de cargar este archivo y recibe las respuestas por los callbacks
  // de window.ChatbotCerebro.
  const modoLlamada = !!window.CBN_MODO_LLAMADA;

  // ---------- Utilidades ----------
  const normalizar = (s) =>
    s.toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^\w\s:/]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const rellenar = (texto) =>
    texto
      .replace(/{telefono}/g, CFG.negocio.telefono)
      .replace(/{direccion}/g, CFG.negocio.direccion)
      .replace(/{horario}/g, CFG.negocio.horario)
      .replace(/{nombre}/g, CFG.negocio.nombre);

  const claveStorage = "reservas_" + normalizar(CFG.negocio.nombre).replace(/\s/g, "_");

  // Acceso a localStorage a prueba de fallos: en modo incógnito o con el
  // almacenamiento bloqueado, localStorage puede lanzar excepción. Nunca
  // debe romper una reserva.
  function leerReservas() {
    try { return JSON.parse(localStorage.getItem(claveStorage) || "[]"); }
    catch (_) { return memoriaReservas; }
  }
  function guardarLista(lista) {
    memoriaReservas = lista;
    try { localStorage.setItem(claveStorage, JSON.stringify(lista)); }
    catch (_) { /* seguimos con la copia en memoria */ }
  }
  let memoriaReservas = []; // respaldo si localStorage no está disponible

  // ---------- Estado ----------
  let reserva = null; // {paso, datos:{personas,fecha,hora,nombre,telefono}}
  let vozActiva = false;

  // ---------- Interpretación de fechas y horas ----------
  function interpretarFecha(txt) {
    const t = normalizar(txt);
    const hoy = new Date();
    const dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

    if (t.includes("hoy")) return hoy;
    if (t.includes("pasado manana")) return new Date(hoy.getTime() + 2 * 864e5);
    if (t.includes("manana")) return new Date(hoy.getTime() + 864e5);

    for (let i = 0; i < 7; i++) {
      if (t.includes(dias[i])) {
        let delta = (i - hoy.getDay() + 7) % 7;
        if (delta === 0) delta = 7;
        return new Date(hoy.getTime() + delta * 864e5);
      }
    }
    // dd/mm o dd-mm (año opcional)
    const m = t.match(/(\d{1,2})[/-](\d{1,2})(?:[/-](\d{2,4}))?/);
    if (m) {
      let anio = m[3] ? parseInt(m[3]) : hoy.getFullYear();
      if (anio < 100) anio += 2000;
      const f = new Date(anio, parseInt(m[2]) - 1, parseInt(m[1]));
      if (!isNaN(f) && f >= new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())) return f;
    }
    return null;
  }

  // Convierte números escritos con palabras ("dos", "nueve") a cifra.
  const NUM_PALABRA = {
    una: 1, uno: 1, un: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6,
    siete: 7, ocho: 8, nueve: 9, diez: 10, once: 11, doce: 12,
    trece: 13, catorce: 14, quince: 15, dieciseis: 16, veinte: 20
  };
  function palabraANumero(t) {
    for (const p in NUM_PALABRA) {
      if (new RegExp("\\b" + p + "\\b").test(t)) return NUM_PALABRA[p];
    }
    return null;
  }

  function interpretarHora(txt) {
    const t = normalizar(txt);
    if (/mediodia/.test(t)) return "14:00";
    if (/medianoche/.test(t)) return "00:00";

    let h = null, min = 0;
    let m = t.match(/(\d{1,2})[:h.](\d{2})/); // 20:30, 20h30, 20.30
    if (m) { h = +m[1]; min = +m[2]; }
    else {
      m = t.match(/\d{1,2}/);
      if (m) h = +m[0];
      else { const p = palabraANumero(t); if (p !== null) h = p; }
    }
    if (h === null) return null;

    if (/y media/.test(t)) min = 30;
    else if (/y cuarto/.test(t)) min = 15;
    else if (/menos cuarto/.test(t)) { h -= 1; min = 45; }

    // Franjas horarias
    if (/(tarde|noche)/.test(t) && h < 12) h += 12;
    else if (/(am|manana|mediodia)/.test(t)) { /* mantener */ }
    else if (h >= 1 && h <= 11) h += 12; // heurística: en restaurante, cena

    if (h === 24) h = 0;
    if (h > 23 || min > 59 || h < 0) return null;
    return String(h).padStart(2, "0") + ":" + String(min).padStart(2, "0");
  }

  const formatoFecha = (f) =>
    f.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });

  // ---------- Flujo de reservas ----------
  function iniciarReserva() {
    reserva = { paso: "personas", datos: {} };
    responder(`¡Perfecto! 📅 Vamos a reservar tu ${CFG.reservas.unidad}.\n¿Para cuántas personas?`, ["2 personas", "4 personas", "6 personas"]);
  }

  function procesarReserva(texto) {
    const t = normalizar(texto);
    if (t.includes("cancelar") || t.includes("olvidalo") || t.includes("salir")) {
      reserva = null;
      responder("Sin problema, reserva cancelada. ¿Te ayudo con algo más? 😊", CFG.sugerencias);
      return;
    }

    switch (reserva.paso) {
      case "personas": {
        const m = t.match(/\d+/);
        let n = m ? parseInt(m[0]) : palabraANumero(t);
        if (n === null && /(pareja|par)\b/.test(t)) n = 2;
        if (n === null || isNaN(n)) { responder("¿Cuántas personas serán? Escríbeme un número, por ejemplo: 4"); return; }
        if (n < 1) { responder("Necesito al menos 1 persona 😄 ¿Cuántos serán?"); return; }
        if (n > CFG.reservas.maxPersonas) {
          responder(`Para grupos de más de ${CFG.reservas.maxPersonas} personas mejor llámanos al ${CFG.negocio.telefono} y armamos algo especial 🎉`);
          reserva = null; return;
        }
        reserva.datos.personas = n;
        reserva.paso = "fecha";
        responder(`¡Genial, ${n} persona${n > 1 ? "s" : ""}! 🗓️ ¿Para qué día? (puedes decir "hoy", "mañana", "viernes" o una fecha como 25/07)`, ["Hoy", "Mañana", "Sábado"]);
        break;
      }
      case "fecha": {
        const f = interpretarFecha(texto);
        if (!f) { responder('No logré entender la fecha 🤔. Prueba con "hoy", "mañana", un día de la semana o formato 25/07.'); return; }
        reserva.datos.fecha = formatoFecha(f);
        reserva.paso = "hora";
        responder(`Perfecto, ${reserva.datos.fecha}. 🕐 ¿A qué hora? Horarios disponibles:`, CFG.reservas.horasDisponibles);
        break;
      }
      case "hora": {
        const h = interpretarHora(texto);
        if (!h) { responder("No entendí la hora 🤔. Ejemplos: 20:00, 8 pm, o toca una de las opciones.", CFG.reservas.horasDisponibles); return; }
        reserva.datos.hora = h;
        reserva.paso = "nombre";
        responder("¡Anotado! ✍️ ¿A nombre de quién hago la reserva?");
        break;
      }
      case "nombre": {
        if (texto.trim().length < 2) { responder("¿Me repites el nombre para la reserva?"); return; }
        reserva.datos.nombre = texto.trim();
        reserva.paso = "telefono";
        responder("Y por último, 📱 ¿un número de contacto para confirmarte?");
        break;
      }
      case "telefono": {
        const tel = texto.replace(/[^\d+]/g, "");
        if (tel.length < 7) { responder("Ese número parece incompleto 🤔 ¿Me lo escribes de nuevo?"); return; }
        reserva.datos.telefono = tel;
        reserva.paso = "confirmar";
        const d = reserva.datos;
        responder(
          `📋 Confírmame los datos:\n\n👥 ${d.personas} persona${d.personas > 1 ? "s" : ""}\n📅 ${d.fecha}\n🕐 ${d.hora}\n👤 ${d.nombre}\n📱 ${d.telefono}\n\n¿Todo correcto?`,
          ["✅ Confirmar", "❌ Cancelar"]
        );
        break;
      }
      case "confirmar": {
        // Detección por palabras completas (evita que "necesito" o "quisiera"
        // se cuelen como un "sí" por contener "si").
        const siYes = /\b(si|claro|confirmar|confirmo|confirma|confirmalo|correcto|correcta|vale|ok|okay|dale|perfecto|adelante|exacto|listo|guardala)\b/.test(t);
        const noNeg = /\b(no|nop|todavia|aun|espera|cambiar|cambia|corregir|corrige|editar|mal|error|equivocado|otra|otro)\b/.test(t);
        if (siYes && !noNeg) {
          const codigo = codigoReserva();
          guardarReserva({ ...reserva.datos, codigo });
          responder(rellenar(CFG.reservas.mensajeConfirmacion) + `\n\n🎫 Código de reserva: ${codigo}`);
          if (CFG.reservas.whatsappNegocio) {
            const d = reserva.datos;
            const msj = `🔔 NUEVA RESERVA — ${CFG.negocio.nombre}\n👥 ${d.personas} personas\n📅 ${d.fecha}\n🕐 ${d.hora}\n👤 ${d.nombre}\n📱 ${d.telefono}\n🎫 ${codigo}`;
            const url = `https://wa.me/${CFG.reservas.whatsappNegocio}?text=${encodeURIComponent(msj)}`;
            responderEnlace("Para dejarla 100% asegurada, envía el comprobante por WhatsApp con un toque 👇", "📲 Enviar comprobante por WhatsApp", url);
          }
          reserva = null;
        } else if (noNeg) {
          reserva = null;
          responder('Sin problema, no la he guardado. Cuando quieras empezar de nuevo dime "reservar" 😊', CFG.sugerencias);
        } else {
          // Respuesta ambigua: no cancelamos, volvemos a preguntar.
          responder("Perdona, no te entendí 🙈. ¿Confirmo la reserva? Responde sí o no.", ["✅ Sí, confirmar", "❌ No"]);
        }
        break;
      }
    }
  }

  function codigoReserva() {
    return "RES-" + Date.now().toString(36).toUpperCase().slice(-6);
  }

  function guardarReserva(datos) {
    const lista = leerReservas();
    lista.push({ ...datos, creada: new Date().toISOString() });
    guardarLista(lista);
    if (CFG.reservas.webhook) {
      // text/plain + no-cors evita el "preflight" CORS que bloquea las
      // peticiones a Google Apps Script desde el navegador. El cuerpo sigue
      // siendo JSON; Apps Script lo lee con e.postData.contents.
      fetch(CFG.reservas.webhook, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ negocio: CFG.negocio.nombre, ...datos })
      }).catch(() => {});
    }
  }

  // ---------- Detección de intenciones ----------
  function detectarIntencion(texto) {
    const t = normalizar(texto);

    if (/(reserv|apart|mesa para|cita|agendar|turno)/.test(t)) return { tipo: "reservar" };
    if (/(mis reservas|ver reservas|tengo reserva)/.test(t)) return { tipo: "verReservas" };
    if (/^(hola|buenas|buenos dias|buenas tardes|buenas noches|hey|que tal)\b/.test(t)) return { tipo: "saludo" };
    if (/(gracias|genial|perfecto|excelente)/.test(t)) return { tipo: "gracias" };
    if (/(adios|chao|hasta luego|nos vemos|bye)/.test(t)) return { tipo: "despedida" };

    // FAQs por puntaje de coincidencia
    let mejor = null, mejorPuntos = 0;
    for (const faq of CFG.faqs) {
      let puntos = 0;
      for (const clave of faq.claves) if (t.includes(normalizar(clave))) puntos++;
      if (puntos > mejorPuntos) { mejorPuntos = puntos; mejor = faq; }
    }
    if (mejor) return { tipo: "faq", faq: mejor };
    return { tipo: "desconocido" };
  }

  function procesarMensaje(texto) {
    if (reserva) { procesarReserva(texto); return; }
    const intencion = detectarIntencion(texto);
    switch (intencion.tipo) {
      case "reservar":
        if (CFG.reservas && CFG.reservas.habilitado === false) {
          responder(rellenar(`Para eso te atendemos directamente 😊. Llámanos o escríbenos al {telefono}.`));
        } else {
          iniciarReserva();
        }
        break;
      case "verReservas": {
        const lista = leerReservas();
        if (!lista.length) { responder("No encuentro reservas guardadas desde este dispositivo. ¿Quieres hacer una?", ["📅 Reservar"]); break; }
        const ultima = lista[lista.length - 1];
        responder(`Tu última reserva:\n👥 ${ultima.personas} personas\n📅 ${ultima.fecha}\n🕐 ${ultima.hora}\n👤 ${ultima.nombre}`);
        break;
      }
      case "saludo": responder(`¡Hola! 😊 ¿En qué te puedo ayudar?`, CFG.sugerencias); break;
      case "gracias": responder("¡Con mucho gusto! 🧡 ¿Algo más en lo que te pueda ayudar?"); break;
      case "despedida": responder(`¡Hasta pronto! Te esperamos en ${CFG.negocio.nombre} 👋`); break;
      case "faq": responder(rellenar(intencion.faq.respuesta)); break;
      default: responder(rellenar(CFG.fallback), CFG.sugerencias);
    }
  }

  // ---------- Voz (Web Speech API) ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const soportaVoz = CFG.voz.habilitada && !!SR;
  let reconocedor = null;

  function hablar(texto) {
    if (!vozActiva || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const limpio = texto.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "").replace(/\n+/g, ". ");
    const u = new SpeechSynthesisUtterance(limpio);
    u.lang = CFG.voz.idioma;
    u.rate = 1.05;
    const voces = window.speechSynthesis.getVoices();
    const vozEs = voces.find(v => v.lang.startsWith("es"));
    if (vozEs) u.voice = vozEs;
    window.speechSynthesis.speak(u);
  }

  function escuchar() {
    if (!soportaVoz) return;
    if (reconocedor) { reconocedor.stop(); return; }
    reconocedor = new SR();
    reconocedor.lang = CFG.voz.idioma;
    reconocedor.interimResults = false;
    const btn = document.getElementById("cbn-mic");
    btn.classList.add("cbn-grabando");
    reconocedor.onresult = (e) => {
      const texto = e.results[0][0].transcript;
      vozActiva = true; // si hablaste, te responde hablando
      enviarUsuario(texto);
    };
    reconocedor.onend = () => { btn.classList.remove("cbn-grabando"); reconocedor = null; };
    reconocedor.onerror = () => { btn.classList.remove("cbn-grabando"); reconocedor = null; };
    reconocedor.start();
  }

  // ---------- Interfaz ----------
  function crearUI() {
    const lado = CFG.tema.posicion === "izquierda" ? "left" : "right";
    document.documentElement.style.setProperty("--cbn-primario", CFG.tema.colorPrimario);
    document.documentElement.style.setProperty("--cbn-secundario", CFG.tema.colorSecundario);

    const raiz = document.createElement("div");
    raiz.id = "cbn-raiz";
    raiz.style[lado] = "24px";
    raiz.innerHTML = `
      <div id="cbn-panel" class="cbn-oculto" style="${lado}:0">
        <div id="cbn-cabecera">
          <div id="cbn-avatar">${CFG.tema.avatar}</div>
          <div>
            <div id="cbn-titulo">${CFG.tema.nombreAsistente}</div>
            <div id="cbn-subtitulo">${CFG.negocio.nombre} · en línea</div>
          </div>
          <button id="cbn-cerrar" aria-label="Cerrar chat">✕</button>
        </div>
        <div id="cbn-mensajes"></div>
        <div id="cbn-entrada">
          ${soportaVoz ? '<button id="cbn-mic" title="Hablar con el asistente" aria-label="Hablar">🎤</button>' : ""}
          <input id="cbn-texto" type="text" placeholder="Escribe tu mensaje..." autocomplete="off">
          <button id="cbn-enviar" aria-label="Enviar">➤</button>
        </div>
      </div>
      <button id="cbn-burbuja" aria-label="Abrir chat">${CFG.tema.avatar}<span id="cbn-punto"></span></button>
    `;
    document.body.appendChild(raiz);

    const panel = document.getElementById("cbn-panel");
    const input = document.getElementById("cbn-texto");

    document.getElementById("cbn-burbuja").onclick = () => {
      panel.classList.toggle("cbn-oculto");
      document.getElementById("cbn-punto").style.display = "none";
      if (!panel.classList.contains("cbn-oculto") && !document.getElementById("cbn-mensajes").children.length) {
        responder(rellenar(CFG.bienvenida), CFG.sugerencias);
      }
      input.focus();
    };
    document.getElementById("cbn-cerrar").onclick = () => panel.classList.add("cbn-oculto");
    document.getElementById("cbn-enviar").onclick = enviarDesdeInput;
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") enviarDesdeInput(); });
    if (soportaVoz) document.getElementById("cbn-mic").onclick = escuchar;

    function enviarDesdeInput() {
      const v = input.value.trim();
      if (!v) return;
      input.value = "";
      vozActiva = false; // si escribes, responde por texto
      enviarUsuario(v);
    }
  }

  function agregarMensaje(texto, quien, chips) {
    const cont = document.getElementById("cbn-mensajes");
    const div = document.createElement("div");
    div.className = "cbn-msg cbn-" + quien;
    div.textContent = texto;
    cont.appendChild(div);
    if (chips && chips.length) {
      const fila = document.createElement("div");
      fila.className = "cbn-chips";
      chips.forEach((c) => {
        const b = document.createElement("button");
        b.className = "cbn-chip";
        b.textContent = c;
        b.onclick = () => { fila.remove(); enviarUsuario(c.replace(/^[^\w¿¡]+\s*/u, "")); };
        fila.appendChild(b);
      });
      cont.appendChild(fila);
    }
    cont.scrollTop = cont.scrollHeight;
  }

  function enviarUsuario(texto) {
    agregarMensaje(texto, "usuario");
    // Simula "escribiendo..." para que se sienta natural
    const cont = document.getElementById("cbn-mensajes");
    const esc = document.createElement("div");
    esc.className = "cbn-msg cbn-bot cbn-escribiendo";
    esc.textContent = "···";
    cont.appendChild(esc);
    cont.scrollTop = cont.scrollHeight;
    setTimeout(() => { esc.remove(); procesarMensaje(texto); }, 450 + Math.random() * 400);
  }

  function responder(texto, chips) {
    if (modoLlamada) {
      if (window.ChatbotCerebro.alResponder) window.ChatbotCerebro.alResponder(texto, chips || []);
      return;
    }
    agregarMensaje(texto, "bot", chips);
    hablar(texto);
  }

  // Mensaje del bot acompañado de un botón que abre un enlace (ej. WhatsApp)
  function responderEnlace(texto, etiqueta, url) {
    if (modoLlamada) {
      if (window.ChatbotCerebro.alEnlace) window.ChatbotCerebro.alEnlace(texto, etiqueta, url);
      return;
    }
    agregarMensaje(texto, "bot");
    const cont = document.getElementById("cbn-mensajes");
    // Enlace nativo: dejamos que el navegador abra WhatsApp directamente.
    // (Interceptarlo con window.open provocaba una pestaña en blanco dentro
    // de visores con sandbox.)
    const a = document.createElement("a");
    a.className = "cbn-chip cbn-enlace";
    a.textContent = etiqueta;
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    cont.appendChild(a);
    cont.scrollTop = cont.scrollHeight;
  }

  // ---------- Arranque ----------
  if (modoLlamada) {
    window.ChatbotCerebro = {
      procesar: procesarMensaje,
      enReserva: () => !!reserva,
      alResponder: null,
      alEnlace: null
    };
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", crearUI);
  } else {
    crearUI();
  }
})();
