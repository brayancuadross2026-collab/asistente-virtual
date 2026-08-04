/* CONFIGURACIÓN — DEMO Forja Training Club
   Mismo motor (widget.js), otra configuración. */

const CHATBOT_CONFIG = {
  negocio: {
    nombre: "Forja Training Club",
    tipo: "gimnasio",
    telefono: "+34 603 621 660",
    direccion: "Avenida de Brasil 24, Madrid",
    web: "tuasistente24.com",
    horario: "Lunes a Viernes: 07:00 – 22:30 | Sábados y Domingos: 09:00 – 15:00"
  },
  tema: {
    colorPrimario: "#12181F",
    colorSecundario: "#22D3A5",
    avatar: "🏋️",
    nombreAsistente: "Leo",
    posicion: "derecha"
  },
  bienvenida: "¡Hola! 👋 Soy Leo, la asistente de Forja Training Club. Puedo darte cita, informarte de precios y servicios, o resolver tus dudas. ¿En qué te ayudo?",
  sugerencias: ["📅 Reservar", "💰 Precios", "📋 Servicios", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "clase de prueba",
    maxPersonas: 6,
    nombrePersonas: ["persona", "personas"],
    preguntaPersonas: "¿Para cuántas personas?",
    opcionesPersonas: ["Solo yo", "2 personas", "3 personas"],
    repitePersonas: "¿Para cuántas personas? Escríbeme un número, por ejemplo: 1",
    horasDisponibles: ["07:00", "09:00", "11:00", "13:00", "17:00", "18:00", "19:00", "20:00"],
    webhook: null,
    whatsappNegocio: "34603621660",
    mensajeConfirmacion: "✅ ¡Confirmado! Te esperamos. Si necesitas cambiarlo o cancelarlo, llámanos al {telefono}."
  },
  voz: { habilitada: true, idioma: "es-ES" },
  faqs: [
    { claves: ["precio", "cuota", "cuesta", "tarifa", "mensualidad", "cuanto"], respuesta: "💰 Nuestras tarifas:\n• Sala libre — 39 €/mes\n• Entrenamiento en grupo — 69 €/mes\n• Grupo + sala libre — 85 €/mes\n• Entrenamiento personal — 45 €/sesión\n\nSin matrícula ni permanencia. ¿Te reservo la clase de prueba gratis?" },
    { claves: ["prueba", "gratis", "probar", "clase de prueba"], respuesta: "🎁 La primera clase es gratuita y sin compromiso: vienes, entrenas con el grupo y decides. ¿Te la reservo?" },
    { claves: ["horario", "hora", "abren", "cierran", "fin de semana"], respuesta: "🕐 Nuestro horario:\n{horario}" },
    { claves: ["clases", "actividades", "que hay", "entrenamiento", "funcional"], respuesta: "🏋️ Tenemos entrenamiento funcional, fuerza, HIIT y movilidad. Grupos de máximo 8 personas con entrenador siempre presente." },
    { claves: ["permanencia", "contrato", "baja", "cancelar"], respuesta: "✅ Sin permanencia ni matrícula. Te das de baja cuando quieras avisando 15 días antes." },
    { claves: ["principiante", "nunca", "empezar", "novato", "mayor"], respuesta: "💪 Perfecto, la mitad de los que entran empiezan de cero. El plan se adapta a tu nivel actual, no al revés." },
    { claves: ["ducha", "vestuario", "taquilla", "toalla"], respuesta: "🚿 Tenemos vestuarios con duchas y taquillas. Solo trae toalla y ropa cómoda." },
    { claves: ["ubicacion", "direccion", "donde", "metro", "parking"], respuesta: "📍 Estamos en {direccion}. Metro Nuevos Ministerios a 6 minutos." }
  ],
  fallback: "Mmm, no estoy segura de haberte entendido 🤔. Puedo ayudarte con: reservar, precios, servicios y horarios. ¿O prefieres llamarnos al {telefono}?"
};
