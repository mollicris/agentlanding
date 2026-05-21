import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";
import { IndustryPage } from "./pages/IndustryPage";
import { RegisterPage } from "./pages/RegisterPage";
import { VerifyEmailPage } from "./pages/VerifyEmailPage";
import "./styles/globals.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/precios" element={<PricingPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/verificar/:token" element={<VerifyEmailPage />} />
        <Route path="/:industry" element={<IndustryPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
