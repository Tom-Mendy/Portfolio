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
