# Awais Ali | Full Stack Software Engineer

Personal portfolio featuring my experience at Exeonic, client deliveries, web and mobile projects, technical skills, and education. Based in Lahore, Pakistan.

[GitHub](https://github.com/awais-sufi) | [LinkedIn](https://linkedin.com/in/awaisali-exe1) | [Email](mailto:awais6javaid@gmail.com)

## Features

- Responsive dark interface with glass panels, animated headings, and a particle background.
- About, experience, architecture, projects, skills, education, and contact sections.
- Client and personal project filters with detailed project modals.
- Resume preview and PDF download.
- SEO metadata, social sharing card, AA favicons, sitemap, and robots.txt.
- Contact form with a direct-email fallback when delivery is not configured.
- Desktop and mobile browser regression tests for development and production.

## Tech stack

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide icons, and Playwright. Optional integrations: Web3Forms for contact delivery and Gemini for the chat API.

## Getting started

Requires Node.js 20.9 or newer and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. No environment file is required for the basic portfolio.

On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

## Production

```sh
npm run build
npm start
```

Stop any development server already using port 3000 before starting production. Run a fresh build after changing content or build-time environment variables.

## Optional environment configuration

Copy `.env.example` to `.env.local` and fill only the values you need. In PowerShell:

```powershell
Copy-Item .env.example .env.local
```

| Variable | Purpose | Default behavior |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical, Open Graph, sitemap, and robots URL | Uses the portfolio URL listed in the resume |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Contact delivery to your Web3Forms account | Displays an email fallback when empty |
| `GEMINI_API_KEY` | Server-side Gemini credentials | Uses local documented portfolio answers |
| `GEMINI_MODEL` | Model identifier for optional Gemini responses | External model calls require both Gemini variables |

The assistant UI is currently disabled. `/api/chat` still supports documented local answers without credentials. Never commit `.env.local` or secret API keys. `NEXT_PUBLIC_*` values are visible to the browser by design.

## Checks and browser tests

```sh
npm run lint
npm run typecheck
npm run test:e2e
npm run test:dev
```

Google Chrome must be installed for browser tests.

- `test:e2e` creates a fresh production build, starts a test server on port 3200, and runs desktop and mobile checks.
- `test:dev` runs the same checks against a dedicated development server on port 3201.
- Test servers stop when their runs finish. Console errors, recoverable React hydration errors, runtime exceptions, and failed Next.js assets fail the tests.
- Coverage includes repeated reloads with a warm browser cache, architecture tabs, project filters and modals, navigation, resume preview, contact behavior, static assets, SEO routes, and valid/invalid chat requests.
- Contact submissions are intercepted; tests never send real email. Real contact delivery requires your Web3Forms key and a separate manual check.

View the latest report with:

```sh
npx playwright show-report
```

HTML reports are stored in ignored `playwright-report/`; failure screenshots and traces are in ignored `test-results/`.

Latest verification on October 22, 2026: lint, type-check, and production build passed; development browser tests **10/10 passed**; production browser tests **10/10 passed**. Neither the reported hydration mismatch nor the missing-module error appeared in those runs. See [the content and verification audit](docs/CONTENT_AUDIT.md) for details.

## Project structure

```text
src/
  app/                   Home page, layout, metadata routes, chat API
  components/            Portfolio sections, animations, and modals
  data/portfolioData.ts  Profile, experience, projects, skills, education
  data/siteConfig.ts     Deployment URL configuration
  hooks/useHydrated.ts   Hydration readiness for interactive controls
public/                  Downloadable resume, icons, social sharing image
tests/browser/           Browser regression tests
docs/CONTENT_AUDIT.md     Content sources and verification record
```

## Maintaining content

Edit `src/data/portfolioData.ts` to update your profile and portfolio content. The resume at the repository root is the primary source; public GitHub repositories supplement personal projects. Task Management and React Native Concepts are labeled as learning work.

The download button and resume viewer use `public/Awais_Ali_Software_Engineer_CV.pdf`. Update that public copy whenever the source resume changes. Only the supplied PDF is offered; no DOCX download is configured.

Next.js manages chunk caching. Unversioned public images revalidate so updated identity assets can be fetched. Project filters and contact inputs wait until their components are hydrated before accepting interaction.

The design uses a fixed dark theme and has no light-mode toggle.

## Remaining content and setup

- Confirm `NEXT_PUBLIC_SITE_URL` for the final deployment. Source differences between the resume and GitHub are recorded in the audit.
- Configure your own Web3Forms access key to enable real contact delivery.
- Add client repository URLs only if they may be shared. Add Task Management and React Native demo links when available.
- Optional portrait: `public/images/awais-ali.jpg`. The current typographic hero has no photo slot.
- Optional project screenshots: `public/images/projects/zaz-mart.webp`, `public/images/projects/asim-textile.webp`, `public/images/projects/authentication.webp`, `public/images/projects/native-concepts.webp`, and `public/images/projects/task-management.webp`.

Project cards currently use gradient/title placeholders. Adding image files alone does not display them; image slots must also be wired into the cards.
