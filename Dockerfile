# Build the static Astro site with the same Bun version used locally.
FROM docker.io/oven/bun:1.4-alpine AS build

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY astro.config.mjs tsconfig.json ./
COPY public public
COPY src src

RUN bun run check && bun run build

# Serve the generated site without a root process.
FROM docker.io/library/nginx:1.29.4-alpine-slim AS runtime

RUN mkdir -p /var/cache/nginx /var/log/nginx /etc/nginx/conf.d /tmp/client_temp \
    && chown -R nginx:nginx /var/cache/nginx /var/log/nginx /etc/nginx /tmp/client_temp

RUN rm -f /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html

USER nginx

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --output-document=/dev/null http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
