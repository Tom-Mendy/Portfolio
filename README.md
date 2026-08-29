# Tom Mendy portfolio

A bilingual, static Astro portfolio for DevOps and Platform Engineering roles.

## Development

The development server runs in Astro background mode:

```sh
bun run dev
bun run dev:status
bun run dev:logs
bun run dev:stop
```

## Validation

```sh
bun run check
bun run build
```

French pages use the unprefixed routes. English pages live under `/en/`. Shared copy is in `src/data/portfolio.ts`.

## Docker image

The Forgejo workflow at `.forgejo/workflows/publish-portfolio.yml` builds the
static site and publishes it to:

```text
forgejo.tom-mendy.com/tom-mendy/portfolio
```

Every successful run publishes an immutable commit tag:

```sh
docker pull forgejo.tom-mendy.com/tom-mendy/portfolio:sha-<commit>
```

Pushes to `main` also update `latest`. Use the commit tag in Kubernetes so a
deployment always points to one exact build. The container listens on port
`8080` and serves the generated Astro site with Nginx.

If the Forgejo registry is private, create an image pull secret in the target
namespace and reference it from the Deployment:

```sh
kubectl -n portfolio create secret docker-registry forgejo-registry \
  --docker-server=forgejo.tom-mendy.com \
  --docker-username=tom-mendy \
  --docker-password='<registry-token>'
```
