# DevSecOps Portfolio

This is a technical portfolio designed for DevSecOps engineers. It focuses on engineering decisions, security integration, and automated deployments rather than just visual design.

## 🚀 Quick Start

### Development
```sh
bun install
bun run dev
```

### Production Build
```sh
bun build
```

## 🏗️ Architecture

- **Frontend**: SvelteKit 5 / TypeScript
- **Styling**: Tailwind CSS 4 + Shadcn-svelte
- **Content Management**: MDSveX for engineering dossiers
- **Deployment**: Dockerized NGINX with strict security headers

## 🛡️ Security Features

- **Automated Scanning**: Ready for Trivy/SonarQube integration.
- **Strict Headers**: CSP, HSTS, and XFO configured in `nginx.conf`.
- **Non-root Container**: Running as `appuser` in the Dockerfile.
- **Minimal Surface**: Based on Alpine/Alpine-slim images.

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
