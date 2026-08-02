codefreeze.fi
=============

Welcome to CodeFreeze - a different kind of conference.

## Updating the site

The site is built with [Vike](https://vike.dev/) and
[Preact](https://preactjs.com/).

### Prerequisites

- Node.js 24 (see `engines` in `package.json`)

### Local development

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm start
```

### Production build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The static site is output to `dist/client/`.

### Status gallery data

Twitter status entries live in `_status/*.md`. At build time, these are compiled
into `public/status.json` for the photo gallery component.

### Deployment

The site deploys to GitHub Pages via GitHub Actions when changes are pushed to
`saga`. Ensure the repository's GitHub Pages source is set to **GitHub
Actions**.
