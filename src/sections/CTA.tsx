export function CTA() {
  return (
    <section className="bg-brand-600 px-4 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold">Listo para llenar tu agenda automáticamente</h2>
        <p className="mt-4 text-xl text-brand-50">
          Empieza con 14 días gratis. Sin tarjeta de crédito.
        </p>
        <a
          href="/registro"
          className="mt-8 inline-block rounded-md bg-white px-8 py-3 text-lg font-medium text-brand-700 hover:bg-brand-50"
        >
          Crear cuenta gratis
        </a>
      </div>
    </section>
  );
}
