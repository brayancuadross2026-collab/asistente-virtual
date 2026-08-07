/* ============================================================
   CONFIGURACIÓN — EL ASISTENTE DE TUASISTENTE24
   Este es el asistente que atiende a los dueños de negocio que
   entran en tuasistente24.com/demo.html.
   Vende el producto, resuelve objeciones y reserva la demo
   gratuita. Las reservas llegan al WhatsApp de Brayan.

   Revisado el 2026-08-07 con el Kit 02:
   - PRECIOS ALINEADOS con el book. Antes decía un precio único de
     249 € + 39 €/mes; el book vende tres planes. Un cliente que
     hablase con Nora y luego leyese el book veía dos precios.
   - palabrasClave arreglado. Antes empezaba por "reserv", así que
     "¿cómo me llegan las reservas?" abría el flujo de reservar y esa
     FAQ no se disparaba nunca. Igual con "cita".
   - QUITADA la palabra clave "ia": dos letras que casan dentro de
     "día", "gracias", "sería" o "veterinaria".
   - QUITADA "hablar" de la FAQ de voz: empataba con "hablar con
     alguien" y se comía la FAQ de contacto humano.
   - Añadidas las 2 obligatorias que faltaban: qué incluye y cómo se
     paga (14 -> 16 FAQs, el máximo del estándar).
   ============================================================ */

const CHATBOT_CONFIG = {

  negocio: {
    nombre: "tuasistente24",
    tipo: "servicio",
    telefono: "+34 603 621 660",
    direccion: "Madrid (trabajamos en toda España, todo se monta en remoto)",
    web: "tuasistente24.com",
    horario: "Lunes a Sábado: 09:00 – 21:00 | El asistente, siempre"
  },

  tema: {
    colorPrimario: "#FF6A35",
    colorSecundario: "#FFB23A",
    avatar: "🤖",
    nombreAsistente: "Nora",
    posicion: "derecha"
  },

  bienvenida: "¡Hola! 👋 Soy Nora, y soy exactamente el tipo de asistente que te montaría en tu web.\n\nPruébame: pregúntame el precio, cuánto tarda o si sirve para tu sector. Y si te convence, te reservo una demo gratuita con el nombre de tu negocio.",

  sugerencias: ["💰 ¿Cuánto cuesta?", "🎁 Quiero mi demo gratis", "🏪 ¿Sirve para mi sector?", "⏱️ ¿Cuánto se tarda?"],

  reservas: {
    habilitado: true,
    unidad: "demo gratuita",
    maxPersonas: 3,
    nombrePersonas: ["persona", "personas"],
    preguntaPersonas: "¿Estarás tú solo o se conecta alguien más del negocio?",
    opcionesPersonas: ["Solo yo", "2 personas", "3 personas"],
    repitePersonas: "¿Cuántos vais a estar en la demo? Escríbeme un número, por ejemplo: 1",
    // Aquí nadie reserva "mesa": reserva su demo. El patrón exige el verbo
    // de pedir, para que "¿cómo llegan las reservas?" siga siendo una FAQ.
    palabrasClave: "(agendar|quiero (mi |la |una )?demo|dame (la |una )?demo|pedir (la |una )?demo|reservar (la |una )?demo|quiero contratar|me interesa contratar|que me llame|quiero que me llames)",
    horasDisponibles: ["10:00", "11:00", "12:00", "13:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
    webhook: null,
    whatsappNegocio: "34603621660",
    mensajeConfirmacion: "✅ ¡Demo reservada! Brayan te escribirá para confirmarte el hueco.\n\nVendrá con tu asistente ya montado: tu nombre, tus servicios y tus horarios, para que lo veas con tu caso real. Si prefieres adelantar algo, escríbele al {telefono}."
  },

  voz: { habilitada: true, idioma: "es-ES" },

  faqs: [
    {
      claves: ["precio", "precio tiene", "cuesta", "vale", "costo", "tarifa", "presupuesto", "coste", "mensualidad", "cuota"],
      respuesta: "💰 Tres planes, sin letra pequeña. Todos llevan un pago único de puesta en marcha más una cuota al mes:\n\n• Básico — 149 € + 19 €/mes\n• Profesional — 249 € + 39 €/mes (el más pedido)\n• Premium — 399 € + 79 €/mes\n\nSin permanencia: la cuota la cancelas cuando quieras.\n\n¿Te reservo la demo gratuita y lo vemos con tus números?"
    },
    {
      claves: ["gratis", "prueba", "gratuita", "sin compromiso", "demo", "demostracion", "probar"],
      respuesta: "🎁 Sí: te monto el asistente con el nombre de tu negocio, tus servicios y tus horarios, y te lo enseño funcionando. Gratis y sin compromiso.\n\nY tienes 15 días de prueba, sin permanencia.\n\n¿Te reservo un hueco para la demo?"
    },
    {
      claves: ["sector", "sirve", "mi negocio", "vale para", "funciona para", "tipo de negocio", "restaurante", "clinica", "taller", "peluqueria", "gimnasio", "inmobiliaria", "academia", "reformas", "veterinaria", "dental"],
      respuesta: "🏪 Sirve para cualquier negocio que dé cita, reserva o presupuesto. Ya está funcionando en:\n\n• Restaurantes y bares\n• Clínicas dentales y centros médicos\n• Barberías, peluquerías y estética\n• Veterinarias\n• Gimnasios, pilates y fisioterapia\n• Autoescuelas y academias\n• Talleres, inmobiliarias y reformas\n\nEl motor es el mismo; lo que cambia es tu configuración: tus servicios, tus precios y tu forma de hablar.\n\n¿De qué es tu negocio? Te digo cómo lo montaría."
    },
    {
      claves: ["tarda", "cuanto tiempo", "listo", "plazo", "montar", "rapido", "cuando lo tendria"],
      respuesta: "⏱️ En 48 horas lo tienes funcionando.\n\nMe pasas tus horarios, servicios y precios, yo lo configuro y te doy una línea de código para tu web. Si tu web la lleva otra persona, se la mando yo directamente. Tú no tocas nada."
    },
    {
      claves: ["web", "pagina", "no tengo web", "wordpress", "wix", "shopify", "instalar", "codigo", "compatible"],
      respuesta: "🔌 Funciona en cualquier web: WordPress, Wix, Squarespace, Shopify o una hecha a medida. Es pegar una línea de código.\n\n¿No tienes web? También te la puedo montar, dímelo y lo hablamos."
    },
    {
      claves: ["como llega", "las reservas", "donde llegan", "aviso", "notificacion", "whatsapp", "agenda", "gestiono"],
      respuesta: "📲 Cuando alguien reserva, te llega al WhatsApp del negocio un mensaje con todo ordenado: nombre, teléfono, día, hora y lo que necesita.\n\nTú solo lo apuntas en tu agenda. Sin paneles raros, sin aprender ningún programa nuevo."
    },
    {
      claves: ["permanencia", "contrato", "atado", "cancelar", "darme de baja", "compromiso"],
      respuesta: "🛡️ Cero permanencia. Pagas mes a mes y te das de baja cuando quieras con un mensaje.\n\nY antes tienes 15 días de prueba para verlo funcionando con tus clientes reales."
    },
    {
      claves: ["quien eres", "brayan", "empresa", "quien esta detras", "confianza", "sois", "autonomo"],
      respuesta: "👋 Detrás está Brayan Cuadros, de Madrid. No es un call center: hablas siempre con la misma persona, la que te lo monta y la que te lo mantiene.\n\nTeléfono directo: {telefono}. Escríbele cuando quieras."
    },
    {
      claves: ["inteligencia artificial", "chatgpt", "se inventa", "responde mal", "equivoca", "robot", "es un bot"],
      respuesta: "🧠 Responde solo con la información que tú le das: tus precios, tus servicios, tus horarios. No se inventa nada.\n\nY cuando algo se le escapa, no marea al cliente: le pasa tu teléfono para que hable contigo."
    },
    {
      claves: ["idioma", "ingles", "extranjero", "turista", "varios idiomas"],
      respuesta: "🌍 Puede atender en varios idiomas. Si recibes turistas o clientes extranjeros, se configura y responde en el idioma en el que le escriban."
    },
    {
      claves: ["voz", "por voz", "microfono", "telefono contesta", "asistente telefonico", "coge el telefono"],
      respuesta: "🎙️ Sí, tiene modo voz: el cliente pulsa el micrófono y habla en vez de escribir. Pruébalo tú mismo aquí, con el botón del micro.\n\nY en el plan Premium está el asistente que contesta el teléfono, con número propio e IA de voz."
    },
    {
      claves: ["diferencia", "competencia", "otros", "por que tu", "mejor"],
      respuesta: "⚖️ Tres cosas:\n\n1. Precio de negocio de barrio, no de agencia: desde 149 € y 19 €/mes, no 300 € al mes.\n2. Se monta con tus datos reales, no con una plantilla genérica.\n3. Hablas siempre con la misma persona.\n\nY antes de pagar nada lo ves funcionando con el nombre de tu negocio. ¿Te reservo la demo?"
    },
    {
      claves: ["horario", "abierto", "cerrado", "cuando os", "a que hora"],
      respuesta: "🕐 Brayan atiende de lunes a sábado, 09:00 a 21:00. Yo estoy aquí a cualquier hora, que para eso me pagan 😉\n\n¿Te reservo la demo gratuita?"
    },
    {
      claves: ["humano", "una persona", "hablar con alguien", "llamar", "contactar", "telefono", "correo"],
      respuesta: "👤 Claro. Escribe o llama a Brayan al {telefono}, te contesta él en persona.\n\nSi prefieres que te escriba él, dime tu nombre y te reservo un hueco ahora mismo."
    },
    {
      claves: ["que incluye", "que servicios", "que hace exactamente", "en que consiste", "que me llevo"],
      respuesta: "📦 Esto es lo que incluye:\n\n• El asistente instalado en tu web, con tu marca y tus colores\n• Tus preguntas frecuentes contestadas 24/7\n• Reservas y citas automáticas, que te llegan al WhatsApp\n• Atención por voz\n• Los cambios y ajustes, dentro de la cuota mensual\n\nLo monto yo entero: tú solo me cuentas cómo trabajas.\n\n¿Te reservo la demo?"
    },
    {
      claves: ["formas de pago", "como se paga", "transferencia", "tarjeta", "efectivo", "bizum", "a plazos"],
      respuesta: "💳 Se puede pagar por transferencia, con tarjeta o en persona.\n\nLa puesta en marcha es un pago único y la cuota va mes a mes. Si necesitas otra fórmula, díselo a Brayan al {telefono} y lo vemos."
    }
  ],

  fallback: "Buena pregunta, deja que te la responda bien 🤔.\n\nPuedo ayudarte con: precio, qué incluye, cuánto se tarda, si sirve para tu sector y cómo te llegan las reservas. También te reservo la demo gratuita.\n\nY si prefieres preguntárselo directamente a Brayan: {telefono}."
};
