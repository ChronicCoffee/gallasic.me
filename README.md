## Project type

This repository is a simple static site (HTML/CSS/JS) — not a Next.js app. There is no `package.json`, `next.config.js`, `pages/` or `app/` directory.

If you want to convert to Next.js later, I can scaffold that for you.

## Tailwind integration

Two options are provided to use Tailwind CSS:

1) Quick: Tailwind via CDN (no build step). Add the CDN script in your `index.html` head and use utility classes alongside existing CSS.

2) Full: Install Tailwind locally (recommended for production). Create `package.json`, install `tailwindcss`, add a `src/styles.css` with the Tailwind directives, and build a compiled CSS file to serve.

I added `src/styles.css` with the Tailwind directives and your current custom CSS moved below them. To enable the full-build option you'll need Node.js and then to run the Tailwind build; tell me if you'd like me to add the npm setup and build scripts.

## Running the Next.js site locally

I converted this repo into a Next.js project. To run locally, make sure you have Node.js installed, then:

1. Install dependencies:

	npm install

2. Run the dev server:

	npm run dev

This will start Next.js on http://localhost:3000 by default.
