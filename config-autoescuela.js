/* CONFIGURACIÓN — DEMO Autoescuela Vía Directa
   Mismo motor (widget.js), otra configuración.

   Revisado el 2026-08-07 con el Kit 02:
   - Añadido reservas.palabrasClave (antes "cancelar la cita" abría el flujo
     de PEDIR cita).
   - QUITADA la palabra clave "b": una sola letra casa dentro de "cambiar",
     "sabado" o "trabajo", asi que esa FAQ saltaba con media conversacion.
   - De 8 a 13 FAQs. Cubiertas las 2 obligatorias que faltaban.
   - Ruben hablaba de si mismo en femenino. Corregido.
   Negocio ficticio: es una demo de venta, los datos son de ejemplo. */

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
  bienvenida: "¡Hola! 👋 Soy Rubén, el asistente de Autoescuela Vía Directa.\nPuedo darte cita, decirte precios y cómo va el carné, o resolverte cualquier duda. ¿Qué necesitas?",
  sugerencias: ["📅 Reservar", "💰 Precios", "📋 Servicios", "🕐 Horario"],
  reservas: {
    habilitado: true,
    unidad: "cita",
    palabrasClave: "(reservar|agendar|pedir (una )?cita|coger (una )?cita|quiero (una )?cita|dame (una )?cita|matricularme|quiero apuntarme)",
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
    { claves: ["precio", "precio tiene", "cuesta", "vale", "tarifa", "matricula", "cuanto cobrais"], respuesta: "💰 Nuestros precios:\n• Matrícula permiso B — 190 € (incluye test ilimitados y teóricas)\n• Clase práctica — 32 €\n• Pack 10 clases — 290 €\n• Permiso A (moto) — desde 490 €\n• Curso intensivo — desde 750 €\n\nSin sorpresas: precio cerrado. ¿Te doy cita para informarte?" },
    { claves: ["carne", "permiso", "que tipos", "moto", "camion", "a2", "remolque"], respuesta: "🚗 Preparamos permiso B (coche), A1, A2 y A (moto). También cursos intensivos y clases de recuperación para quien ya tiene el carné.\n\n¿Cuál te interesa?" },
    { claves: ["intensivo", "rapido", "cuanto tarda", "en cuanto tiempo", "cuanto se tarda"], respuesta: "⚡ Con el curso intensivo se saca en unas 4 semanas si vienes a diario. El ritmo normal suele ser de 2 a 3 meses.\n\n¿Te doy cita y lo vemos con tu disponibilidad?" },
    { claves: ["test", "teorico", "examen", "teoria", "aula"], respuesta: "📚 Los test online son ilimitados y están incluidos en la matrícula. Además damos clase teórica presencial todos los días." },
    { claves: ["practica", "clases de coche", "profesor", "cuantas clases"], respuesta: "🚦 Las clases prácticas son de 45 minutos con profesor titulado, siempre el mismo para que haya continuidad. La clase suelta son 32 €.\n\nDe media hacen falta entre 20 y 30, pero depende de cada uno." },
    { claves: ["financiar", "formas de pago", "pagar", "plazos", "financiacion", "tarjeta", "bizum"], respuesta: "💳 Se puede pagar a plazos sin intereses, y aceptamos efectivo, tarjeta y Bizum.\n\nTe lo explicamos todo cuando vengas, sin compromiso." },
    { claves: ["horario", "a que hora", "abren", "cierran", "sabados"], respuesta: "🕐 Nuestro horario:\n{horario}\n\nLos domingos cerramos. ¿Te busco hueco entre semana?" },
    { claves: ["ubicacion", "direccion", "donde estais", "metro", "aparcar"], respuesta: "📍 Estamos en {direccion}. Metro Alvarado a 3 minutos." },
    { claves: ["cancelar", "anular", "cambiar la cita", "cambiar la clase", "aplazar", "no puedo ir"], respuesta: "📅 Sin problema. Llámanos al {telefono} o escríbenos por WhatsApp y lo movemos.\n\nAvisa con 24 horas si puedes: así no se te cobra la clase y se la damos a otro alumno." },
    { claves: ["hablar con", "una persona", "whatsapp", "llamaros", "contacto"], respuesta: "📲 Claro. Llámanos al {telefono} o escríbenos por WhatsApp a ese mismo número y te atiende alguien del equipo.\n\nY si prefieres, te doy yo la cita ahora mismo." },
    { claves: ["edad", "requisitos", "que hace falta", "papeles", "documentacion", "dni"], respuesta: "📋 Para el permiso B necesitas tener 18 años (puedes empezar a los 17 y examinarte al cumplirlos), el DNI y el psicotécnico.\n\nDel resto del papeleo nos encargamos nosotros." },
    { claves: ["psicotecnico", "reconocimiento", "medico"], respuesta: "🩺 El psicotécnico se hace en un centro médico y son unos 40 €, aparte de la matrícula. Te decimos a cuál ir, está a dos calles." },
    { claves: ["suspendido", "he suspendido", "recuperacion", "otra vez", "repetir"], respuesta: "💪 Tranquilo, pasa mucho más de lo que parece. Hacemos clases de recuperación y te preparamos el siguiente examen sin volver a pagar matrícula.\n\n¿Te doy cita y lo vemos?" }
  ],
  fallback: "🤔 No estoy seguro de haberte entendido. Puedo ayudarte con precios, tipos de carné, horarios, dónde estamos y darte cita.\n\nSi lo prefieres, llámanos al {telefono}. ¿Te doy cita?"
};
