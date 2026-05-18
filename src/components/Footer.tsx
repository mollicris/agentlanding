import { Link } from "react-router-dom";

// router: true  → rendered with <Link to> (client-side, no reload)
// router: false → rendered with <a href> (external or hash anchor)
const productLinks = [
  { label: "Funciones", href: "/#features", router: true },
  { label: "Precios", href: "/precios", router: true },
  { label: "Integraciones", href: "/#features", router: true },
  { label: "API", href: "#", router: false },
];

const industryLinks = [
  { label: "Salones y Peluquerías", href: "/salones-y-peluquerias" },
  { label: "Veterinarias", href: "/veterinarias" },
  { label: "Mecánicos", href: "/mecanicos" },
  { label: "Clínicas", href: "/clinicas" },
  { label: "Gimnasios", href: "/gimnasios" },
];

const companyLinks = [
  { label: "Sobre nosotros", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contacto", href: "#" },
];

const legalLinks = [
  { label: "Privacidad", href: "#" },
  { label: "Términos de uso", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 pt-16 pb-10 text-sm text-gray-600">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-lg font-bold text-gray-900">
              Agente Citas
            </Link>
            <p className="mt-3 max-w-xs leading-relaxed">
              El agente de WhatsApp que agenda, recuerda y convierte clientes
              automáticamente — para cualquier negocio.
            </p>
            <a
              href="/registro"
              className="mt-6 inline-block rounded-md bg-brand-600 px-5 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              Probar 14 días gratis
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-900">Producto</h4>
            <ul className="mt-4 space-y-2">
              {productLinks.map((l) => (
                <li key={l.label}>
                  {l.router ? (
                    <Link to={l.href} className="hover:text-gray-900">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="hover:text-gray-900">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-gray-900">Industrias</h4>
            <ul className="mt-4 space-y-2">
              {industryLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="hover:text-gray-900">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <h4 className="font-semibold text-gray-900">Empresa</h4>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-gray-900">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="mt-8 font-semibold text-gray-900">Legal</h4>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-gray-900">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} Agente Citas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
