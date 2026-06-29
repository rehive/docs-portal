# Rehive Docs

Documentation portal for the Rehive platform — **Next.js + [Nextra](https://nextra.site)** (MDX).

> Rebuilt from the previous Hugo site on the `prototype/decoupling` branch to map
> the new product structure: **Identity · Accounts · Compliance**.

## Develop

```sh
npm install
npm run dev      # http://localhost:3000
```

## Structure

Content is MDX under `pages/`. The nav is defined by the file tree plus
`_meta.json` files (that's the product map):

```
pages/
  index.mdx              Introduction
  get-started/           The model · Quickstart · Authentication
  identity/              Onboarding · Customer status · API
  accounts/              Modes · Funding · Transfers · Assets & custody · Add-ons · API
  compliance/            Policy Center · Limits & controls · Monitoring · Evidence · API
  coverage.mdx           Rails & coverage
  advanced.mdx           Gated platform API (escape hatch)
```

Brand/theme: `theme.config.jsx` (blue, `primaryHue: 224`).
