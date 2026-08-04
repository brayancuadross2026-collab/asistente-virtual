/* ============================================================
   CONFIGURACIÓN — DEMO CLÍNICA DENTAL
   Mismo motor (widget.js), otra configuración.
   Esto demuestra que el asistente sirve para cualquier sector.
   ============================================================ */

const CHATBOT_CONFIG = {

  negocio: {
    nombre: "Clínica Dental Sonrisa Norte",
    tipo: "clinica",
    telefono: "+34 603 621 660",
    direccion: "Calle de Velázquez 87, Barrio de Salamanca, Madrid",
    web: "www.sonrisanorte.es",
    horario: "Lunes a Viernes: 09:00 – 20:30 | Sábados: 09:00 – 14:00 | Domingos: cerrado"
  },

  tema: {
    colorPrimario: "#0E7C86",
    colorSecundario: "#34B3A0",
    avatar: "🦷",
    nombreAsistente: "Marta",
    posicion: "derecha"
  },

  bienvenida: "¡Hola! 👋 Soy Marta, la asistente de Clínica Dental Sonrisa Norte. Puedo darte cita, informarte de tratamientos y precios, o resolver tus dudas. ¿En qué te ayudo?",

  sugerencias: ["📅 Pedir cita", "💰 Precios", "🦷 Tratamientos", "🕐 Horario"],

  reservas: {
    habilitado: true,
    unidad: "cita",
    maxPersonas: 4,
    nombrePersonas: ["paciente", "pacientes"],
    // Textos adaptados al sector (una clínica no pregunta como un restaurante)
    preguntaPersonas: "¿Para cuántos pacientes?",
    opcionesPersonas: ["Solo para mí", "2 personas", "3 personas"],
    repitePersonas: "¿Para cuántos pacientes es la cita? Escríbeme un número, por ejemplo: 1",
    horasDisponibles: ["09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00", "19:00"],
    webhook: null,
    whatsappNegocio: "34603621660",
    mensajeConfirmacion: "✅ ¡Cita confirmada! Te esperamos. Si necesitas cambiarla o cancelarla, llámanos al {telefono}."
  },

  voz: { habilitada: true, idioma: "es-ES" },

  faqs: [
    {
      claves: ["horario", "hora", "abren", "cierran", "abierto", "cerrado", "sabado"],
      respuesta: "🕐 Nuestro horario es:\n{horario}\n\n¿Quieres que te dé cita?"
    },
    {
      claves: ["ubicacion", "direccion", "donde", "llegar", "queda", "mapa", "metro", "parking"],
      respuesta: "📍 Estamos en {direccion}.\nMetro Núñez de Balboa (L5, L9) a 2 minutos. Hay parking en la misma calle."
    },
    {
      claves: ["precio", "cuesta", "vale", "costo", "tarifa", "presupuesto", "cuanto"],
      respuesta: "💰 Nuestros precios orientativos:\n• Primera visita y diagnóstico — GRATIS\n• Limpieza bucal — 55 €\n• Empaste — desde 60 €\n• Implante (corona incluida) — desde 950 €\n• Ortodoncia invisible — desde 2.900 €\n• Blanqueamiento — 290 €\n\nLa primera visita es gratuita y te damos presupuesto cerrado sin compromiso. ¿Te doy cita?"
    },
    {
      claves: ["tratamiento", "servicios", "hacen", "implante", "ortodoncia", "invisalign", "brackets", "carillas", "blanqueamiento", "endodoncia"],
      respuesta: "🦷 Estos son nuestros tratamientos:\n• Odontología general y limpiezas\n• Implantes dentales\n• Ortodoncia invisible y brackets\n• Estética dental: carillas y blanqueamiento\n• Endodoncia y periodoncia\n• Odontopediatría (niños)\n\n¿Sobre cuál quieres información?"
    },
    {
      claves: ["primera", "diagnostico", "revision", "gratis", "gratuita"],
      respuesta: "🎁 La primera visita es GRATUITA e incluye revisión completa, radiografía y presupuesto cerrado sin compromiso. ¿Te reservo un hueco?"
    },
    {
      claves: ["seguro", "aseguradora", "adeslas", "sanitas", "dkv", "mutua", "asisa"],
      respuesta: "🏥 Trabajamos con Adeslas, Sanitas, DKV, Asisa y Mapfre. Si tienes otra aseguradora, llámanos al {telefono} y lo miramos."
    },
    {
      claves: ["financiar", "financiacion", "plazos", "pagar a plazos", "credito"],
      respuesta: "💳 Sí, financiamos los tratamientos hasta en 24 meses sin intereses. Te lo explicamos todo en la primera visita, que es gratuita."
    },
    {
      claves: ["urgencia", "urgente", "dolor", "duele", "roto", "flemon", "hoy mismo"],
      respuesta: "🚨 Si tienes dolor o una urgencia, llámanos ahora mismo al {telefono} y te atendemos hoy. Guardamos huecos cada día para urgencias."
    },
    {
      claves: ["nino", "niños", "infantil", "hijo", "hija", "pediatrico"],
      respuesta: "👶 Sí, tenemos odontopediatría. La revisión infantil es gratuita hasta los 14 años y nuestro equipo está especializado en que los peques no pasen miedo."
    },
    {
      claves: ["miedo", "dolor", "anestesia", "duele mucho"],
      respuesta: "😌 Te entendemos, es muy común. Trabajamos con sedación consciente y anestesia sin dolor. Cuéntanoslo en la primera visita y adaptamos todo a tu ritmo."
    },
    {
      claves: ["aparcar", "coche", "aparcamiento"],
      respuesta: "🚗 Hay parking público en la misma calle y zona SER. Metro Núñez de Balboa a 2 minutos."
    },
    {
      claves: ["humano", "persona", "hablar con alguien", "telefono", "llamar"],
      respuesta: "👤 Claro, llámanos al {telefono} y te atiende nuestro equipo, o pásate por {direccion}."
    }
  ],

  fallback: "Mmm, no estoy segura de haberte entendido 🤔. Puedo ayudarte con: pedir cita, precios, tratamientos, seguros y financiación. ¿O prefieres llamarnos al {telefono}?"
};
