import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const industries = [
  {
    slug: "salones-y-peluquerias",
    label: "Salones & peluquerías",
    emoji: "💇",
    note: "color · corte · botox",
  },
  {
    slug: "veterinarias",
    label: "Veterinarias",
    emoji: "🐕",
    note: "consultas · vacunación",
  },
  {
    slug: "mecanicos",
    label: "Mecánicos & talleres",
    emoji: "🔧",
    note: "diagnóstico · service",
  },
  {
    slug: "clinicas",
    label: "Clínicas & consultorios",
    emoji: "🏥",
    note: "agenda médica",
  },
  {
    slug: "gimnasios",
    label: "Gimnasios & bienestar",
    emoji: "💪",
    note: "clases · entrenadores",
  },
];

export function Industries() {
  return (
    <section className="relative border-t border-ink/10 py-24 md:py-32">
      <div className="container-edge">
        <div className="grid items-end gap-10 md:grid-cols-2">
          <div>
            <span className="pill">04 — industrias</span>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tighter2 md:text-6xl">
              Pensado para tu
              <br />
              <span className="italic text-jade-600">oficio</span> en
              particular.
            </h2>
          </div>
          <p className="text-ink/70 md:text-lg">
            Cada industria tiene su forma de hablar y de agendar. Por eso
            preparamos templates con servicios, campos dinámicos y prompts
            específicos — listos para activar.
          </p>
        </div>

        {/* ticker */}
        <div className="mt-14 overflow-hidden border-y border-ink/10 py-5">
          <div className="flex animate-ticker gap-12 whitespace-nowrap font-display text-3xl font-light italic text-ink/60 md:text-5xl">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex shrink-0 items-center gap-12">
                {industries.map((it) => (
                  <span key={`${k}-${it.slug}`} className="flex items-center gap-4">
                    <span aria-hidden>{it.emoji}</span>
                    {it.label}
                    <span className="text-ember-500" aria-hidden>
                      ✦
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                to={`/${industry.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl border border-ink/10 bg-paper-50 p-6 transition hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-paper hover:shadow-card"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 transition group-hover:text-ember-400">
                  / 0{i + 1}
                </div>
                <div className="mt-6 text-4xl transition group-hover:scale-110 group-hover:-translate-y-1">
                  {industry.emoji}
                </div>
                <div className="mt-5 font-display text-lg font-medium leading-snug">
                  {industry.label}
                </div>
                <div className="mt-1 text-xs text-ink/50 transition group-hover:text-paper/60">
                  {industry.note}
                </div>

                <span className="absolute right-5 top-5 font-mono text-xs opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
