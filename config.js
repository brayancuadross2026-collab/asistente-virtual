/* ============================================================
   CONFIGURACIÓN DEL CHATBOT — ESTE ES EL ÚNICO ARCHIVO QUE
   EDITAS PARA CADA CLIENTE NUEVO.
   Cambia textos, colores, horarios, menú y FAQs y el bot
   queda personalizado para ese negocio.
   ============================================================ */

const CHATBOT_CONFIG = {

  negocio: {
    nombre: "La Brasa Dorada",
    tipo: "restaurante", // restaurante | barberia | clinica | tienda | otro
    telefono: "+34 603 621 660",
    direccion: "Calle de Fuencarral 78, Malasaña, Madrid",
    web: "www.labrasadorada.es",
    horario: "Lunes a Jueves: 13:00 – 23:30 | Viernes y Sábado: 13:00 – 01:00 | Domingo: 13:00 – 17:00"
  },

  // Apariencia del widget (colores de la marca del cliente)
  tema: {
    colorPrimario: "#C0392B",
    colorSecundario: "#E67E22",
    avatar: "🍖",
    nombreAsistente: "Doradita",
    posicion: "derecha" // derecha | izquierda
  },

  bienvenida: "¡Hola! 👋 Soy Doradita, la asistente virtual de La Brasa Dorada. Puedo ayudarte a reservar una mesa, contarte nuestro horario, la carta y responder tus preguntas. ¿Qué necesitas?",

  // Chips de sugerencia que se muestran al abrir el chat
  sugerencias: ["📅 Reservar mesa", "🕐 Horario", "🍽️ Ver carta", "📍 Ubicación"],

  // ---------- RESERVAS ----------
  reservas: {
    habilitado: true,
    // Qué se reserva: "mesa" (restaurante), "cita" (barbería/clínica), "turno"...
    unidad: "mesa",
    maxPersonas: 12,
    horasDisponibles: ["13:00", "14:00", "15:00", "20:00", "21:00", "22:00", "23:00"],
    // URL opcional: si el cliente quiere recibir cada reserva en su sistema
    // (Google Sheets, Zapier, Make, n8n...). null = solo local + WhatsApp.
    webhook: null,
    // Número de WhatsApp del NEGOCIO (con código de país, sin + ni espacios).
    // Al confirmar una reserva, el bot ofrece un botón para enviarle el
    // comprobante por WhatsApp al dueño. null = desactivado.
    whatsappNegocio: "34603621660",
    mensajeConfirmacion: "✅ ¡Reserva confirmada! Te esperamos. Si necesitas cancelar o cambiar, escríbenos al {telefono}."
  },

  // ---------- ASISTENTE DE VOZ ----------
  voz: {
    habilitada: true,
    idioma: "es-ES"
  },

  // ---------- PREGUNTAS FRECUENTES ----------
  // claves: palabras que activan la respuesta (sin tildes, minúsculas)
  faqs: [
    {
      claves: ["horario", "hora", "abren", "cierran", "abierto", "cerrado"],
      respuesta: "🕐 Nuestro horario es:\n{horario}"
    },
    {
      claves: ["ubicacion", "direccion", "donde", "llegar", "queda", "mapa", "metro"],
      respuesta: "📍 Estamos en {direccion}.\nMetro Tribunal (L1, L10) a 3 min andando. ¡Te esperamos!"
    },
    {
      claves: ["menu", "carta", "platos", "comida", "comer", "recomiendas", "especialidad"],
      respuesta: "🍽️ Nuestras especialidades:\n• Chuletón de vaca madurada (300g) — 24,00 €\n• Entrecot a la brasa — 18,50 €\n• Parrillada para compartir (2 pers.) — 39,00 €\n• Salmón a la brasa — 19,50 €\n• Menú del día — 13,50 €\n• Menú infantil — 8,50 €\n\n¿Te reservo una mesa para probarlos?"
    },
    {
      claves: ["precio", "cuesta", "vale", "costo", "barato", "caro", "euros"],
      respuesta: "💰 La carta va desde 8,50 € (menú infantil) hasta 39,00 € (parrillada para 2). El menú del día está a 13,50 € e incluye primero, segundo, postre y bebida. ¡Relación calidad-precio inmejorable! 😉"
    },
    {
      claves: ["domicilio", "delivery", "llevar", "envio", "glovo", "pedido", "uber"],
      respuesta: "🛵 ¡Sí tenemos entrega a domicilio! Pide por Glovo o Uber Eats, o llámanos al {telefono}. Tiempo estimado: 35 minutos."
    },
    {
      claves: ["pago", "tarjeta", "efectivo", "bizum", "transferencia"],
      respuesta: "💳 Aceptamos efectivo, tarjeta (Visa/Mastercard) y Bizum."
    },
    {
      claves: ["parking", "parquin", "aparcar", "estacionamiento", "coche", "aparcamiento"],
      respuesta: "🚗 Hay un parking público (Tribunal) a 2 minutos. En zona SER azul/verde también puedes aparcar en la calle."
    },
    {
      claves: ["vegetariano", "vegano", "alergia", "gluten", "celiaco", "sin gluten"],
      respuesta: "🥗 Tenemos opciones vegetarianas y platos sin gluten. Avísanos al reservar cualquier alergia y el chef lo tendrá en cuenta."
    },
    {
      claves: ["wifi", "internet", "clave"],
      respuesta: "📶 Sí, tenemos WiFi gratis para clientes. Pide la contraseña a tu camarero."
    },
    {
      claves: ["evento", "cumpleanos", "grupo", "empresa", "celebracion", "comunion", "reserva grande"],
      respuesta: "🎉 ¡Organizamos eventos y celebraciones! Para grupos de más de 12 personas llámanos al {telefono} y preparamos un menú cerrado especial."
    },
    {
      claves: ["terraza", "fuera", "exterior"],
      respuesta: "☀️ Sí, tenemos terraza climatizada. Puedes indicarlo al reservar y te la guardamos si hay disponibilidad."
    },
    {
      claves: ["mascota", "perro", "gato", "pet"],
      respuesta: "🐶 ¡Somos pet friendly! Tu mascota es bienvenida en nuestra terraza."
    },
    {
      claves: ["humano", "persona", "asesor", "hablar con alguien", "atencion", "camarero"],
      respuesta: "👤 ¡Claro! Puedes hablar con nuestro equipo llamando al {telefono} o visitándonos en {direccion}."
    }
  ],

  // Respuesta cuando el bot no entiende
  fallback: "Mmm, no estoy segura de haberte entendido 🤔. Puedo ayudarte con: reservas, horario, carta, ubicación, domicilios y más. ¿O prefieres llamar al {telefono}?"
};
