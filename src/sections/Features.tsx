import { Mic, Image, Brain, Bell, Languages, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Mic,
    eyebrow: "voz",
    title: "Entiende audios",
    body: "Más del 60% de mensajes en LATAM son audios. Tu agente los transcribe y comprende nativamente.",
  },
  {
    icon: Image,
    eyebrow: "visión",
    title: "Lee imágenes",
    body: "Foto de mascota, cabello o pieza dañada — el agente identifica el contexto y sugiere el servicio correcto.",
  },
  {
    icon: Brain,
    eyebrow: "memoria",
    title: "Memoria de cliente",
    body: "Recuerda preferencias: profesional favorito, horario habitual, último servicio recibido.",
  },
  {
    icon: Bell,
    eyebrow: "predicción",
    title: "Predice no-shows",
    body: "Un modelo ML identifica clientes con alta probabilidad de ausencia y refuerza el recordatorio.",
  },
  {
    icon: Languages,
    eyebrow: "idiomas",
    title: "Multi-idioma",
    body: "Español, portugués, inglés. Detecta el idioma del cliente y responde en el mismo tono.",
  },
  {
    icon: MessageSquare,
    eyebrow: "canales",
    title: "Multi-canal",
    body: "WhatsApp, Instagram, web. Un solo inbox para todas las conversaciones del negocio.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 overflow-hidden border-t border-ink/10 bg-paper-200/60 py-24 md:py-32"
    >
      <div className="container-edge relative">
        <div className="flex flex-col items-start gap-6">
          <span className="pill">03 — capacidades</span>
          <h2 className="max-w-3xl font-display text-4xl font-light leading-[1.04] tracking-tighter2 md:text-6xl">
            Seis razones por las que tus clientes
            <span className="italic text-jade-600"> no notarán</span> que están
            hablando con una máquina.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body, eyebrow }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05, duration: 0.55 }}
              className="group relative flex flex-col bg-paper-50 p-8 transition hover:bg-paper md:p-10"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ink/15 bg-paper text-jade-600 transition group-hover:-rotate-6 group-hover:bg-ink group-hover:text-ember-400">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
                  / {String(i + 1).padStart(2, "0")} · {eyebrow}
                </span>
              </div>

              <h3 className="mt-8 font-display text-2xl font-medium leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                {body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
