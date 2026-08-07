/* CONFIGURACIÓN — DEMO Barbería El Corte Real
   Mismo motor (widget.js), otra configuración.

   Revisado el 2026-08-07 con el Kit 02:
   - Añadido reservas.palabrasClave. Sin él, el motor usaba el patrón por
     defecto y "quiero cancelar la cita" abría el flujo de PEDIR cita.
   - De 8 a 13 FAQs (el mínimo del estándar son 12).
   - Cubiertas las 2 obligatorias que faltaban: cancelar/cambiar y hablar
     con una persona.
   - Nacho hablaba de sí mismo en femenino ("la asistente", "no estoy
     segura"). Corregido.
   Negocio ficticio: es una demo de venta, los datos son de ejemplo. */

const CHATBOT_CONFIG = {
  negocio: {
    nombre: "Barbería El Corte Real",
    tipo: "barberia",
    telefono: "+34 603 621 660",
    direccion: "Calle de Fuencarral 112, Madrid",
    web: "tuasistente24.com",
    horario: "Lunes a Viernes: 10:00 – 21:00 | Sábados: 10:00 – 20:00 | Domingos: cerrado"
  },
  tema: {
    colorPrimario: "#1F2A37",
    colorSecundario: "#C9A227",
    avatar: "💈",
    nombreAsistente: "Nacho",
    posicion: "derecha"
  },
  bienvenida: "¡Hola! 👋 Soy Nacho, el asistente de Barbería El Corte Real.\nPuedo darte cita, decirte precios y servicios, o resolverte cualquier duda. ¿Qué necesitas?",
  sugerencias: ["📅 Reservar", "💰 Precios", "📋 Servicios", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "cita",
    palabrasClave: "(reservar|agendar|pedir (una )?cita|coger (una )?cita|quiero (una )?cita|dame (una )?cita|un hueco|turno)",
    maxPersonas: 4,
    nombrePersonas: ["persona", "personas"],
    preguntaPersonas: "¿Para cuántas personas?",
    opcionesPersonas: ["Solo para mí", "2 personas", "3 personas"],
    repitePersonas: "¿Para cuántas personas es la cita? Escríbeme un número, por ejemplo: 1",
    horasDisponibles: ["10:00", "11:00", "12:00", "13:00", "17:00", "18:00", "19:00", "20:00"],
    webhook: null,
    whatsappNegocio: "34603621660",
    mensajeConfirmacion: "✅ ¡Confirmado! Te esperamos. Si necesitas cambiarlo o cancelarlo, llámanos al {telefono}."
  },
  voz: { habilitada: true, idioma: "es-ES" },
  faqs: [
    { claves: ["precio", "precio tiene", "cuesta", "vale", "tarifa", "cuanto cobrais"], respuesta: "💰 Nuestros precios:\n• Corte de pelo — 18 €\n• Corte + barba — 28 €\n• Arreglo de barba — 12 €\n• Afeitado a navaja — 20 €\n• Corte infantil — 14 €\n\n¿Te reservo cita?" },
    { claves: ["servicio", "hacen", "corte", "barba", "afeitado", "degradado", "tinte"], respuesta: "💈 Esto es lo que hacemos:\n• Corte de pelo y degradados\n• Arreglo y diseño de barba\n• Afeitado tradicional a navaja\n• Corte infantil\n• Tratamientos capilares\n\n¿Sobre cuál quieres saber más?" },
    { claves: ["cita previa", "sin cita", "hay que reservar", "esperar", "cola", "puedo pasarme"], respuesta: "📅 Trabajamos con cita previa para que no esperes, pero si te pasas y hay hueco te atendemos. Lo más seguro es reservar: te lo hago aquí mismo en 30 segundos." },
    { claves: ["pago", "formas de pago", "tarjeta", "efectivo", "bizum", "se puede pagar"], respuesta: "💳 Aceptamos efectivo, tarjeta y Bizum.\n\nSe paga al terminar, en el local." },
    { claves: ["aparcar", "parking", "coche", "metro"], respuesta: "🚇 Metro Bilbao y Tribunal a 5 minutos. En coche, hay parking en Fuencarral a dos portales." },
    { claves: ["nino", "niños", "infantil", "hijo", "peque"], respuesta: "👦 Sí, cortamos a niños desde los 3 años. El corte infantil son 14 € y tenemos mucha paciencia 😊\n\n¿Te reservo un hueco para él?" },
    { claves: ["horario", "a que hora", "abren", "cierran", "domingo", "sabado", "festivo"], respuesta: "🕐 Nuestro horario:\n{horario}\n\nLos domingos cerramos. ¿Te busco hueco entre semana?" },
    { claves: ["ubicacion", "direccion", "donde estais", "llegar"], respuesta: "📍 Estamos en {direccion}. Metro Bilbao o Tribunal, a 5 minutos andando." },
    { claves: ["cancelar", "anular", "cambiar la cita", "aplazar", "no puedo ir", "cambiar la hora"], respuesta: "📅 Sin problema. Llámanos al {telefono} o escríbenos por WhatsApp y lo movemos a la hora que te venga bien.\n\nAvísanos con un par de horas si puedes: así se lo damos a otro y no perdemos el hueco." },
    { claves: ["hablar con", "una persona", "whatsapp", "llamaros", "contacto"], respuesta: "📲 Claro. Llámanos al {telefono} o escríbenos por WhatsApp a ese mismo número y te atiende alguien del equipo.\n\nY si prefieres, te reservo yo la cita ahora mismo." },
    { claves: ["cuanto dura", "dura el corte", "cuanto se tarda", "se tarda en", "cuanto tiempo", "tardais"], respuesta: "⏱️ Lo normal:\n• Corte — unos 30 minutos\n• Corte + barba — unos 45 minutos\n• Afeitado a navaja — unos 30 minutos\n\nComo vamos con cita, no esperas. ¿Te reservo?" },
    { claves: ["boda", "para bodas", "cortes para boda", "novio", "evento", "ocasion especial", "despedida"], respuesta: "🤵 Sí, preparamos para bodas y eventos: corte, barba y peinado el mismo día.\n\nSi sois varios, reservad con tiempo y os cogemos seguidos. ¿Te reservo?" },
    { claves: ["productos", "marcas", "cera", "champu", "que usais"], respuesta: "🧴 Trabajamos con productos profesionales y los vendemos en la barbería: ceras, aceites de barba y champús.\n\nSi buscas algo concreto, pregúntanos al {telefono}." }
  ],
  fallback: "🤔 No estoy seguro de haberte entendido. Puedo ayudarte con precios, servicios, horarios, dónde estamos y reservarte cita.\n\nSi lo prefieres, llámanos al {telefono}. ¿Te reservo un hueco?"
};
