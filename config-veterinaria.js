/* CONFIGURACIÓN — DEMO Clínica Veterinaria Patas
   Mismo motor (widget.js), otra configuración.

   Revisado el 2026-08-07 con el Kit 02:
   - Añadido reservas.palabrasClave (antes "cancelar la cita" abría el flujo
     de PEDIR cita).
   - De 8 a 13 FAQs. Era la peor de las ocho: le faltaban CUATRO de las ocho
     preguntas que hace cualquier cliente (qué ofrecéis, cómo se paga,
     cancelar o cambiar, y hablar con una persona).
   Negocio ficticio: es una demo de venta, los datos son de ejemplo. */

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
  bienvenida: "¡Hola! 👋 Soy Alba, la asistente de Clínica Veterinaria Patas.\nPuedo darte cita, decirte precios y servicios, o resolverte cualquier duda. Y si es urgente, dímelo ya.",
  sugerencias: ["📅 Reservar", "💰 Precios", "🚨 Urgencias", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "cita",
    palabrasClave: "(reservar|agendar|pedir (una )?cita|coger (una )?cita|quiero (una )?cita|dame (una )?cita|un hueco)",
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
    { claves: ["precio", "precio tiene", "cuesta", "vale", "tarifa", "la consulta", "cuanto cobrais"], respuesta: "💰 Nuestros precios:\n• Consulta general — 38 €\n• Vacunación — desde 25 €\n• Análisis de sangre — 45 €\n• Peluquería canina — desde 30 €\n• Cirugía — presupuesto sin compromiso\n\n¿Te doy cita?" },
    { claves: ["urgencia", "urgente", "emergencia", "grave", "ahora mismo", "de noche", "24 horas"], respuesta: "🚨 Atendemos urgencias 24 horas. Si es algo grave, llámanos YA al {telefono} y ven directamente: te atendemos nada más llegar, sin cita." },
    { claves: ["vacuna", "vacunar", "cartilla", "desparasitar", "chip", "microchip"], respuesta: "💉 Ponemos todas las vacunas, microchip y desparasitación.\n\nTe avisamos cuando toque la siguiente para que no se te pase. ¿Te doy cita?" },
    { claves: ["gato", "perro", "conejo", "exotico", "huron", "ave", "que animales"], respuesta: "🐾 Atendemos perros, gatos, conejos, hurones, aves y pequeños mamíferos.\n\nSi tienes un exótico, dínoslo al reservar para asignarte al especialista." },
    { claves: ["cirugia", "operacion", "castrar", "cuesta castrar", "castrar a mi", "esterilizar", "quirofano"], respuesta: "🏥 Tenemos quirófano propio con monitorización. Damos presupuesto cerrado antes de operar y te llamamos en cuanto termina.\n\n¿Te doy cita para valorarlo?" },
    { claves: ["peluqueria", "baño", "cortar el pelo", "arreglar el pelo"], respuesta: "✂️ Sí, tenemos peluquería canina. Baño y corte según la raza, desde 30 €.\n\n¿Te reservo un hueco?" },
    { claves: ["horario", "a que hora", "abren", "cierran", "sabados", "domingo"], respuesta: "🕐 Nuestro horario:\n{horario}\n\nLas urgencias las atendemos las 24 horas, también fuera de ese horario." },
    { claves: ["ubicacion", "direccion", "donde estais", "llegar", "parking", "aparcar"], respuesta: "📍 Estamos en {direccion}. Hay parking en la puerta y metro Ciudad Lineal a 5 minutos." },
    { claves: ["servicios", "que haceis", "que ofreceis", "en que consiste", "especialidades"], respuesta: "🐾 Esto es lo que hacemos:\n• Consulta general y revisiones\n• Vacunas, microchip y desparasitación\n• Análisis y pruebas de imagen\n• Cirugía con quirófano propio\n• Peluquería canina\n• Urgencias 24 horas\n\n¿Sobre cuál quieres saber más?" },
    { claves: ["formas de pago", "como se paga", "tarjeta", "efectivo", "bizum", "a plazos"], respuesta: "💳 Aceptamos efectivo, tarjeta y Bizum.\n\nEn cirugías y tratamientos largos se puede fraccionar el pago: dínoslo y lo vemos sin problema." },
    { claves: ["cancelar", "anular", "cambiar la cita", "aplazar", "no puedo ir", "cambiar la hora"], respuesta: "📅 Sin problema. Llámanos al {telefono} o escríbenos por WhatsApp y la movemos al día que te venga bien.\n\nAvísanos con unas horas si puedes: así se lo damos a otra mascota que esté esperando." },
    { claves: ["hablar con", "una persona", "whatsapp", "llamaros", "contacto", "veterinario"], respuesta: "📲 Claro. Llámanos al {telefono} o escríbenos por WhatsApp a ese mismo número y te atiende el equipo.\n\nSi es una urgencia, mejor llama: así vamos preparando." },
    { claves: ["nervioso", "se pone nervioso", "se pone muy nervioso", "miedo", "se pone mal", "estres", "agresivo"], respuesta: "🤍 Nos lo dicen mucho. Trabajamos con manejo tranquilo y sin prisas, y si hace falta te damos cita a primera hora, cuando hay menos animales en la sala.\n\nDínoslo al reservar y lo preparamos." }
  ],
  fallback: "🤔 No estoy segura de haberte entendido. Puedo ayudarte con precios, servicios, vacunas, urgencias, horarios y darte cita.\n\nSi es urgente o lo prefieres, llámanos al {telefono}. ¿Te doy cita?"
};
