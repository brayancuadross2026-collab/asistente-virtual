/* CONFIGURACIÓN — DEMO Autoescuela Vía Directa
   Mismo motor (widget.js), otra configuración. */

const CHATBOT_CONFIG = {
  negocio: {
    nombre: "Autoescuela Vía Directa",
    tipo: "autoescuela",
    telefono: "+34 603 621 660",
    direccion: "Calle de Bravo Murillo 210, Madrid",
    web: "tuasistente24.com",
    horario: "Lunes a Viernes: 09:00 – 21:00 | Sábados: 10:00 – 14:00 | Domingos: cerrado"
  },
  tema: {
    colorPrimario: "#1D4E89",
    colorSecundario: "#F2B705",
    avatar: "🚗",
    nombreAsistente: "Rubén",
    posicion: "derecha"
  },
  bienvenida: "¡Hola! 👋 Soy Rubén, la asistente de Autoescuela Vía Directa. Puedo darte cita, informarte de precios y servicios, o resolver tus dudas. ¿En qué te ayudo?",
  sugerencias: ["📅 Reservar", "💰 Precios", "📋 Servicios", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "cita",
    maxPersonas: 5,
    nombrePersonas: ["persona", "personas"],
    preguntaPersonas: "¿Para cuántas personas?",
    opcionesPersonas: ["Solo para mí", "2 personas", "3 personas"],
    repitePersonas: "¿Para cuántas personas? Escríbeme un número, por ejemplo: 1",
    horasDisponibles: ["09:00", "10:00", "11:00", "12:00", "17:00", "18:00", "19:00", "20:00"],
    webhook: null,
    whatsappNegocio: "34603621660",
    mensajeConfirmacion: "✅ ¡Confirmado! Te esperamos. Si necesitas cambiarlo o cancelarlo, llámanos al {telefono}."
  },
  voz: { habilitada: true, idioma: "es-ES" },
  faqs: [
    { claves: ["precio", "cuesta", "vale", "tarifa", "matricula", "cuanto"], respuesta: "💰 Nuestros precios:\n• Matrícula permiso B — 190 € (incluye test ilimitados y teóricas)\n• Clase práctica — 32 €\n• Pack 10 clases — 290 €\n• Permiso A (moto) — desde 490 €\n• Curso intensivo — desde 750 €\n\nSin sorpresas: precio cerrado. ¿Te doy cita para informarte?" },
    { claves: ["carne", "permiso", "tipos", "moto", "camion", "b", "a2"], respuesta: "🚗 Preparamos permiso B (coche), A1, A2 y A (moto). También cursos intensivos y clases de recuperación para quien ya tiene el carné." },
    { claves: ["intensivo", "rapido", "cuanto tarda", "tiempo"], respuesta: "⚡ Con el curso intensivo se saca en unas 4 semanas si vienes a diario. El ritmo normal suele ser de 2 a 3 meses." },
    { claves: ["test", "teorico", "examen", "teoria"], respuesta: "📚 Los test online son ilimitados y están incluidos en la matrícula. Además damos clase teórica presencial todos los días." },
    { claves: ["practica", "clases", "coche", "profesor"], respuesta: "🚦 Las clases prácticas son de 45 minutos con profesor titulado, siempre el mismo para que haya continuidad. La clase suelta son 32 €." },
    { claves: ["financiar", "pagar", "plazos", "financiacion"], respuesta: "💳 Se puede pagar a plazos sin intereses. Te lo explicamos todo cuando vengas, sin compromiso." },
    { claves: ["horario", "hora", "abren", "cierran"], respuesta: "🕐 Nuestro horario:\n{horario}" },
    { claves: ["ubicacion", "direccion", "donde", "metro"], respuesta: "📍 Estamos en {direccion}. Metro Alvarado a 3 minutos." }
  ],
  fallback: "Mmm, no estoy segura de haberte entendido 🤔. Puedo ayudarte con: reservar, precios, servicios y horarios. ¿O prefieres llamarnos al {telefono}?"
};
