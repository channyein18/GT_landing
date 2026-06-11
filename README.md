# GreatTime Landing Page

Custom React and Vite landing page for GreatTime.

## Local Development

```bash
cd site
npm ci
npm run dev
```

Open `http://127.0.0.1:5173`.

## Production Build

```bash
cd site
npm ci
npm run build
```

The deployable static site is generated in `site/dist`.

## Cloudflare Pages

Create a Pages project from this GitHub repository with:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | `site` |
| Build command | `npm run build` |
| Build output directory | `dist` |

No environment variables are currently required.

Cloudflare will initially publish the site at a `*.pages.dev` address. Connecting
`greattime.app` is a separate step and is not required for the first deployment.

## Current Limitation

The demo request form currently shows a confirmation in the browser but does not
send submissions to a server or email address.
