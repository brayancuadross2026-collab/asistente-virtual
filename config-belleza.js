/* CONFIGURACIÓN — DEMO Espacio Bruma · Belleza
   Mismo motor (widget.js), otra configuración. */

const CHATBOT_CONFIG = {
  negocio: {
    nombre: "Espacio Bruma · Belleza",
    tipo: "belleza",
    telefono: "+34 603 621 660",
    direccion: "Calle de Serrano 141, Madrid",
    web: "tuasistente24.com",
    horario: "Lunes a Viernes: 10:00 – 20:30 | Sábados: 10:00 – 15:00 | Domingos: cerrado"
  },
  tema: {
    colorPrimario: "#7A3B5E",
    colorSecundario: "#D98BA8",
    avatar: "💅",
    nombreAsistente: "Vera",
    posicion: "derecha"
  },
  bienvenida: "¡Hola! 👋 Soy Vera, la asistente de Espacio Bruma · Belleza. Puedo darte cita, informarte de precios y servicios, o resolver tus dudas. ¿En qué te ayudo?",
  sugerencias: ["📅 Reservar", "💰 Precios", "📋 Servicios", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "cita",
    maxPersonas: 6,
    nombrePersonas: ["persona", "personas"],
    preguntaPersonas: "¿Para cuántas personas?",
    opcionesPersonas: ["Solo para mí", "2 personas", "3 personas"],
    repitePersonas: "¿Para cuántas personas reservo? Escríbeme un número, por ejemplo: 1",
    horasDisponibles: ["10:00", "11:00", "12:00", "13:00", "16:00", "17:00", "18:00", "19:00"],
    webhook: null,
    whatsappNegocio: "34603621660",
    mensajeConfirmacion: "✅ ¡Confirmado! Te esperamos. Si necesitas cambiarlo o cancelarlo, llámanos al {telefono}."
  },
  voz: { habilitada: true, idioma: "es-ES" },
  faqs: [
    { claves: ["precio", "cuesta", "vale", "tarifa", "cuanto"], respuesta: "💰 Nuestros precios más pedidos:\n• Manicura semipermanente — 28 €\n• Pedicura completa — 35 €\n• Tratamiento facial — 55 €\n• Extensiones de pestañas — 65 €\n• Depilación láser — desde 35 €\n\nLa primera valoración es gratuita. ¿Te reservo cita?" },
    { claves: ["servicio", "tratamiento", "hacen", "uñas", "manicura", "pestañas", "facial", "laser", "depilacion"], respuesta: "💅 Esto es lo que hacemos:\n• Manicura y pedicura\n• Extensiones y lifting de pestañas\n• Tratamientos faciales\n• Depilación láser y con cera\n• Tratamientos corporales\n\n¿Sobre cuál te informo?" },
    { claves: ["duracion", "cuanto dura", "tiempo", "tarda"], respuesta: "⏱️ Depende del tratamiento: la manicura son unos 45 minutos, un facial ronda la hora y las pestañas hora y media. Te lo confirmo al reservar." },
    { claves: ["embarazada", "embarazo", "alergia", "piel sensible"], respuesta: "🤍 Sin problema, adaptamos los tratamientos. Cuéntanoslo al reservar y la esteticista lo tendrá en cuenta en la valoración." },
    { claves: ["pago", "tarjeta", "efectivo", "bizum", "bono"], respuesta: "💳 Aceptamos efectivo, tarjeta y Bizum. También tenemos bonos de sesiones con descuento." },
    { claves: ["horario", "hora", "abren", "cierran", "sabado"], respuesta: "🕐 Nuestro horario:\n{horario}" },
    { claves: ["ubicacion", "direccion", "donde", "llegar", "metro"], respuesta: "📍 Estamos en {direccion}. Metro Núñez de Balboa a 4 minutos." }
  ],
  fallback: "Mmm, no estoy segura de haberte entendido 🤔. Puedo ayudarte con: reservar, precios, servicios y horarios. ¿O prefieres llamarnos al {telefono}?"
};
