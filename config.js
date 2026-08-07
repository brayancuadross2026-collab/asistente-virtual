/* ============================================================
   CONFIGURACIÓN DEL CHATBOT — ESTE ES EL ÚNICO ARCHIVO QUE
   EDITAS PARA CADA CLIENTE NUEVO.
   Cambia textos, colores, horarios, menú y FAQs y el bot
   queda personalizado para ese negocio.

   Lo cargan demo-restaurante.html y llamada.html.

   Revisado el 2026-08-07 con el Kit 02:
   - Añadido reservas.palabrasClave. Sin él, el motor usaba el patrón
     por defecto, que empieza por "reserv": "quiero cancelar la reserva"
     abría el flujo de PEDIR mesa.
   - Añadida la FAQ de cancelar o cambiar la reserva, que faltaba.
   - Cambiada la clave "hora" por "a que hora": "hora" casa dentro de
     "ahora", así que la FAQ de horario saltaba sin venir a cuento.
   Negocio ficticio: es una demo de venta, los datos son de ejemplo.
   ============================================================ */

const CHATBOT_CONFIG = {

  negocio: {
    nombre: "La Brasa Dorada",
    tipo: "restaurante", // restaurante | barberia | clinica | tienda | otro
    telefono: "+34 603 621 660",
    direccion: "Calle de Fuencarral 78, Malasaña, Madrid",
    web: "www.labrasadorada.es",
    horario: "Lunes a Jueves: 13:00 – 23:30 | Viernes y Sábado: 13:00 – 01:00 | Domingo: 13:00 – 17:00"
  },

  // Apariencia del widget (colores de la marca del cliente)
  tema: {
    colorPrimario: "#C0392B",
    colorSecundario: "#E67E22",
    avatar: "🍖",
    nombreAsistente: "Doradita",
    posicion: "derecha" // derecha | izquierda
  },

  bienvenida: "¡Hola! 👋 Soy Doradita, la asistente virtual de La Brasa Dorada.\nPuedo reservarte mesa, contarte la carta y el horario, o resolverte cualquier duda. ¿Qué necesitas?",

  // Chips de sugerencia que se muestran al abrir el chat
  sugerencias: ["📅 Reservar mesa", "🕐 Horario", "🍽️ Ver carta", "📍 Ubicación"],

  // ---------- RESERVAS ----------
  reservas: {
    habilitado: true,
    // Qué se reserva: "mesa" (restaurante), "cita" (barbería/clínica), "turno"...
    unidad: "mesa",
    // El patrón exige el verbo de pedir. Si aquí pones "reserv" a secas,
    // "quiero cancelar la reserva" abre el flujo de reservar.
    palabrasClave: "(reservar|agendar|mesa para|quiero (una )?mesa|dame (una )?mesa|coger (una )?mesa|pedir (una )?mesa|hay sitio)",
    maxPersonas: 12,
    horasDisponibles: ["13:00", "14:00", "15:00", "20:00", "21:00", "22:00", "23:00"],
    // URL opcional: si el cliente quiere recibir cada reserva en su sistema
    // (Google Sheets, Zapier, Make, n8n...). null = solo local + WhatsApp.
    webhook: null,
    // Número de WhatsApp del NEGOCIO (con código de país, sin + ni espacios).
    whatsappNegocio: "34603621660",
    mensajeConfirmacion: "✅ ¡Reserva confirmada! Te esperamos. Si necesitas cancelar o cambiar, escríbenos al {telefono}."
  },

  // ---------- ASISTENTE DE VOZ ----------
  voz: {
    habilitada: true,
    idioma: "es-ES"
  },

  // ---------- PREGUNTAS FRECUENTES ----------
  // claves: palabras que activan la respuesta (sin tildes, minúsculas)
  faqs: [
    {
      claves: ["horario", "a que hora", "abren", "cierran", "abierto", "cerrado", "domingo"],
      respuesta: "🕐 Nuestro horario es:\n{horario}\n\n¿Te reservo mesa?"
    },
    {
      claves: ["ubicacion", "direccion", "donde estais", "llegar", "queda", "mapa", "metro"],
      respuesta: "📍 Estamos en {direccion}.\nMetro Tribunal (L1, L10) a 3 min andando. ¡Te esperamos!"
    },
    {
      claves: ["menu", "carta", "platos", "comida", "comer", "recomiendas", "especialidad"],
      respuesta: "🍽️ Nuestras especialidades:\n• Chuletón de vaca madurada (300g) — 24,00 €\n• Entrecot a la brasa — 18,50 €\n• Parrillada para compartir (2 pers.) — 39,00 €\n• Salmón a la brasa — 19,50 €\n• Menú del día — 13,50 €\n• Menú infantil — 8,50 €\n\n¿Te reservo una mesa para probarlos?"
    },
    {
      claves: ["precio", "cuesta", "vale", "vale el menu", "cuanto vale el menu", "costo", "barato", "caro", "euros"],
      respuesta: "💰 La carta va desde 8,50 € (menú infantil) hasta 39,00 € (parrillada para 2). El menú del día está a 13,50 € e incluye primero, segundo, postre y bebida.\n\n¿Te reservo mesa?"
    },
    {
      claves: ["domicilio", "a domicilio", "delivery", "para llevar", "envio", "glovo", "pedido", "uber"],
      respuesta: "🛵 ¡Sí tenemos entrega a domicilio! Pide por Glovo o Uber Eats, o llámanos al {telefono}. Tiempo estimado: 35 minutos."
    },
    {
      claves: ["formas de pago", "como se paga", "tarjeta", "efectivo", "bizum", "transferencia"],
      respuesta: "💳 Aceptamos efectivo, tarjeta (Visa/Mastercard) y Bizum."
    },
    {
      claves: ["parking", "parquin", "aparcar", "aparco", "donde aparco", "estacionamiento", "coche", "aparcamiento"],
      respuesta: "🚗 Hay un parking público (Tribunal) a 2 minutos. En zona SER azul/verde también puedes aparcar en la calle."
    },
    {
      claves: ["vegetariano", "vegano", "alergia", "gluten", "celiaco", "sin gluten"],
      respuesta: "🥗 Tenemos opciones vegetarianas y platos sin gluten. Avísanos al reservar cualquier alergia y el chef lo tendrá en cuenta."
    },
    {
      claves: ["wifi", "internet", "clave"],
      respuesta: "📶 Sí, tenemos WiFi gratis para clientes. Pide la contraseña a tu camarero."
    },
    {
      claves: ["evento", "cumpleanos", "grupo", "empresa", "celebracion", "comunion", "somos muchos"],
      respuesta: "🎉 ¡Organizamos eventos y celebraciones! Para grupos de más de 12 personas llámanos al {telefono} y preparamos un menú cerrado especial."
    },
    {
      claves: ["terraza", "fuera", "exterior"],
      respuesta: "☀️ Sí, tenemos terraza climatizada. Puedes indicarlo al reservar y te la guardamos si hay disponibilidad."
    },
    {
      claves: ["mascota", "perro", "gato", "pet"],
      respuesta: "🐶 ¡Somos pet friendly! Tu mascota es bienvenida en nuestra terraza."
    },
    {
      claves: ["cancelar", "anular", "cambiar la reserva", "cambiar la hora", "no podemos ir", "aplazar"],
      respuesta: "📅 Sin problema. Llámanos al {telefono} o escríbenos por WhatsApp y lo cambiamos.\n\nSi puedes, avísanos con unas horas: así podemos dar la mesa a otra gente."
    },
    {
      claves: ["humano", "una persona", "asesor", "hablar con alguien", "camarero", "llamaros"],
      respuesta: "👤 ¡Claro! Puedes hablar con nuestro equipo llamando al {telefono} o visitándonos en {direccion}."
    }
  ],

  // Respuesta cuando el bot no entiende
  fallback: "🤔 No estoy segura de haberte entendido. Puedo ayudarte con la carta, el horario, dónde estamos, domicilios y reservarte mesa.\n\nSi lo prefieres, llámanos al {telefono}. ¿Te reservo mesa?"
};
