import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Para empezar",
    features: ["200 conversaciones/mes", "Texto + recordatorios", "1 canal (WhatsApp)", "Soporte por email"],
  },
  {
    name: "Pro",
    price: 79,
    description: "El más popular",
    highlighted: true,
    features: ["1000 conversaciones/mes", "+ Audio e imágenes", "+ Memoria de cliente", "+ Multi-canal", "+ Templates por industria"],
  },
  {
    name: "Business",
    price: 199,
    description: "Para crecer",
    features: ["5000 conversaciones/mes", "+ Predicción no-show", "+ RAG personalizado", "+ Analytics avanzado", "+ Multi-sucursal"],
  },
];

export function Pricing() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">Precios simples y predecibles</h2>
        <p className="mt-4 text-center text-gray-600">14 días gratis. Sin tarjeta. Cancela cuando quieras.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-brand-600 bg-brand-600 text-white shadow-2xl"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-brand-600 shadow">
                  Más popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-1 text-sm ${plan.highlighted ? "text-brand-50" : "text-gray-500"}`}>
                {plan.description}
              </p>
              <div className="mt-6">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={plan.highlighted ? "text-brand-100" : "text-gray-500"}> /mes</span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                        plan.highlighted ? "text-white" : "text-brand-600"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/registro"
                className={`mt-8 block rounded-md px-6 py-3 text-center font-medium ${
                  plan.highlighted
                    ? "bg-white text-brand-600 hover:bg-brand-50"
                    : "border border-gray-300 hover:bg-gray-50"
                }`}
              >
                Empezar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
