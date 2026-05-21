import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Para arrancar sin complicaciones.",
    features: [
      "200 conversaciones / mes",
      "Texto + recordatorios",
      "1 canal (WhatsApp)",
      "Soporte por email",
    ],
  },
  {
    name: "Pro",
    price: 79,
    description: "Lo que la mayoría elige.",
    highlighted: true,
    features: [
      "1,000 conversaciones / mes",
      "+ Audio e imágenes",
      "+ Memoria de cliente",
      "+ Multi-canal",
      "+ Templates por industria",
    ],
  },
  {
    name: "Business",
    price: 199,
    description: "Para crecer con varias sedes.",
    features: [
      "5,000 conversaciones / mes",
      "+ Predicción no-show",
      "+ RAG personalizado",
      "+ Analytics avanzado",
      "+ Multi-sucursal",
    ],
  },
];

export function Pricing() {
  return (
    <section className="relative border-t border-ink/10 bg-paper-200/40 py-24 md:py-32">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="pill">05 — precios</span>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tighter2 md:text-6xl">
              Precios <span className="italic text-jade-600">honestos</span>.
              <br />
              Sin sorpresas.
            </h2>
          </div>
          <p className="max-w-sm text-ink/70 md:text-right">
            14 días gratis. Sin tarjeta. Cancela cuando quieras.
            <br />
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
              precios en USD · facturación mensual
            </span>
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className={`relative flex flex-col rounded-3xl border p-8 transition md:p-10 ${
                plan.highlighted
                  ? "border-ink bg-ink text-paper shadow-ink"
                  : "border-ink/10 bg-paper-50 hover:-translate-y-1 hover:shadow-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ember-500 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ink">
                  ★ más elegido
                </div>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-3xl font-medium">{plan.name}</h3>
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${
                    plan.highlighted ? "text-paper/50" : "text-ink/40"
                  }`}
                >
                  0{i + 1}
                </span>
              </div>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? "text-paper/70" : "text-ink/60"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-8 flex items-baseline gap-1">
                <span className="font-display text-6xl font-light tracking-tight">
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-paper/60" : "text-ink/50"
                  }`}
                >
                  /mes
                </span>
              </div>

              <div
                className={`mt-8 h-px w-full ${
                  plan.highlighted ? "bg-paper/15" : "bg-ink/10"
                }`}
              />

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[14px]">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        plan.highlighted ? "text-ember-400" : "text-jade-600"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/registro"
                className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
                  plan.highlighted
                    ? "bg-paper text-ink hover:bg-ember-500"
                    : "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper"
                }`}
              >
                Empezar con {plan.name}
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
