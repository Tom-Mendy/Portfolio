# ---------- Build stage ----------
FROM docker.io/oven/bun:1.3.5-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN bun install

COPY . .
RUN bun run build
# Result: /app/dist


# ---------- Runtime stage ----------
FROM docker.io/library/nginx:1.29.4-alpine-slim

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our Nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
