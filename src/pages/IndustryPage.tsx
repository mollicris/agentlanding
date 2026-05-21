import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { CTA } from "../sections/CTA";
import { industries } from "../lib/industries";

export function IndustryPage() {
  const { industry } = useParams<{ industry: string }>();
  const data = industry ? industries[industry] : undefined;

  if (!data) {
    return (
      <>
        <Nav />
        <main className="flex min-h-screen items-center justify-center px-4 pt-16">
          <div className="text-center">
            <p className="font-display text-7xl">¿?</p>
            <h1 className="mt-6 font-display text-4xl font-light tracking-tighter2">
              Industria no encontrada
            </h1>
            <p className="mt-3 text-ink/60">
              Esa página no existe, pero podemos mostrarte el producto completo.
            </p>
            <Link to="/" className="btn-ink mt-8 inline-flex">
              Ver página principal
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-20 md:pt-44">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-32 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-jade-100/40 blur-3xl" />
          </div>

          <div className="container-edge text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-ink/10 bg-paper-50 text-5xl shadow-paper"
            >
              {data.emoji}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6"
            >
              <span className="pill">industria · {data.label.toLowerCase()}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-light leading-[1] tracking-tighter2"
            >
              {data.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70"
            >
              {data.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a href="/registro" className="btn-ink !px-7 !py-3.5 !text-base">
                {data.ctaLabel}
                <span aria-hidden>→</span>
              </a>
              <Link to="/precios" className="btn-ghost !px-7 !py-3.5 !text-base">
                Ver precios
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-ink/10 bg-paper-200/50">
          <div className="container-edge grid grid-cols-3 gap-6 py-12 text-center">
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-light tracking-tight text-jade-600 md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="py-24 md:py-28">
          <div className="container-edge">
            <div className="flex flex-col items-start gap-4">
              <span className="pill">casos de uso</span>
              <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tighter2 md:text-5xl">
                Cómo funciona para
                <span className="italic text-jade-600"> {data.label.toLowerCase()}</span>.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {data.useCases.map((uc, i) => (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="group flex gap-5 rounded-2xl border border-ink/10 bg-paper-50 p-7 transition hover:-translate-y-1 hover:shadow-paper"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-ink/15 bg-paper text-jade-600 transition group-hover:bg-ink group-hover:text-ember-400">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium leading-snug">
                      {uc.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                      {uc.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other industries */}
        <section className="border-t border-ink/10 bg-paper-200/40 py-20">
          <div className="container-edge text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
              también funciona para
            </span>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {Object.values(industries)
                .filter((ind) => ind.slug !== data.slug)
                .map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/${ind.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    <span>{ind.emoji}</span>
                    {ind.label}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
