/* CONFIGURACIÓN — DEMO Espacio Bruma · Belleza
   Mismo motor (widget.js), otra configuración.

   Revisado el 2026-08-07 con el Kit 02:
   - Añadido reservas.palabrasClave (antes "cancelar la cita" abría el flujo
     de PEDIR cita).
   - De 7 a 13 FAQs. Cubiertas las 2 obligatorias que faltaban:
     cancelar/cambiar y hablar con una persona.
   Negocio ficticio: es una demo de venta, los datos son de ejemplo. */

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
  bienvenida: "¡Hola! 👋 Soy Vera, la asistente de Espacio Bruma · Belleza.\nPuedo darte cita, decirte precios y tratamientos, o resolverte cualquier duda. ¿Qué necesitas?",
  sugerencias: ["📅 Reservar", "💰 Precios", "📋 Tratamientos", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "cita",
    palabrasClave: "(reservar|agendar|pedir (una )?cita|coger (una )?cita|quiero (una )?cita|dame (una )?cita|un hueco)",
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
    { claves: ["precio", "precio tiene", "cuesta", "vale", "tarifa", "cuanto cobrais"], respuesta: "💰 Nuestros precios más pedidos:\n• Manicura semipermanente — 28 €\n• Pedicura completa — 35 €\n• Tratamiento facial — 55 €\n• Extensiones de pestañas — 65 €\n• Depilación láser — desde 35 €\n\nLa primera valoración es gratuita. ¿Te reservo cita?" },
    { claves: ["servicio", "tratamiento", "hacen", "uñas", "manicura", "pestañas", "facial", "laser", "depilacion"], respuesta: "💅 Esto es lo que hacemos:\n• Manicura y pedicura\n• Extensiones y lifting de pestañas\n• Tratamientos faciales\n• Depilación láser y con cera\n• Tratamientos corporales\n\n¿Sobre cuál te informo?" },
    { claves: ["duracion", "cuanto dura", "cuanto dura un", "cuanto dura el", "se tarda en", "cuanto tiempo", "tarda"], respuesta: "⏱️ Depende del tratamiento: la manicura son unos 45 minutos, un facial ronda la hora y las pestañas hora y media.\n\nTe lo confirmo al reservar. ¿Te busco hueco?" },
    { claves: ["embarazada", "embarazo", "alergia", "piel sensible", "puedo hacerme"], respuesta: "🤍 Sin problema, adaptamos los tratamientos. Cuéntanoslo al reservar y la esteticista lo tendrá en cuenta en la valoración." },
    { claves: ["pago", "formas de pago", "tarjeta", "efectivo", "bizum", "se puede pagar"], respuesta: "💳 Aceptamos efectivo, tarjeta y Bizum.\n\nY tenemos bonos de sesiones con descuento, que salen mejor de precio si vas a venir varias veces." },
    { claves: ["horario", "a que hora", "abren", "cierran", "sabados", "domingo"], respuesta: "🕐 Nuestro horario:\n{horario}\n\nLos domingos cerramos. ¿Te busco hueco entre semana o el sábado?" },
    { claves: ["ubicacion", "direccion", "donde estais", "llegar", "metro", "aparcar"], respuesta: "📍 Estamos en {direccion}. Metro Núñez de Balboa a 4 minutos, y hay zona SER en la misma calle." },
    { claves: ["cancelar", "anular", "cambiar la cita", "aplazar", "no puedo ir", "cambiar la hora"], respuesta: "📅 Sin problema. Llámanos al {telefono} o escríbenos por WhatsApp y lo movemos a la hora que te venga bien.\n\nAvísanos con 24 horas si puedes: así se lo damos a otra clienta." },
    { claves: ["hablar con", "una persona", "whatsapp", "llamaros", "contacto"], respuesta: "📲 Claro. Llámanos al {telefono} o escríbenos por WhatsApp a ese mismo número y te atiende el equipo.\n\nY si prefieres, te reservo yo la cita ahora mismo." },
    { claves: ["primera vez", "valoracion", "gratis", "gratuita", "sin compromiso"], respuesta: "🎁 La primera valoración es gratuita y sin compromiso: vienes, te vemos la piel o las uñas y te decimos qué te conviene y qué cuesta.\n\n¿Te la reservo?" },
    { claves: ["bono", "bonos", "sesiones", "descuento", "pack"], respuesta: "🎫 Tenemos bonos de varias sesiones con descuento sobre el precio suelto. Son especialmente para láser y tratamientos faciales, que se hacen por tandas.\n\nTe los detallamos en la valoración gratuita." },
    { claves: ["novia", "boda", "evento", "maquillaje", "ocasion especial"], respuesta: "👰 Sí, preparamos novias y eventos: prueba previa, maquillaje y peinado el día señalado.\n\nReserva con tiempo, que son fechas que se llenan. ¿Te doy cita para la prueba?" },
    { claves: ["productos", "marcas", "que usais", "cosmetica"], respuesta: "🧴 Trabajamos con cosmética profesional y te decimos siempre qué te ponemos y por qué.\n\nSi tienes alguna marca o principio activo que no toleras, dínoslo al reservar." }
  ],
  fallback: "🤔 No estoy segura de haberte entendido. Puedo ayudarte con precios, tratamientos, horarios, dónde estamos y reservarte cita.\n\nSi lo prefieres, llámanos al {telefono}. ¿Te reservo un hueco?"
};
