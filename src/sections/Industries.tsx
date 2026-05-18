import { Link } from "react-router-dom";

const industries = [
  { slug: "salones-y-peluquerias", label: "Salones y Peluquerías", emoji: "💇" },
  { slug: "veterinarias", label: "Veterinarias", emoji: "🐕" },
  { slug: "mecanicos", label: "Mecánicos y Talleres", emoji: "🔧" },
  { slug: "clinicas", label: "Clínicas y Consultorios", emoji: "🏥" },
  { slug: "gimnasios", label: "Gimnasios y Bienestar", emoji: "💪" },
];

export function Industries() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">Diseñado para tu industria</h2>
        <p className="mt-4 text-center text-gray-600">
          Templates pre-configurados con servicios, campos dinámicos y prompts específicos.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              to={`/${industry.slug}`}
              className="rounded-lg border bg-white p-6 text-center transition hover:border-brand-500 hover:shadow-md"
            >
              <div className="text-4xl">{industry.emoji}</div>
              <div className="mt-3 font-medium">{industry.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
