/* CONFIGURACIÓN — DEMO Clínica Veterinaria Patas
   Mismo motor (widget.js), otra configuración. */

const CHATBOT_CONFIG = {
  negocio: {
    nombre: "Clínica Veterinaria Patas",
    tipo: "veterinaria",
    telefono: "+34 603 621 660",
    direccion: "Calle de Alcalá 320, Madrid",
    web: "tuasistente24.com",
    horario: "Lunes a Viernes: 09:30 – 21:00 | Sábados: 10:00 – 14:00 | Urgencias 24 h"
  },
  tema: {
    colorPrimario: "#15616D",
    colorSecundario: "#78C6A3",
    avatar: "🐶",
    nombreAsistente: "Alba",
    posicion: "derecha"
  },
  bienvenida: "¡Hola! 👋 Soy Alba, la asistente de Clínica Veterinaria Patas. Puedo darte cita, informarte de precios y servicios, o resolver tus dudas. ¿En qué te ayudo?",
  sugerencias: ["📅 Reservar", "💰 Precios", "📋 Servicios", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "cita",
    maxPersonas: 4,
    nombrePersonas: ["mascota", "mascotas"],
    preguntaPersonas: "¿Para cuántas mascotas?",
    opcionesPersonas: ["Una mascota", "2 mascotas", "3 mascotas"],
    repitePersonas: "¿Para cuántas mascotas es la cita? Escríbeme un número, por ejemplo: 1",
    horasDisponibles: ["10:00", "11:00", "12:00", "13:00", "17:00", "18:00", "19:00", "20:00"],
    webhook: null,
    whatsappNegocio: "34603621660",
    mensajeConfirmacion: "✅ ¡Confirmado! Te esperamos. Si necesitas cambiarlo o cancelarlo, llámanos al {telefono}."
  },
  voz: { habilitada: true, idioma: "es-ES" },
  faqs: [
    { claves: ["precio", "cuesta", "vale", "tarifa", "consulta", "cuanto"], respuesta: "💰 Nuestros precios:\n• Consulta general — 38 €\n• Vacunación — desde 25 €\n• Análisis de sangre — 45 €\n• Peluquería canina — desde 30 €\n• Cirugía — presupuesto sin compromiso\n\n¿Te doy cita?" },
    { claves: ["urgencia", "urgente", "emergencia", "grave", "ahora", "noche"], respuesta: "🚨 Atendemos urgencias 24 horas. Si es algo grave, llámanos YA al {telefono} y ven directamente, te atendemos nada más llegar." },
    { claves: ["vacuna", "vacunar", "cartilla", "desparasitar", "chip"], respuesta: "💉 Ponemos todas las vacunas, microchip y desparasitación. Te avisamos cuando toque la siguiente para que no se te pase." },
    { claves: ["gato", "perro", "conejo", "exotico", "huron", "ave"], respuesta: "🐾 Atendemos perros, gatos, conejos, hurones, aves y pequeños mamíferos. Si tienes un exótico, dínoslo al reservar." },
    { claves: ["cirugia", "operacion", "castrar", "esterilizar"], respuesta: "🏥 Tenemos quirófano propio con monitorización. Damos presupuesto cerrado antes de operar y te llamamos en cuanto termina." },
    { claves: ["peluqueria", "baño", "cortar", "pelo"], respuesta: "✂️ Sí, tenemos peluquería canina. Baño y corte según la raza, desde 30 €." },
    { claves: ["horario", "hora", "abren", "cierran", "sabado"], respuesta: "🕐 Nuestro horario:\n{horario}" },
    { claves: ["ubicacion", "direccion", "donde", "llegar", "parking"], respuesta: "📍 Estamos en {direccion}. Hay parking en la puerta y metro Ciudad Lineal a 5 minutos." }
  ],
  fallback: "Mmm, no estoy segura de haberte entendido 🤔. Puedo ayudarte con: reservar, precios, servicios y horarios. ¿O prefieres llamarnos al {telefono}?"
};
