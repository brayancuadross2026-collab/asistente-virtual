/* CONFIGURACIÓN — DEMO Núcleo · Pilates y Fisioterapia
   Mismo motor (widget.js), otra configuración.

   Revisado el 2026-08-07 con el Kit 02:
   - Añadido reservas.palabrasClave (antes "cancelar la sesión" abría el
     flujo de PEDIR sesión).
   - De 8 a 13 FAQs. Cubierta la obligatoria que faltaba: cómo se paga.
   Negocio ficticio: es una demo de venta, los datos son de ejemplo. */

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
  bienvenida: "¡Hola! 👋 Soy Irene, la asistente de Núcleo · Pilates y Fisioterapia.\nPuedo reservarte la valoración gratuita, decirte las tarifas o resolverte cualquier duda. ¿Qué necesitas?",
  sugerencias: ["📅 Reservar", "💰 Tarifas", "🩺 Lesiones", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "sesión",
    palabrasClave: "(reservar|agendar|pedir (una )?cita|quiero (una )?cita|coger (una )?cita|dame (una )?cita|quiero apuntarme|apuntarme|un hueco)",
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
    { claves: ["precio", "precio tiene", "cuesta", "vale", "tarifa", "mensualidad", "cuanto cobrais"], respuesta: "💰 Nuestras tarifas:\n• Pilates 2 días/semana — 89 €/mes\n• Pilates 3 días/semana — 115 €/mes\n• Sesión de fisioterapia — 45 €\n• Bono pilates + fisio — 125 €/mes\n\nLa valoración inicial es gratuita. ¿Te la reservo?" },
    { claves: ["valoracion", "primera", "gratis", "prueba", "probar", "sin compromiso"], respuesta: "🎁 La valoración postural inicial es gratuita: analizamos tu postura, hablamos de tus molestias y te decimos si te encajamos. Sin compromiso.\n\n¿Te la reservo?" },
    { claves: ["lesion", "dolor", "espalda", "lumbar", "cervical", "hernia", "me duele"], respuesta: "🩺 Trabajamos mucho con lesiones de espalda, hernias y dolor cervical. Las clases las da un fisioterapeuta y adaptamos cada ejercicio a tu caso.\n\n¿Te reservo la valoración y lo vemos?" },
    { claves: ["embarazo", "embarazada", "postparto", "suelo pelvico"], respuesta: "🤰 Sí, tenemos programas de pilates para embarazo y postparto, y fisioterapia de suelo pélvico con especialista.\n\nCuéntanoslo al reservar para asignarte a la persona adecuada." },
    { claves: ["horario", "a que hora", "abren", "cierran", "que clases hay", "domingo"], respuesta: "🕐 Nuestro horario:\n{horario}\n\nLos domingos cerramos. ¿Te viene mejor por la mañana o por la tarde?" },
    { claves: ["grupo", "cuantas personas", "gente", "masificado", "cuantos sois"], respuesta: "👥 Grupos de 5 personas como máximo. Es lo que nos permite corregir a cada uno en cada ejercicio.\n\nNada de salas llenas donde nadie te mira." },
    { claves: ["permanencia", "darme de baja", "contrato", "compromiso", "atado"], respuesta: "✅ Sin permanencia. Avisas con 15 días y te damos de baja sin coste." },
    { claves: ["ubicacion", "direccion", "donde estais", "metro", "aparcar"], respuesta: "📍 Estamos en {direccion}. Metro Diego de León a 3 minutos." },
    { claves: ["formas de pago", "como se paga", "tarjeta", "efectivo", "bizum", "domiciliado"], respuesta: "💳 La cuota mensual va domiciliada, y las sesiones sueltas de fisioterapia las puedes pagar con tarjeta, efectivo o Bizum.\n\nNo hay matrícula ni cuota de inscripción." },
    { claves: ["cancelar la sesion", "anular", "cambiar la sesion", "no puedo ir", "aplazar"], respuesta: "📅 Sin problema. Llámanos al {telefono} o escríbenos por WhatsApp y la movemos a otro día.\n\nAvisa con unas horas si puedes: los grupos son de 5 y suele haber alguien esperando ese hueco." },
    { claves: ["hablar con", "una persona", "whatsapp", "llamaros", "contacto", "fisioterapeuta"], respuesta: "📲 Claro. Llámanos al {telefono} o escríbenos por WhatsApp a ese mismo número y te atiende el equipo.\n\nY si prefieres, te reservo yo la valoración gratuita." },
    { claves: ["que llevo", "ropa", "calcetines", "esterilla", "primer dia"], respuesta: "🧦 Ropa cómoda y calcetines antideslizantes, que los puedes comprar aquí si no tienes. El material lo ponemos nosotros.\n\nNo hace falta que traigas esterilla." },
    { claves: ["nunca he hecho", "principiante", "empezar", "flexible", "mayor", "en forma"], respuesta: "💪 No hace falta estar en forma ni ser flexible: precisamente se viene a eso.\n\nEn la valoración vemos de dónde partes y se adapta a ti, no al revés. ¿Te la reservo?" }
  ],
  fallback: "🤔 No estoy segura de haberte entendido. Puedo ayudarte con tarifas, lesiones, horarios, dónde estamos y reservarte la valoración gratuita.\n\nSi lo prefieres, llámanos al {telefono}. ¿Te reservo un hueco?"
};
