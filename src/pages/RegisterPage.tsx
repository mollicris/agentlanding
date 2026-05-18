import { useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, ArrowLeft } from "lucide-react";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { industries } from "../lib/industries";
import { onboardingApi, type ApiError } from "../lib/api";

interface FormState {
  name: string;
  admin_email: string;
  admin_password: string;
  industry: string;
}

const INDUSTRY_OPTIONS = Object.values(industries).map((i) => ({
  value: i.slug,
  label: `${i.emoji} ${i.label}`,
}));

export function RegisterPage() {
  const [searchParams] = useSearchParams();
  const presetIndustry = searchParams.get("industry") ?? "";

  const [form, setForm] = useState<FormState>({
    name: "",
    admin_email: "",
    admin_password: "",
    industry: presetIndustry,
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<{ email: string } | null>(null);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = (): string | null => {
    if (form.name.trim().length < 2) return "El nombre del negocio debe tener al menos 2 caracteres";
    if (!form.admin_email.includes("@")) return "Ingresa un correo válido";
    if (form.admin_password.length < 8) return "La contraseña debe tener al menos 8 caracteres";
    if (!form.industry) return "Selecciona el tipo de negocio";
    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    try {
      const response = await onboardingApi.register({
        name: form.name.trim(),
        admin_email: form.admin_email.trim().toLowerCase(),
        admin_password: form.admin_password,
        industry: form.industry,
      });

      setSuccess({ email: response.data.verification_sent_to });
    } catch (err) {
      const apiError = err as ApiError;
      // Map common backend errors to friendlier Spanish messages
      const msg = apiError.message || "";
      if (apiError.code === "EMAIL_ALREADY_EXISTS" || /already exists|duplicate/i.test(msg)) {
        setError("Ese correo ya está registrado. Inicia sesión o usa otro correo.");
      } else {
        setError(msg || "No pudimos crear tu cuenta. Intenta de nuevo.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <>
        <Nav />
        <main className="px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-xl rounded-2xl border bg-white p-10 text-center shadow-sm"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold">¡Casi listo!</h1>
            <p className="mt-4 text-gray-600">
              Te enviamos un correo a <strong>{success.email}</strong> con un enlace para
              verificar tu cuenta y activar tu agente.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Revisa tu bandeja de entrada (y la carpeta de spam por si acaso). El enlace expira en 24 horas.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-xl"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">Empieza gratis</h1>
            <p className="mt-3 text-gray-600">
              14 días de prueba. Sin tarjeta. Tu agente listo en 5 minutos.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-2xl border bg-white p-8 shadow-sm"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre del negocio
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="organization"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                placeholder="Ej: Peluquería Lucía"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                Tipo de negocio
              </label>
              <select
                id="industry"
                required
                value={form.industry}
                onChange={(e) => setField("industry", e.target.value)}
                className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              >
                <option value="">Selecciona…</option>
                {INDUSTRY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={form.admin_email}
                onChange={(e) => setField("admin_email", e.target.value)}
                placeholder="tu@correo.com"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="new-password"
                value={form.admin_password}
                onChange={(e) => setField("admin_password", e.target.value)}
                placeholder="Mínimo 8 caracteres"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>

            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-base font-medium text-white hover:bg-brand-700 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creando cuenta…
                </>
              ) : (
                "Crear cuenta gratis"
              )}
            </button>

            <p className="text-center text-xs text-gray-500">
              Al registrarte aceptas nuestros términos y política de privacidad.
            </p>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            ¿Ya tienes cuenta?{" "}
            <a
              href={import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5173"}
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              Inicia sesión
            </a>
          </p>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
