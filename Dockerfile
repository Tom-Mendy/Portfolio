# ---------- Build stage ----------
FROM docker.io/oven/bun:1.3.5-alpine AS build

WORKDIR /app

# Install all dependencies (including devDependencies needed for build)
COPY package.json bun.lock ./
RUN bun install --production

COPY svelte.config.js vite.config.ts tsconfig.json mdsvex.config.js ./
COPY static static
COPY src src
RUN bun run build
# Result with adapter-static: /app/build


# ---------- Runtime stage ----------
FROM docker.io/library/nginx:1.29.4-alpine-slim

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Set up PID and permissions for non-root
RUN touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/run/nginx.pid /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

# Copy our Nginx config
COPY --chown=appuser:appgroup nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files
COPY --from=build --chown=appuser:appgroup /app/build /usr/share/nginx/html

USER appuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
