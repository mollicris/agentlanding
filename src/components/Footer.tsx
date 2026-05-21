import { Link } from "react-router-dom";

const productLinks = [
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Funciones", href: "/#features" },
  { label: "Precios", href: "/precios" },
];

const industryLinks = [
  { label: "Salones & peluquerías", href: "/salones-y-peluquerias" },
  { label: "Veterinarias", href: "/veterinarias" },
  { label: "Mecánicos", href: "/mecanicos" },
  { label: "Clínicas", href: "/clinicas" },
  { label: "Gimnasios", href: "/gimnasios" },
];

const WHATSAPP_URL =
  "https://wa.me/59169347415?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20agente%C2%B7citas";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-paper-100 pt-20 pb-10">
      <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 hidden font-display text-[260px] italic leading-none text-ink/[0.04] md:block">
        agenda.
      </div>

      <div className="container-edge relative">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper">
                <span className="font-display text-base italic leading-none">a</span>
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-neon-500 ring-2 ring-paper-100" />
              </span>
              <span className="font-display text-xl font-medium tracking-tight">
                agente<span className="italic text-jade-600">·</span>citas
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/70">
              El agente de WhatsApp que agenda, recuerda y convierte clientes
              automáticamente — diseñado con cariño para negocios de LATAM.
            </p>

            <a
              href="/registro"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-jade-700"
            >
              Registrar
              <span aria-hidden>→</span>
            </a>


          </div>

          {/* Columns */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <FooterColumn title="Producto">
                {productLinks.map((l) => (
                  <Link key={l.label} to={l.href} className="footer-link">
                    {l.label}
                  </Link>
                ))}
              </FooterColumn>

              <FooterColumn title="Industrias">
                {industryLinks.map((l) => (
                  <Link key={l.label} to={l.href} className="footer-link">
                    {l.label}
                  </Link>
                ))}
              </FooterColumn>

              <FooterColumn title="Contacto">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  WhatsApp
                </a>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} agente·citas — todos los derechos reservados</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-500 animate-pulse" />
            status: todos los sistemas operativos
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-[14px]">
        {Array.isArray(children)
          ? children.map((c, i) => <li key={i}>{c}</li>)
          : <li>{children}</li>}
      </ul>
    </div>
  );
}
