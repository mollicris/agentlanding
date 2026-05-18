import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Loader2, ArrowRight } from "lucide-react";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { onboardingApi, DASHBOARD_URL, type ApiError } from "../lib/api";

type Status = "verifying" | "success" | "error";

export function VerifyEmailPage() {
  const { token } = useParams<{ token: string }>();
  const [status, setStatus] = useState<Status>("verifying");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [adminEmail, setAdminEmail] = useState<string>("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setErrorMessage("Enlace de verificación inválido.");
      return;
    }

    let cancelled = false;
    onboardingApi
      .verifyEmail(token)
      .then((res) => {
        if (cancelled) return;
        setAdminEmail(res.data.admin_email);
        setStatus("success");
      })
      .catch((err: ApiError) => {
        if (cancelled) return;
        const msg = err.message || "";
        if (/expired/i.test(msg)) {
          setErrorMessage("Este enlace expiró. Solicita uno nuevo desde la página de registro.");
        } else if (/invalid|not found/i.test(msg)) {
          setErrorMessage("Este enlace ya fue usado o no es válido.");
        } else {
          setErrorMessage(msg || "No pudimos verificar tu cuenta. Intenta de nuevo.");
        }
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

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
          {status === "verifying" && (
            <>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Loader2 className="h-10 w-10 animate-spin text-gray-600" />
              </div>
              <h1 className="text-2xl font-bold">Verificando tu correo…</h1>
              <p className="mt-3 text-gray-600">Esto solo tomará un momento.</p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold">¡Cuenta verificada!</h1>
              <p className="mt-4 text-gray-600">
                Tu correo <strong>{adminEmail}</strong> fue verificado correctamente.
              </p>
              <p className="mt-2 text-gray-600">
                Ahora puedes iniciar sesión y completar la configuración de tu negocio.
              </p>
              <a
                href={DASHBOARD_URL}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-base font-medium text-white hover:bg-brand-700"
              >
                Ir al panel
                <ArrowRight className="h-4 w-4" />
              </a>
            </>
          )}

          {status === "error" && (
            <>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <XCircle className="h-10 w-10 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold">No pudimos verificar</h1>
              <p className="mt-4 text-gray-600">{errorMessage}</p>
              <Link
                to="/registro"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-base font-medium text-white hover:bg-brand-700"
              >
                Volver al registro
              </Link>
            </>
          )}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
