import { motion } from "framer-motion";
import { Mic, Image as ImageIcon, Check, CheckCheck } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* decorative editorial marks */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 hidden h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-jade-100/40 blur-3xl md:block" />
        <div className="absolute right-[6%] top-40 hidden font-display text-[220px] italic leading-none text-ink/[0.04] md:block">
          “
        </div>
        <div className="absolute left-[4%] bottom-12 hidden font-mono text-[10px] uppercase tracking-[0.4em] text-ink/40 md:block">
          edición · 01 — latam
        </div>
      </div>

      <div className="container-edge relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-12"
        >
          {/* LEFT — editorial headline */}
          <div className="lg:col-span-7">
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="pill">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-500 animate-pulse" />
                Live · 5,200 turnos agendados hoy
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-[clamp(2.6rem,6.4vw,5.5rem)] font-light leading-[0.95] tracking-tighter2 text-ink"
            >
              El agente de
              <span className="mx-3 inline-block -rotate-1 rounded-2xl bg-ink px-3 py-0.5 text-paper">
                WhatsApp
              </span>
              <br />
              que <span className="italic font-normal text-jade-600">escucha</span>,
              <br className="hidden md:block" />
              <span className="underline-wavy">recuerda</span> y
              <span className="ml-3 font-display italic font-normal">vende.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70"
            >
              Entiende <span className="font-medium text-ink">audios</span>,{" "}
              <span className="font-medium text-ink">imágenes</span> y la forma en que
              hablan tus clientes. Agenda, recuerda y predice no-shows — sin código, en
              5 minutos.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="/registro" className="btn-ink !px-7 !py-3.5 !text-base">
                Probar gratis 14 días
                <span aria-hidden>→</span>
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/60"
            >
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-jade-600" /> Sin tarjeta
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-jade-600" /> Setup en 5 min
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-jade-600" /> Cancela cuando quieras
              </span>
            </motion.div>
          </div>

          {/* RIGHT — WhatsApp chat mockup, refined */}
          <motion.div
            variants={item}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              {/* tag floating */}
              <div className="absolute -left-6 -top-4 z-20 rotate-[-6deg] rounded-md border border-ink/15 bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink/70 shadow-paper">
                conversación · 14:32
              </div>

              <div className="relative overflow-hidden rounded-[26px] border border-ink/10 bg-paper-50 shadow-card">
                {/* phone bar */}
                <div className="flex items-center gap-3 border-b border-ink/10 bg-jade-700 px-5 py-3 text-paper">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/15 font-display italic">
                    a
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Agente · Veterinaria Aluna</div>
                    <div className="flex items-center gap-1.5 text-[11px] text-paper/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-neon-400 animate-pulse" />
                      en línea
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-paper/60">
                    e2e
                  </span>
                </div>

                {/* messages */}
                <div className="space-y-3 px-5 py-6">
                  <Bubble side="left">
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-jade-600 text-paper">
                        <Mic className="h-3.5 w-3.5" />
                      </div>
                      <div className="flex items-end gap-0.5">
                        {[10, 18, 8, 22, 14, 24, 12, 20, 9, 16, 11].map((h, i) => (
                          <span
                            key={i}
                            className="w-[2px] rounded-full bg-jade-600/70"
                            style={{ height: `${h}px` }}
                          />
                        ))}
                      </div>
                      <span className="font-mono text-[10px] text-ink/60">0:08</span>
                    </div>
                    <p className="mt-2 text-[13px] italic text-ink/70">
                      “hola, quiero turno con la dra. laura, mi gato vomitó toda la noche
                      — el sábado a las 11 si se puede”
                    </p>
                  </Bubble>

                  <Bubble side="right">
                    <p className="text-[13px] leading-relaxed">
                      Lo siento por <em className="font-display">Mishi</em> 🐱. Tengo
                      <strong> sábado 11:00 con Dra. Laura</strong> — consulta general
                      <em className="not-italic text-ink/60"> (45 min · Bs. 180)</em>.
                      ¿Confirmo?
                    </p>
                    <div className="mt-2.5 flex gap-2">
                      <span className="rounded-full border border-ink/15 bg-paper px-3 py-1 text-[11px] font-medium">
                        Confirmar
                      </span>
                      <span className="rounded-full border border-ink/15 bg-paper px-3 py-1 text-[11px] text-ink/70">
                        Otro horario
                      </span>
                    </div>
                  </Bubble>

                  <Bubble side="left">
                    <p className="text-[13px]">listo ✅</p>
                  </Bubble>

                  <Bubble side="right" muted>
                    <div className="flex items-center gap-2 text-[12px] text-ink/70">
                      <CheckCheck className="h-4 w-4 text-jade-600" />
                      Turno confirmado · recordatorio activado
                    </div>
                  </Bubble>

                  {/* typing */}
                  <div className="flex items-center gap-1.5 pt-1 text-[11px] text-ink/40">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink/40" />
                    <span
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink/40"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink/40"
                      style={{ animationDelay: "300ms" }}
                    />
                    el agente está escribiendo
                  </div>
                </div>
              </div>

              {/* annotations */}
              <div className="absolute -right-10 top-24 hidden w-44 rotate-[4deg] md:block">
                <div className="rounded-lg border border-ink/15 bg-ember-50 p-3 shadow-paper">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-ember-700">
                    01 · entiende
                  </div>
                  <p className="mt-1 font-display text-sm italic leading-snug text-ink">
                    audio + foto en un solo mensaje
                  </p>
                </div>
              </div>
              <div className="absolute -left-12 bottom-16 hidden w-44 -rotate-[5deg] md:block">
                <div className="rounded-lg border border-ink/15 bg-jade-50 p-3 shadow-paper">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-jade-700">
                    02 · agenda
                  </div>
                  <p className="mt-1 font-display text-sm italic leading-snug text-ink">
                    confirma sin llamadas
                  </p>
                </div>
              </div>

              <ImageIcon className="sr-only" />
            </div>
          </motion.div>
        </motion.div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-20 grid grid-cols-2 gap-y-6 border-y border-ink/10 py-8 md:grid-cols-4"
        >
          {[
            { kpi: "−40%", label: "no-shows" },
            { kpi: "2 min", label: "respuesta promedio" },
            { kpi: "+3×", label: "conversión vs. humanos" },
            { kpi: "24/7", label: "sin descanso" },
          ].map(({ kpi, label }) => (
            <div key={label} className="px-3 text-center md:text-left">
              <div className="font-display text-3xl font-light tracking-tight md:text-4xl">
                {kpi}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Bubble({
  children,
  side = "left",
  muted = false,
}: {
  children: React.ReactNode;
  side?: "left" | "right";
  muted?: boolean;
}) {
  const base =
    "max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-paper border";
  const left = "bg-paper border-ink/10 text-ink";
  const right = muted
    ? "bg-jade-50 border-jade-100 text-ink"
    : "bg-jade-600 border-jade-700 text-paper";
  return (
    <div className={side === "right" ? "flex justify-end" : "flex"}>
      <div className={`${base} ${side === "right" ? right : left}`}>
        {children}
      </div>
    </div>
  );
}
