import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/59100000000?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20agente%C2%B7citas";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.471-.149-.67.149-.198.297-.768.967-.94 1.165-.174.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.174-.298-.018-.458.13-.606.134-.135.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488z" />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${hash}`);
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-edge flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-ink text-paper">
            <span className="font-display text-base italic leading-none">a</span>
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-neon-500 ring-2 ring-paper" />
          </span>
          <span className="font-display text-lg font-medium tracking-tight">
            agente<span className="italic text-jade-600">·</span>citas
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="/#como-funciona"
            onClick={(e) => handleHashClick(e, "como-funciona")}
            className="text-ink/70 transition hover:text-ink"
          >
            Cómo funciona
          </a>
          <a
            href="/#features"
            onClick={(e) => handleHashClick(e, "features")}
            className="text-ink/70 transition hover:text-ink"
          >
            Funciones
          </a>
          <Link to="/precios" className="text-ink/70 transition hover:text-ink">
            Precios
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-flex items-center gap-1.5 text-ink/70 transition hover:text-jade-600"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <a href="/registro" className="btn-ink !py-2 !text-sm">
            Empezar gratis
            <span aria-hidden>→</span>
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a href="/registro" className="btn-ink !py-2 !text-xs">
            Empezar
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-ink/5"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="border-t border-ink/10 bg-paper/95 backdrop-blur-md md:hidden"
          >
            <nav className="container-edge flex flex-col gap-1 py-4 text-base">
              <a
                href="/#como-funciona"
                onClick={(e) => handleHashClick(e, "como-funciona")}
                className="rounded-xl px-3 py-3 text-ink/80 transition hover:bg-ink/5 hover:text-ink"
              >
                Cómo funciona
              </a>
              <a
                href="/#features"
                onClick={(e) => handleHashClick(e, "features")}
                className="rounded-xl px-3 py-3 text-ink/80 transition hover:bg-ink/5 hover:text-ink"
              >
                Funciones
              </a>
              <Link
                to="/precios"
                className="rounded-xl px-3 py-3 text-ink/80 transition hover:bg-ink/5 hover:text-ink"
              >
                Precios
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-ink/80 transition hover:bg-ink/5 hover:text-jade-600"
              >
                <WhatsAppIcon />
                Contactar por WhatsApp
              </a>
              <a
                href="/registro"
                className="btn-ink mt-3 !w-full !justify-center !py-3 !text-sm"
              >
                Empezar gratis
                <span aria-hidden>→</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
