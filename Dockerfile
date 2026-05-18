# syntax=docker/dockerfile:1.6

# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias (aprovecha cache de Docker)
COPY package.json package-lock.json* ./
RUN npm ci

# Copiar el resto del código y construir
COPY . .
RUN npm run build

# ---------- Stage 2: Serve ----------
FROM nginx:1.27-alpine AS runner

# Config personalizada para SPA (rutas client-side)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar build estático desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
