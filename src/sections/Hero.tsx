import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="px-4 pt-32 pb-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold tracking-tight md:text-6xl"
        >
          El agente de WhatsApp que entiende{" "}
          <span className="text-brand-600">audios, imágenes y a tus clientes.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-xl text-gray-600"
        >
          Agenda, recuerda y predice no-shows con IA. Setup en 5 minutos. Sin código.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="/registro"
            className="rounded-md bg-brand-600 px-8 py-3 text-lg font-medium text-white hover:bg-brand-700"
          >
            Probar gratis 14 días
          </a>
          <a
            href="#demo"
            className="rounded-md border border-gray-300 px-8 py-3 text-lg font-medium hover:bg-gray-50"
          >
            Ver demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
