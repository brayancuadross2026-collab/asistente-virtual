/* CONFIGURACIÓN — DEMO Forja Training Club
   Mismo motor (widget.js), otra configuración.

   Revisado el 2026-08-07 con el Kit 02:
   - Añadido reservas.palabrasClave. Ojo: "clase de prueba" NO entra en el
     patrón, porque entonces la FAQ que explica la prueba gratis no se
     dispararía nunca. El patrón exige el verbo de pedir.
   - De 8 a 13 FAQs. Cubiertas las 2 obligatorias que faltaban:
     cómo se paga y hablar con una persona.
   - Leo hablaba de sí mismo en femenino. Corregido.
   Negocio ficticio: es una demo de venta, los datos son de ejemplo. */

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
  bienvenida: "¡Hola! 👋 Soy Leo, el asistente de Forja Training Club.\nPuedo reservarte la clase de prueba gratis, decirte las tarifas o resolverte cualquier duda. ¿Qué necesitas?",
  sugerencias: ["🎁 Clase de prueba", "💰 Tarifas", "📋 Clases", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "clase de prueba",
    palabrasClave: "(reservar|agendar|quiero probar|quiero apuntarme|apuntarme|me apunto|pedir (una )?cita|quiero (una )?cita|dame (una )?cita)",
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
    { claves: ["precio", "cuota", "cuesta", "tarifa", "mensualidad", "cuanto cobrais"], respuesta: "💰 Nuestras tarifas:\n• Sala libre — 39 €/mes\n• Entrenamiento en grupo — 69 €/mes\n• Grupo + sala libre — 85 €/mes\n• Entrenamiento personal — 45 €/sesión\n\nSin matrícula ni permanencia. ¿Te reservo la clase de prueba gratis?" },
    { claves: ["prueba", "gratis", "probar", "clase de prueba", "sin compromiso"], respuesta: "🎁 La primera clase es gratuita y sin compromiso: vienes, entrenas con el grupo y decides después.\n\n¿Te la reservo?" },
    { claves: ["horario", "a que hora", "abren", "cierran", "fin de semana", "domingo"], respuesta: "🕐 Nuestro horario:\n{horario}\n\n¿Te viene mejor por la mañana o por la tarde?" },
    { claves: ["clases", "actividades", "que hay", "entrenamiento", "funcional", "hiit"], respuesta: "🏋️ Tenemos entrenamiento funcional, fuerza, HIIT y movilidad. Grupos de máximo 8 personas con entrenador siempre presente.\n\n¿Te reservo una para probar?" },
    { claves: ["permanencia", "contrato", "darme de baja", "compromiso", "atado"], respuesta: "✅ Sin permanencia ni matrícula. Te das de baja cuando quieras avisando 15 días antes." },
    { claves: ["principiante", "nunca", "empezar", "novato", "mayor", "estoy fuera de forma"], respuesta: "💪 Perfecto, la mitad de los que entran empiezan de cero. El plan se adapta a tu nivel actual, no al revés.\n\n¿Te reservo la clase de prueba y lo ves tú mismo?" },
    { claves: ["ducha", "vestuario", "taquilla", "toalla", "que llevo"], respuesta: "🚿 Tenemos vestuarios con duchas y taquillas. El primer día solo trae toalla, ropa cómoda y zapatillas limpias." },
    { claves: ["ubicacion", "direccion", "donde estais", "metro", "aparcar"], respuesta: "📍 Estamos en {direccion}. Metro Nuevos Ministerios a 6 minutos." },
    { claves: ["formas de pago", "como se paga", "se paga la cuota", "tarjeta", "efectivo", "bizum", "domiciliado"], respuesta: "💳 La cuota va domiciliada mes a mes, y el alta la puedes pagar con tarjeta, efectivo o Bizum.\n\nNo hay matrícula ni cuota de inscripción." },
    { claves: ["hablar con", "una persona", "whatsapp", "llamaros", "contacto"], respuesta: "📲 Claro. Llámanos al {telefono} o escríbenos por WhatsApp a ese mismo número y te atiende alguien del equipo.\n\nY si prefieres, te reservo yo la clase de prueba." },
    { claves: ["cancelar la clase", "anular", "cambiar la clase", "no puedo ir", "aplazar"], respuesta: "📅 Sin problema. Llámanos al {telefono} o escríbenos por WhatsApp y la movemos a otro día.\n\nAvisa con unas horas si puedes: los grupos son de 8 y hay lista de espera." },
    { claves: ["entrenador personal", "personal", "individual", "uno a uno"], respuesta: "🎯 Sí, hacemos entrenamiento personal: 45 € la sesión, uno a uno con entrenador y plan hecho para ti.\n\nSe puede combinar con la cuota de grupo. ¿Te reservo una primera sesión?" },
    { claves: ["congelar", "vacaciones", "pausa", "parar la cuota", "lesion"], respuesta: "❄️ Puedes congelar la cuota si te vas de viaje o te lesionas: nos avisas y no se te cobra ese periodo.\n\nLlámanos al {telefono} y lo dejamos apuntado." }
  ],
  fallback: "🤔 No estoy seguro de haberte entendido. Puedo ayudarte con tarifas, clases, horarios, dónde estamos y reservarte la clase de prueba gratis.\n\nSi lo prefieres, llámanos al {telefono}. ¿Te reservo la prueba?"
};
