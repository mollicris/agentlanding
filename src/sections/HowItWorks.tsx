import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Cliente escribe por WhatsApp",
    body: 'Puede decir "quiero turno con Laura el sábado a las 11" o mandar un audio — el bot entiende ambos.',
  },
  {
    number: "02",
    title: "El bot extrae todo en un paso",
    body: "Servicio, profesional, fecha y hora detectados en una sola respuesta. Sin preguntas repetidas.",
  },
  {
    number: "03",
    title: "Confirma y agenda al instante",
    body: "El cliente recibe confirmación en segundos. El turno queda reservado en tu agenda automáticamente.",
  },
  {
    number: "04",
    title: "Recordatorio 24 h antes",
    body: "Botones interactivos para confirmar, reagendar o cancelar. Cero llamadas para tu equipo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-bold">Así de simple</h2>
        <p className="mt-4 text-center text-gray-600">
          De mensaje a turno confirmado en menos de 2 minutos, sin intervención humana.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-xl font-bold text-brand-600">
                {step.number}
              </div>
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
