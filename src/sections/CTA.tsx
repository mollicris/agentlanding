import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-ink/10 bg-ink text-paper">
      {/* decorative */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full bg-jade-600/30 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 h-[380px] w-[380px] rounded-full bg-ember-500/15 blur-3xl" />
        <svg
          className="absolute inset-x-0 -top-px h-12 w-full text-paper"
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 24 Q150 0 300 24 T600 24 T900 24 T1200 24 L1200 48 L0 48 Z"
            fill="currentColor"
            fillOpacity="0.04"
          />
        </svg>
      </div>

      <div className="container-edge relative py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="pill !border-paper/20 !bg-transparent !text-paper/70">
            06 — empieza hoy
          </span>

          <h2 className="mt-6 font-display text-5xl font-light leading-[0.95] tracking-tighter2 md:text-7xl">
            Tu agenda <span className="italic text-ember-400">llena</span>,
            <br />
            mañana por la mañana.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            Conecta tu WhatsApp en 5 minutos. Los primeros 14 días corren por
            nuestra cuenta — sin tarjeta, sin compromisos.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/registro"
              className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 text-base font-medium text-ink transition hover:bg-ember-500"
            >
              Crear cuenta gratis
              <span
                aria-hidden
                className="transition group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/50">
            <span>· sin tarjeta</span>
            <span>· cancela cuando quieras</span>
            <span>· soporte real</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
