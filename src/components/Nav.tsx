import { Link } from "react-router-dom";

export function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="text-lg font-bold">Agente Citas</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/precios" className="text-gray-600 hover:text-gray-900">Precios</Link>
          {/* Use absolute paths so these work from any route (e.g. /veterinarias) */}
          <Link to="/#como-funciona" className="text-gray-600 hover:text-gray-900">Cómo funciona</Link>
          <Link to="/#features" className="text-gray-600 hover:text-gray-900">Funciones</Link>
          <a
            href="/registro"
            className="rounded-md bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
          >
            Empezar gratis
          </a>
        </nav>
      </div>
    </header>
  );
}
