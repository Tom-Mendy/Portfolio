# Tom Mendy portfolio

A bilingual, static Astro portfolio for DevOps and Platform Engineering roles.

Install dependencies with Bun. The development server runs in Astro background mode:

```sh
bun install --frozen-lockfile
bun run dev
bun run dev:status
bun run dev:logs
bun run dev:stop
```

Validate types and build the static site:

```sh
bun run check
bun run build
```

To inspect build performance, run `bun run build:timings`.

French pages live under `/fr/` and English pages under `/en/`. Shared copy is
in `src/data/portfolio.ts`. Locally, `/` displays a language chooser. In the
Nginx container, `/` redirects to `/en/` when the `Accept-Language` header starts
with English, and to `/fr/` otherwise. The legacy `/projects/homelab` route
redirects to `/fr/projects/homelab/`.

The Forgejo workflow at `.forgejo/workflows/publish-portfolio.yml` builds the
static site and publishes it to:

```text
harbor.home.tom-mendy.com/portfolio/portfolio
```

Every successful run publishes an immutable commit tag:

```sh
docker pull harbor.home.tom-mendy.com/portfolio/portfolio:sha-<commit>
```

The workflow runs on pushes to `main` and manual dispatch. Every successful run
also updates `latest`. Use the commit tag in Kubernetes so a
deployment always points to one exact build. The container listens on port
`8080` and serves the generated Astro site with Nginx.

If the Harbor project is private, create an image pull secret in the target
namespace and reference it from the Deployment:

```sh
kubectl -n portfolio create secret docker-registry harbor-registry \
  --docker-server=harbor.home.tom-mendy.com \
  --docker-username='<harbor-username>' \
  --docker-password='<harbor-token>'
```
