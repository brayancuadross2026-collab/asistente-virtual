/* CONFIGURACIÓN — DEMO Barbería El Corte Real
   Mismo motor (widget.js), otra configuración. */

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
  bienvenida: "¡Hola! 👋 Soy Nacho, la asistente de Barbería El Corte Real. Puedo darte cita, informarte de precios y servicios, o resolver tus dudas. ¿En qué te ayudo?",
  sugerencias: ["📅 Reservar", "💰 Precios", "📋 Servicios", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "cita",
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
    { claves: ["precio", "cuesta", "vale", "tarifa", "cuanto"], respuesta: "💰 Nuestros precios:\n• Corte de pelo — 18 €\n• Corte + barba — 28 €\n• Arreglo de barba — 12 €\n• Afeitado a navaja — 20 €\n• Corte infantil — 14 €\n\n¿Te reservo cita?" },
    { claves: ["servicio", "hacen", "corte", "barba", "afeitado", "degradado", "tinte"], respuesta: "💈 Esto es lo que hacemos:\n• Corte de pelo y degradados\n• Arreglo y diseño de barba\n• Afeitado tradicional a navaja\n• Corte infantil\n• Tratamientos capilares\n\n¿Sobre cuál quieres saber más?" },
    { claves: ["cita previa", "sin cita", "hay que reservar", "esperar", "cola"], respuesta: "📅 Trabajamos con cita previa para que no esperes, pero si te pasas y hay hueco te atendemos. Lo más seguro es reservar: te lo hago aquí mismo en 30 segundos." },
    { claves: ["pago", "tarjeta", "efectivo", "bizum"], respuesta: "💳 Aceptamos efectivo, tarjeta y Bizum." },
    { claves: ["aparcar", "parking", "coche", "metro"], respuesta: "🚇 Metro Bilbao y Tribunal a 5 minutos. En coche, hay parking en Fuencarral a dos portales." },
    { claves: ["nino", "niños", "infantil", "hijo"], respuesta: "👦 Sí, cortamos a niños desde los 3 años. El corte infantil son 14 € y tenemos mucha paciencia 😊" },
    { claves: ["horario", "hora", "abren", "cierran", "domingo", "sabado"], respuesta: "🕐 Nuestro horario:\n{horario}" },
    { claves: ["ubicacion", "direccion", "donde", "llegar"], respuesta: "📍 Estamos en {direccion}. Metro Bilbao o Tribunal, a 5 minutos andando." }
  ],
  fallback: "Mmm, no estoy segura de haberte entendido 🤔. Puedo ayudarte con: reservar, precios, servicios y horarios. ¿O prefieres llamarnos al {telefono}?"
};
