/* ============================================================
   CEREBRO DEL ASISTENTE — TuAsistente24 (tuasistente24.com)
   Generado el 2026-08-07 con el Kit 02 · Cerebro de asistente.

   Cada precio, horario y teléfono de este archivo sale de una
   fuente apuntada en .cuaderno-tuasistente24.md. No hay ni un
   dato estimado.

   Para instalarlo, al final de index.html (y de book/book.html):
     <link rel="stylesheet" href="widget.css?v=7">
     <script src="config-tuasistente24.js?v=7"></script>
     <script src="widget.js?v=7"></script>
   ============================================================ */

const CHATBOT_CONFIG = {

  negocio: {
    nombre: "TuAsistente24",
    tipo: "otro",
    telefono: "+34 603 621 660",
    direccion: "toda España, en remoto (desde Madrid)",
    web: "tuasistente24.com",
    horario: "a cualquier hora, todos los días"
  },

  tema: {
    colorPrimario: "#FF6A35",
    colorSecundario: "#FFB23A",
    avatar: "🤖",
    nombreAsistente: "Vera",
    posicion: "derecha"
  },

  bienvenida: "¡Hola! 👋 Soy Vera, el asistente de TuAsistente24 — sí, uno igual que el que te puedo montar a ti.\nPregúntame cuánto cuesta, o pídeme tu demo gratis: te la montamos con el nombre de tu negocio, sin compromiso.",

  sugerencias: [
    "💰 ¿Cuánto cuesta?",
    "🎁 Mi demo gratis",
    "⚡ ¿Cuánto tarda?",
    "📅 Hablar contigo"
  ],

  reservas: {
    habilitado: true,
    unidad: "llamada",
    palabrasClave: "(agendar|reservar (una )?llamada|quiero (una )?llamada|que me llames|quiero contratar|me interesa contratar|pedir (una )?cita|quiero (una )?cita|coger (una )?cita|hablar contigo)",
    preguntaPersonas: "¿Cuántos estaréis en la llamada? Si eres solo tú, escribe 1 😊",
    opcionesPersonas: ["1 persona", "2 personas", "3 personas"],
    repitePersonas: "Dime un número, por ejemplo: 1",
    nombrePersonas: ["persona", "personas"],
    maxPersonas: 5,
    horasDisponibles: ["10:00", "12:00", "16:00", "18:00", "20:00", "22:00"],
    mensajeConfirmacion: "¡Hecho! 🎉 Te he apuntado la llamada.\n\nTe la confirmo por WhatsApp en el {telefono}. Si esa hora te viene mal, dilo por ahí sin problema: se cuadra a la que mejor te venga.",
    webhook: null,
    whatsappNegocio: "34603621660"
  },

  faqs: [

    {
      claves: ["cuanto cuesta", "precio", "cuanto vale", "tarifa", "cuanto sale", "presupuesto", "planes", "cuanto cobras", "cuanto me costaria"],
      respuesta: "💰 Hay tres planes, y todos llevan puesta en marcha (pago único) más una cuota al mes:\n\n• Básico — 149 € + 19 € / mes\n  Asistente en tu web, preguntas frecuentes 24/7, horario, carta y contacto, con tu marca.\n• Profesional — 249 € + 39 € / mes\n  Todo lo del Básico + reservas y citas automáticas, cada reserva a tu WhatsApp y atención por voz.\n• Premium — 399 € + 79 € / mes\n  Todo lo del Profesional + un asistente que contesta el teléfono con IA de voz y toma reservas por llamada.\n\nSin permanencia: la cuota la cancelas cuando quieras.\n¿Te agendo una llamada y lo vemos con tu negocio delante?"
    },

    {
      claves: ["asistente telefonico", "contesta el telefono", "atiende llamadas", "contesta llamadas", "por voz", "cuanto cuesta el asistente telefonico", "coge el telefono", "ia de voz", "bot de voz"],
      respuesta: "🎤 Sí, hay un asistente que contesta el teléfono por ti. Le hablas con normalidad —le preguntas el horario, el menú, o le pides una reserva— y responde con voz y lo agenda todo.\n\nVa dentro del plan Premium: 399 € de puesta en marcha + 79 € / mes, con número propio con IA de voz.\n\nY también se puede contratar suelto, sin el resto del plan: escríbeme al {telefono} y te paso la tarifa.\n\nPuedes probarlo tú mismo en la página \"Probar la llamada\". ¿Te agendo una llamada para verlo?"
    },

    {
      claves: ["prueba gratis", "gratis", "oferta", "descuento", "15 dias", "sin coste", "promocion", "primeros 5"],
      respuesta: "🎁 Ahora mismo hay dos cosas, y no son la misma:\n\n• 15 días de prueba gratis, sin permanencia — para cualquier negocio.\n• Los 5 primeros negocios de Madrid se llevan la puesta en marcha gratis y el primer mes sin coste.\n\nSi eres de Madrid y aún quedan huecos, te sale mucho mejor la segunda.\n¿Te agendo una llamada y lo miramos?"
    },

    {
      claves: ["que hace", "en que consiste", "que incluye", "como funciona", "que servicios", "explicame", "para que sirve", "que me aporta", "el proceso", "que pasos"],
      respuesta: "🤖 Te instalo en tu web un asistente que atiende a tus clientes al instante, resuelve dudas y coge las reservas por ti. Funciona en cuatro pasos:\n\n• El cliente escribe\n• Responde al instante\n• Toma la reserva\n• Te llega al WhatsApp\n\nY además: responde al instante día, noche y festivos, con tu imagen y tus colores, e instalación sin líos — la hago yo.\n\n¿Te monto tu demo gratis y lo ves con tu negocio?"
    },

    {
      claves: ["horario", "a que hora", "cuando atiendes", "abris", "estas disponible", "que horas", "orario", "cuando contestas"],
      respuesta: "🕐 Atiendo {horario}. Escríbeme cuando te venga bien, aunque sea tarde: contesto en cuanto lo veo.\n\nY tu asistente, una vez montado, sí responde a tus clientes 24/7 sin descanso — esa es la gracia.\n¿Te agendo una llamada?"
    },

    {
      claves: ["donde estas", "direccion", "que zona", "toda espana", "trabajas fuera", "presencial", "madrid", "atiendes en"],
      respuesta: "📍 Trabajo en {direccion}. Todo se hace en remoto: no hace falta que vengas a ningún sitio ni que yo vaya.\n\nSi eres de Madrid, además entras en la oferta de los 5 primeros negocios.\n¿Te agendo una llamada y lo vemos?"
    },

    {
      claves: ["formas de pago", "como se paga", "transferencia", "tarjeta", "efectivo", "pagar", "bizum", "a plazos", "financiar"],
      respuesta: "💳 Se puede pagar de tres maneras:\n\n• Transferencia\n• Tarjeta\n• En persona\n\nLa puesta en marcha es un pago único y la cuota va mes a mes. Si necesitas otra fórmula, dímelo por WhatsApp y lo vemos sin problema.\n¿Te agendo una llamada y lo cerramos?"
    },

    {
      claves: ["cancelar", "anular", "cambiar la llamada", "cambiar la cita", "aplazar", "posponer", "modificar la cita", "reprogramar", "no puedo el dia"],
      respuesta: "📅 Sin problema, y sin dar explicaciones. Escríbeme por WhatsApp al {telefono} o llámame y lo cambiamos a la hora que te venga mejor.\n\nCuanto antes me lo digas, mejor hueco te encuentro."
    },

    {
      claves: ["permanencia", "darme de baja", "me puedo dar de baja", "compromiso", "atado", "letra pequena", "baja de la cuota", "cancelar la cuota", "la cuota"],
      respuesta: "🔓 No hay permanencia y no hay letra pequeña. Cancelas la cuota mensual cuando quieras; la puesta en marcha es un pago único.\n\nAdemás tienes 15 días de prueba gratis para verlo funcionando antes de decidir.\n¿Te agendo una llamada?"
    },

    {
      claves: ["cuanto tarda", "cuanto tiempo tardas", "cuando estaria listo", "cuando lo tendria", "plazo", "cuanto se demora", "en cuanto tiempo", "rapido"],
      respuesta: "⚡ De la primera charla a tu asistente funcionando, en días. La instalación la hago yo entera: tú solo me cuentas cómo trabajas y qué te preguntan más.\n\n¿Te agendo una llamada y arrancamos?"
    },

    {
      claves: ["necesito web", "no tengo web", "tengo que tener web", "hace falta pagina", "tener pagina web", "sin web", "solo tengo instagram", "solo redes"],
      respuesta: "🌐 Idealmente sí. Si no tienes, te hago una página sencilla con el asistente incluido.\n\nAsí que no tener web no te deja fuera.\n¿Te agendo una llamada y vemos qué te hace falta?"
    },

    {
      claves: ["cambiar las respuestas", "anadir respuestas", "anadir preguntas", "modificar el asistente", "actualizar", "editar", "ajustes", "cambiar precios"],
      respuesta: "✏️ Sí. Los ajustes están incluidos en tu cuota mensual: me escribes y lo actualizo.\n\nCambias precios, horarios o añades preguntas nuevas las veces que haga falta, sin coste aparte.\n¿Te agendo una llamada?"
    },

    {
      claves: ["mi negocio", "sirve para", "sectores", "restaurante", "barberia", "peluqueria", "clinica", "gimnasio", "tienda", "veterinaria", "autoescuela", "spa y estetica"],
      respuesta: "🏪 Casi seguro que sí: si recibes preguntas repetidas o agendas citas, el asistente se adapta.\n\nDonde más se usa ahora mismo:\n• Restaurantes y cafés\n• Barberías y peluquerías\n• Clínicas y consultorios\n• Spas y estética\n• Tiendas y comercios\n• Gimnasios y academias\n\nY hay demos funcionando también de veterinaria, pilates y autoescuela.\n¿Te agendo una llamada y lo miramos con el tuyo?"
    },

    {
      claves: ["no sabe", "se equivo", "no entiende", "falla", "responde mal", "se invent", "miedo", "respuestas raras"],
      respuesta: "🛟 Cuando no sabe algo, invita al cliente a contactarte por teléfono o WhatsApp, para no perder nunca la venta. Nunca se queda callado ni se inventa una respuesta.\n\nY si ves que le falta una pregunta, me la dices y la añado: va incluido en la cuota."
    },

    {
      claves: ["ver la demo", "demo", "demo gratis", "la demo es gratis", "demo con mi negocio", "me haces una demo", "ver ejemplos", "ejemplo funcionando", "probarlo", "ensename", "verlo en accion", "como queda"],
      respuesta: "👀 Claro, y hay dos formas:\n\n• Las que ya están montadas — 8 sectores funcionando de verdad: restaurante, barbería, clínica dental, belleza y estética, gimnasio, veterinaria, pilates y fisioterapia y autoescuela.\n• La tuya, gratis — te la monto con el nombre y los datos de tu negocio y te la enseño sin compromiso.\n\n¿Te preparo la tuya? Dime cómo se llama tu negocio y te la monto."
    },

    {
      claves: ["hablar con", "contacto", "whatsapp", "wasap", "llamarte", "tu numero", "correo", "email", "gmail", "brayan", "quien eres", "con quien hablo"],
      respuesta: "📲 Claro, hablas directamente con Brayan:\n\n• WhatsApp: {telefono}\n• Teléfono: {telefono}\n• Email: brayancuadross2026@gmail.com\n\nEscríbeme a cualquier hora y te contesto en cuanto lo vea."
    }

  ],

  fallback: "🤔 Esa no la sé contestar todavía. Puedo ayudarte con los precios y los planes, qué incluye cada uno, cuánto tarda en estar listo, las demos y las ofertas.\n\nSi prefieres hablarlo con una persona, escríbeme por WhatsApp al {telefono}.\n¿Te agendo una llamada?",

  voz: {
    habilitada: true,
    idioma: "es-ES"
  }

};
