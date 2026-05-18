# syntax=docker/dockerfile:1.6

# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias (aprovecha cache de Docker)
COPY package.json package-lock.json* ./
RUN npm ci

# Variables Vite (se embeben en el bundle en build-time)
ARG VITE_API_BASE_URL
ARG VITE_DASHBOARD_URL
ARG VITE_POSTHOG_KEY
ARG VITE_POSTHOG_HOST
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL \
    VITE_DASHBOARD_URL=$VITE_DASHBOARD_URL \
    VITE_POSTHOG_KEY=$VITE_POSTHOG_KEY \
    VITE_POSTHOG_HOST=$VITE_POSTHOG_HOST

# Copiar el resto del código y construir
COPY . .
RUN npm run build

# ---------- Stage 2: Serve ----------
FROM nginx:1.27-alpine AS runner

# Plantilla nginx con ${PORT} (envsubst la procesa al arrancar)
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Copiar build estático desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Cloud Run inyecta PORT=8080 por defecto; localmente usamos 8080 también
ENV PORT=8080
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:${PORT}/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
