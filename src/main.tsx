import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";
import { IndustryPage } from "./pages/IndustryPage";
import { RegisterPage } from "./pages/RegisterPage";
import { VerifyEmailPage } from "./pages/VerifyEmailPage";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
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
