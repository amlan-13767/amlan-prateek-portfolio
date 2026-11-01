# Amlan Prateek Panda — Portfolio

A responsive personal portfolio built with React and Vite, ready to deploy on Vercel.

## Features

- Responsive, dark portfolio design
- About, Akamai work experience, projects, skills, extracurricular activities & leadership, recognition, and contact sections
- Links to GitHub, LinkedIn, email, and project repositories
- Download/view résumé link
- No environment variables or backend required

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Vercel

### Option A: Import from GitHub
1. Create a new GitHub repository and upload the contents of this folder.
2. Go to https://vercel.com/new and import that repository.
3. Vercel should detect Vite automatically.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy.

### Option B: Deploy using Vercel CLI
```bash
npm install
npm run build
npx vercel
```

Follow the CLI prompts.

## Before deploying — personal links to check

Open `src/data/content.js` and verify the profile links in the `profile` object. Project cards link only to directly verified project repositories.

## Add your résumé

The résumé is already included in `public/` as:

```text
resume.pdf
```

The “View résumé” button points to `/resume.pdf`.

## Customizing content

- Main content and profile links: `src/data/content.js`
- Design and responsive styles: `src/styles.css`
- Page title and metadata: `index.html`
