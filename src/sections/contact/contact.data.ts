export const contactBenefits = [
  "Respuesta rápida y asesoría personalizada.",
  "Cotización clara y sin costos ocultos.",
  "Atención remota para toda Colombia y el mundo.",
  "Seguimiento y acompañamiento del desarrollo.",
  "Requerimientos claros y estructurales.",
  "Desarrollo sostenible.",
  "Soporte 24/7.",
];

export const serviceOptions = [
  { value: "landing", label: "Landing-Page" },
  { value: "web", label: "Sitio web" },
  { value: "app", label: "Aplicación web" },
  { value: "software", label: "Software a medida" },
  { value: "otro", label: "Otro" },
];

export const budgetOptionsByService = {
  landing: [
    { value: "min-350", label: "Mínimo 350.000" },
    { value: "350-600", label: "350.000 - 600.000" },
    { value: "600-plus", label: "Más de 600.000" },
    { value: "negociable", label: "Negociable según necesidad" },
  ],

  web: [
    { value: "min-600", label: "Mínimo 600.000" },
    { value: "600-1200", label: "600.000 - 1.200.000" },
    { value: "1200-plus", label: "Más de 1.200.000" },
  ],

  app: [
    { value: "min-1400", label: "Mínimo 1.400.000" },
    { value: "1400-1700", label: "1.400.000 - 1.700.000" },
    { value: "2000-plus", label: "Más de 2.000.000" },
  ],

  software: [
    { value: "min-1800", label: "Mínimo 1.800.000" },
    { value: "alcance", label: "Según el alcance del proyecto" },
  ],

  otro: [
    { value: "cotizacion", label: "Según el proyecto deseado (Cotización)" },
  ],
};

export const contactoOptions = [
  { value: "Llamada", label: "Llamada telefonica" },
  { value: "Whatsapp", label: "WhatsApp" },
  { value: "Gmail", label: "Correo Electrónico" },
];