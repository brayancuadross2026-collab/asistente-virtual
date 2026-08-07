/* ============================================================
   CONFIGURACIÓN — DEMO CLÍNICA DENTAL
   Mismo motor (widget.js), otra configuración.
   Esto demuestra que el asistente sirve para cualquier sector.

   Revisado el 2026-08-07 con el Kit 02:
   - Añadido reservas.palabrasClave. Antes "quiero cancelar la cita" abría
     el flujo de PEDIR cita: el paciente que anulaba acababa cogiendo hora.
   - QUITADA la colisión de "dolor", que estaba en la FAQ de urgencias y en
     la de miedo al dentista. Empataban a un punto y ganaba siempre la
     primera, así que la de miedo no se disparaba nunca.
   - Añadida la FAQ de cancelar o cambiar cita, que faltaba (12 -> 13).
   Negocio ficticio: es una demo de venta, los datos son de ejemplo.
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

  bienvenida: "¡Hola! 👋 Soy Marta, la asistente de Clínica Dental Sonrisa Norte.\nPuedo darte cita, decirte precios y tratamientos, o resolverte cualquier duda. ¿Qué necesitas?",

  sugerencias: ["📅 Pedir cita", "💰 Precios", "🦷 Tratamientos", "🕐 Horario"],

  reservas: {
    habilitado: true,
    unidad: "cita",
    palabrasClave: "(reservar|agendar|pedir (una )?cita|coger (una )?cita|quiero (una )?cita|dame (una )?cita|un hueco)",
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
      claves: ["horario", "a que hora", "abren", "cierran", "abierto", "cerrado", "sabado"],
      respuesta: "🕐 Nuestro horario es:\n{horario}\n\nLos domingos cerramos. ¿Quieres que te dé cita?"
    },
    {
      claves: ["ubicacion", "direccion", "donde estais", "llegar", "queda", "mapa", "metro"],
      respuesta: "📍 Estamos en {direccion}.\nMetro Núñez de Balboa (L5, L9) a 2 minutos. Hay parking en la misma calle."
    },
    {
      claves: ["precio", "precio tiene", "cuesta", "vale", "costo", "tarifa", "presupuesto"],
      respuesta: "💰 Nuestros precios orientativos:\n• Primera visita y diagnóstico — GRATIS\n• Limpieza bucal — 55 €\n• Empaste — desde 60 €\n• Implante (corona incluida) — desde 950 €\n• Ortodoncia invisible — desde 2.900 €\n• Blanqueamiento — 290 €\n\nLa primera visita es gratuita y te damos presupuesto cerrado sin compromiso. ¿Te doy cita?"
    },
    {
      claves: ["tratamiento", "servicios", "hacen", "ortodoncia", "invisalign", "brackets", "carillas", "blanqueamiento", "endodoncia"],
      respuesta: "🦷 Estos son nuestros tratamientos:\n• Odontología general y limpiezas\n• Implantes dentales\n• Ortodoncia invisible y brackets\n• Estética dental: carillas y blanqueamiento\n• Endodoncia y periodoncia\n• Odontopediatría (niños)\n\n¿Sobre cuál quieres información?"
    },
    {
      claves: ["implante", "cuanto cuesta un implante", "me falta un diente", "protesis"],
      respuesta: "🦷 Sí, ponemos implantes. Desde 950 € con la corona incluida, y la primera visita con el estudio es gratuita.\n\nEn esa visita te decimos si eres candidato y el precio cerrado, sin compromiso. ¿Te doy cita?"
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
      claves: ["financiar", "financiacion", "plazos", "formas de pago", "tarjeta", "credito"],
      respuesta: "💳 Sí, financiamos los tratamientos hasta en 24 meses sin intereses, y aceptamos efectivo y tarjeta.\n\nTe lo explicamos todo en la primera visita, que es gratuita."
    },
    {
      claves: ["urgencia", "urgente", "dolor", "duele", "roto", "flemon", "hoy mismo", "se me ha caido"],
      respuesta: "🚨 Si tienes dolor o una urgencia, llámanos ahora mismo al {telefono} y te atendemos hoy. Guardamos huecos cada día para urgencias."
    },
    {
      claves: ["nino", "niños", "infantil", "hijo", "hija", "pediatrico"],
      respuesta: "👶 Sí, tenemos odontopediatría. La revisión infantil es gratuita hasta los 14 años y nuestro equipo está especializado en que los peques no pasen miedo."
    },
    {
      claves: ["miedo", "panico", "anestesia", "sedacion", "me da cosa"],
      respuesta: "😌 Te entendemos, y nos lo dicen muchísimo. Trabajamos con sedación consciente y anestesia sin dolor.\n\nCuéntanoslo en la primera visita, que es gratuita, y adaptamos todo a tu ritmo."
    },
    {
      claves: ["cancelar", "anular", "cambiar la cita", "aplazar", "no puedo ir", "cambiar la hora"],
      respuesta: "📅 Sin problema. Llámanos al {telefono} o escríbenos por WhatsApp y la movemos al día que te venga bien.\n\nAvísanos con 24 horas si puedes: así se lo damos a otro paciente que esté esperando."
    },
    {
      claves: ["humano", "una persona", "hablar con alguien", "whatsapp", "llamaros"],
      respuesta: "👤 Claro, llámanos al {telefono} y te atiende nuestro equipo, o pásate por {direccion}.\n\nY si prefieres, te doy yo la cita ahora mismo."
    }
  ],

  fallback: "🤔 No estoy segura de haberte entendido. Puedo ayudarte con precios, tratamientos, seguros, financiación y darte cita.\n\nSi lo prefieres, llámanos al {telefono}. ¿Te reservo un hueco?"
};
