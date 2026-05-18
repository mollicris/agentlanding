import { Mic, Image, Brain, Bell, Languages, MessageSquare } from "lucide-react";

const features = [
  { icon: Mic, title: "Entiende audios", body: "Más del 60% de mensajes en LATAM son audios. Tu bot los procesa nativamente con Whisper." },
  { icon: Image, title: "Lee imágenes", body: "Cliente envía foto de mascota, cabello o pieza dañada — el bot identifica y sugiere servicio." },
  { icon: Brain, title: "Memoria de cliente", body: "Recuerda preferencias: profesional favorito, horario habitual, último servicio." },
  { icon: Bell, title: "Predice no-shows", body: "ML identifica clientes con alta probabilidad de ausencia y refuerza el recordatorio." },
  { icon: Languages, title: "Multi-idioma", body: "Español, portugués, inglés. Detecta y responde en el mismo idioma del cliente." },
  { icon: MessageSquare, title: "Multi-canal", body: "WhatsApp, Instagram, web. Un solo inbox para todas las conversaciones." },
];

export function Features() {
  return (
    <section id="features" className="bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">Características que importan</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-lg bg-white p-6 shadow-sm">
              <Icon className="h-10 w-10 text-brand-600" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
