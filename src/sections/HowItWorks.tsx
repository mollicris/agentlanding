import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    kicker: "el cliente",
    title: "Escribe por WhatsApp",
    body: 'Puede decir "quiero turno con Laura el sábado a las 11" o mandar un audio — el bot entiende ambos en su propio idioma.',
  },
  {
    number: "02",
    kicker: "el agente",
    title: "Extrae todo en un paso",
    body: "Servicio, profesional, fecha y hora detectados en una sola respuesta. Sin preguntas repetidas, sin formularios.",
  },
  {
    number: "03",
    kicker: "tu agenda",
    title: "Confirma al instante",
    body: "El cliente recibe confirmación en segundos. El turno queda reservado en tu calendario automáticamente.",
  },
  {
    number: "04",
    kicker: "24 h antes",
    title: "Recordatorio inteligente",
    body: "Botones para confirmar, reagendar o cancelar. Refuerza con clientes propensos a faltar.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative scroll-mt-24 border-t border-ink/10 py-24 md:py-32"
    >
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="pill">02 — el proceso</span>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tighter2 md:text-6xl">
              De mensaje a turno
              <br />
              <span className="italic text-jade-600">confirmado</span>, en menos
              de dos minutos.
            </h2>
          </div>
          <p className="max-w-sm text-ink/70 md:text-right">
            Sin intervención humana. Sin formularios. Sin la fricción que aleja
            a la mitad de tus clientes.
          </p>
        </div>

        <div className="hairline my-16" />

        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative"
            >
              {/* numeral */}
              <div className="flex items-baseline gap-3">
                <span className="font-display text-7xl font-light italic leading-none text-jade-600/90 transition group-hover:text-jade-600">
                  {step.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
                  {step.kicker}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-medium leading-snug">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                {step.body}
              </p>

              {/* connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="absolute -right-5 top-8 hidden h-px w-10 bg-ink/15 lg:block" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
