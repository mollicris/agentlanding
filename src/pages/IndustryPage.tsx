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
            <p className="text-6xl">🤔</p>
            <h1 className="mt-6 text-3xl font-bold">Industria no encontrada</h1>
            <p className="mt-3 text-gray-600">
              Esa página no existe, pero podemos mostrarte el producto completo.
            </p>
            <Link
              to="/"
              className="mt-8 inline-block rounded-md bg-brand-600 px-8 py-3 text-white hover:bg-brand-700"
            >
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
        <section className="px-4 pt-32 pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-6xl"
            >
              {data.emoji}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
            >
              {data.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-6 text-xl text-gray-600"
            >
              {data.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="/registro"
                className="rounded-md bg-brand-600 px-8 py-3 text-lg font-medium text-white hover:bg-brand-700"
              >
                {data.ctaLabel}
              </a>
              <Link
                to="/precios"
                className="rounded-md border border-gray-300 px-8 py-3 text-lg font-medium hover:bg-gray-50"
              >
                Ver precios
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-3 gap-8 text-center">
              {data.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-brand-600">{stat.value}</div>
                  <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-4xl font-bold">
              Cómo funciona para {data.label}
            </h2>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {data.useCases.map((uc, i) => (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 rounded-xl border bg-white p-6 shadow-sm"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{uc.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{uc.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other industries */}
        <section className="bg-gray-50 px-4 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              También funciona para
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {Object.values(industries)
                .filter((ind) => ind.slug !== data.slug)
                .map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/${ind.slug}`}
                    className="rounded-full border bg-white px-4 py-2 text-sm font-medium transition hover:border-brand-500 hover:text-brand-600"
                  >
                    {ind.emoji} {ind.label}
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
