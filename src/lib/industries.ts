export interface IndustryData {
  slug: string;
  label: string;
  emoji: string;
  headline: string;
  subheadline: string;
  useCases: { title: string; body: string }[];
  stats: { value: string; label: string }[];
  ctaLabel: string;
}

export const industries: Record<string, IndustryData> = {
  "salones-y-peluquerias": {
    slug: "salones-y-peluquerias",
    emoji: "💇",
    label: "Salones y Peluquerías",
    headline: "Tu salón siempre lleno. Sin llamadas perdidas.",
    subheadline:
      "El bot agenda cortes, coloraciones, tratamientos y manicure directo desde WhatsApp — 24/7, sin que tengas que levantar el teléfono.",
    useCases: [
      {
        title: "Fotos de referencia",
        body: "El cliente manda foto del color o corte que quiere y el bot lo asocia automáticamente al servicio correcto.",
      },
      {
        title: "Agenda por estilista",
        body: "Cada profesional tiene su propia disponibilidad. El bot muestra solo los horarios libres del estilista elegido.",
      },
      {
        title: "Clientes recurrentes reconocidos",
        body: "Si ya tiene historial, el bot los saluda por nombre y recuerda su profesional y servicio preferido.",
      },
      {
        title: "Recordatorio con confirmación",
        body: "24 horas antes envía un recordatorio con botones: Confirmar, Reagendar o Cancelar — sin escribir nada.",
      },
    ],
    stats: [
      { value: "35%", label: "menos no-shows" },
      { value: "2 h", label: "ahorradas por día" },
      { value: "87%", label: "reservas fuera del horario" },
    ],
    ctaLabel: "Llenar mi agenda",
  },

  veterinarias: {
    slug: "veterinarias",
    emoji: "🐕",
    label: "Veterinarias",
    headline: "Agenda veterinaria que entiende a tus pacientes de 4 patas.",
    subheadline:
      "El bot recoge nombre y tipo de mascota, motivo de la consulta y disponibilidad del veterinario en un solo mensaje. Sin formularios.",
    useCases: [
      {
        title: "Captura de datos de la mascota",
        body: "Nombre, especie, raza y motivo de consulta capturados automáticamente antes de confirmar la cita.",
      },
      {
        title: "Clasificación inteligente",
        body: "Diferencia entre consulta general, vacunación, cirugía programada y urgencias para asignar el tiempo correcto.",
      },
      {
        title: "Recordatorio + instrucciones previas",
        body: "Envía automáticamente si requiere ayuno, medicación suspendida u otras instrucciones según el tipo de cita.",
      },
      {
        title: "Predicción de no-show",
        body: "Identifica clientes con historial de ausencias y refuerza el recordatorio con un segundo aviso 2 horas antes.",
      },
    ],
    stats: [
      { value: "40%", label: "reducción de no-shows" },
      { value: "4 min", label: "promedio por reserva" },
      { value: "91%", label: "citas confirmadas" },
    ],
    ctaLabel: "Organizar mi clínica",
  },

  mecanicos: {
    slug: "mecanicos",
    emoji: "🔧",
    label: "Mecánicos y Talleres",
    headline: "Tu taller organizado. Sin papeles, sin olvidos.",
    subheadline:
      "El bot registra modelo de vehículo, problema reportado y servicio requerido antes de que el cliente llegue. Tu equipo ya sabe qué esperar.",
    useCases: [
      {
        title: "Datos del vehículo automáticos",
        body: "Captura marca, modelo, año y patente en la misma conversación sin necesidad de formulario.",
      },
      {
        title: "Clasificación del servicio",
        body: "Distingue entre diagnóstico, cambio de aceite, frenos, alineación, electricidad y más para asignar el tiempo justo.",
      },
      {
        title: "Cola de trabajo visible",
        body: "Cada reserva aparece en el dashboard del taller con descripción del problema y hora de ingreso esperada.",
      },
      {
        title: "Recordatorio 1 hora antes",
        body: "El cliente recibe aviso con la dirección del taller y el nombre del técnico asignado.",
      },
    ],
    stats: [
      { value: "60%", label: "menos llamadas de coordinación" },
      { value: "+8", label: "vehículos atendidos por semana" },
      { value: "100%", label: "historial digitalizado" },
    ],
    ctaLabel: "Organizar mi taller",
  },

  clinicas: {
    slug: "clinicas",
    emoji: "🏥",
    label: "Clínicas y Consultorios",
    headline: "Agenda médica que respeta el tiempo de tus pacientes.",
    subheadline:
      "El bot asigna por especialidad, prepara al paciente con instrucciones previas y confirma asistencia automáticamente.",
    useCases: [
      {
        title: "Asignación por especialidad",
        body: "El paciente describe su motivo y el bot lo dirige al médico o especialista correcto con disponibilidad real.",
      },
      {
        title: "Instrucciones previas automáticas",
        body: "Envía indicaciones de ayuno, documentos a traer o medicación a suspender según el tipo de consulta.",
      },
      {
        title: "Confirmación interactiva",
        body: "El recordatorio de 24 horas incluye botones de Confirmar, Reagendar o Cancelar — sin necesidad de llamar.",
      },
      {
        title: "Historial de visitas",
        body: "Reconoce pacientes recurrentes, recuerda última consulta y facilita seguimiento post-cita.",
      },
    ],
    stats: [
      { value: "45%", label: "menos inasistencias" },
      { value: "3×", label: "más citas gestionadas" },
      { value: "24/7", label: "disponibilidad de agenda" },
    ],
    ctaLabel: "Mejorar mi consultorio",
  },

  gimnasios: {
    slug: "gimnasios",
    emoji: "💪",
    label: "Gimnasios y Bienestar",
    headline: "Clases siempre con cupo. Reservas sin llamadas.",
    subheadline:
      "El bot gestiona clases grupales, sesiones con entrenador personal y avisos de renovación de membresía — todo desde WhatsApp.",
    useCases: [
      {
        title: "Reserva de clases grupales",
        body: "Muestra cupo disponible en tiempo real para yoga, spinning, zumba y más. Confirma en segundos.",
      },
      {
        title: "Sesiones con entrenador personal",
        body: "Cada entrenador gestiona su propia agenda. El bot asigna según disponibilidad y preferencia del cliente.",
      },
      {
        title: "Recordatorio de clase 2h antes",
        body: "El miembro recibe aviso con sala, instructor y duración — con opción de cancelar y liberar el cupo.",
      },
      {
        title: "Aviso de renovación",
        body: "Notifica automáticamente 7 días antes del vencimiento de membresía con enlace de pago o contacto directo.",
      },
    ],
    stats: [
      { value: "70%", label: "de cupos ocupados sin llamar" },
      { value: "25%", label: "menos cancelaciones tardías" },
      { value: "2 min", label: "por reserva en promedio" },
    ],
    ctaLabel: "Llenar mis clases",
  },
};
