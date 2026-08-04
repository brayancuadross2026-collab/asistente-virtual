/* CONFIGURACIÓN — DEMO Núcleo · Pilates y Fisioterapia
   Mismo motor (widget.js), otra configuración. */

const CHATBOT_CONFIG = {
  negocio: {
    nombre: "Núcleo · Pilates y Fisioterapia",
    tipo: "pilates",
    telefono: "+34 603 621 660",
    direccion: "Calle de Príncipe de Vergara 88, Madrid",
    web: "tuasistente24.com",
    horario: "Lunes a Viernes: 08:00 – 21:00 | Sábados: 09:00 – 14:00 | Domingos: cerrado"
  },
  tema: {
    colorPrimario: "#3C6E71",
    colorSecundario: "#A8DADC",
    avatar: "🧘",
    nombreAsistente: "Irene",
    posicion: "derecha"
  },
  bienvenida: "¡Hola! 👋 Soy Irene, la asistente de Núcleo · Pilates y Fisioterapia. Puedo darte cita, informarte de precios y servicios, o resolver tus dudas. ¿En qué te ayudo?",
  sugerencias: ["📅 Reservar", "💰 Precios", "📋 Servicios", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "sesión",
    maxPersonas: 4,
    nombrePersonas: ["persona", "personas"],
    preguntaPersonas: "¿Para cuántas personas?",
    opcionesPersonas: ["Solo para mí", "2 personas", "3 personas"],
    repitePersonas: "¿Para cuántas personas es la sesión? Escríbeme un número, por ejemplo: 1",
    horasDisponibles: ["08:00", "09:00", "10:00", "11:00", "17:00", "18:00", "19:00", "20:00"],
    webhook: null,
    whatsappNegocio: "34603621660",
    mensajeConfirmacion: "✅ ¡Confirmado! Te esperamos. Si necesitas cambiarlo o cancelarlo, llámanos al {telefono}."
  },
  voz: { habilitada: true, idioma: "es-ES" },
  faqs: [
    { claves: ["precio", "cuesta", "vale", "tarifa", "bono", "cuanto", "mensualidad"], respuesta: "💰 Nuestras tarifas:\n• Pilates 2 días/semana — 89 €/mes\n• Pilates 3 días/semana — 115 €/mes\n• Sesión de fisioterapia — 45 €\n• Bono pilates + fisio — 125 €/mes\n\nLa valoración inicial es gratuita. ¿Te la reservo?" },
    { claves: ["valoracion", "primera", "gratis", "prueba", "probar"], respuesta: "🎁 La valoración postural inicial es gratuita: analizamos tu postura, hablamos de tus molestias y te decimos si te encajamos. Sin compromiso." },
    { claves: ["lesion", "dolor", "espalda", "lumbar", "cervical", "hernia"], respuesta: "🩺 Trabajamos mucho con lesiones de espalda, hernias y dolor cervical. Las clases las da un fisioterapeuta y adaptamos cada ejercicio a tu caso." },
    { claves: ["embarazo", "embarazada", "postparto", "suelo pelvico"], respuesta: "🤰 Sí, tenemos programas de pilates para embarazo y postparto, y fisioterapia de suelo pélvico con especialista." },
    { claves: ["horario", "hora", "abren", "cierran", "clases"], respuesta: "🕐 Nuestro horario:\n{horario}" },
    { claves: ["grupo", "cuantas personas", "gente", "masificado"], respuesta: "👥 Grupos de 5 personas como máximo. Es lo que nos permite corregir a cada uno en cada ejercicio." },
    { claves: ["permanencia", "baja", "cancelar", "contrato"], respuesta: "✅ Sin permanencia. Avisas con 15 días y te damos de baja sin coste." },
    { claves: ["ubicacion", "direccion", "donde", "metro"], respuesta: "📍 Estamos en {direccion}. Metro Diego de León a 3 minutos." }
  ],
  fallback: "Mmm, no estoy segura de haberte entendido 🤔. Puedo ayudarte con: reservar, precios, servicios y horarios. ¿O prefieres llamarnos al {telefono}?"
};
