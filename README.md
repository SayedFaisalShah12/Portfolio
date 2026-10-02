# Sayed Faisal Shah — Personal Portfolio

> **Agentic AI & Machine Learning Engineer | Flutter Specialist**
>
> Live Site: [https://sayedfaisalshah12.github.io/Portfolio/](https://sayedfaisalshah12.github.io/Portfolio/)

---

## 🌟 Overview

This is the production-ready personal portfolio website of **Sayed Faisal Shah**, engineered with React, TypeScript, Vite, and Tailwind CSS. The website highlights practical experience across **Agentic AI, Generative AI, Machine Learning, Deep Learning, RAG systems,** and **Flutter application development**.

---

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript (Strict Mode)
- **Build Tool**: Vite (`base: "/Portfolio/"`)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React (`lucide-react`)
- **Deployment Target**: GitHub Pages (via GitHub Actions)

---

## 🚀 Key Features

1. **AI Neural Background System**: Interactive canvas-based node background.
2. **Agentic AI Architecture Visualization**: Visualizing LLM → Reasoning → Tools → Memory → Retrieval → Actions → Results.
3. **Structured Project Showcase**: 8 detailed projects with featured flagships (`DevOrionAI`, `ProposalPilot`, `PredictaForge`, `FlightVision AI`).
4. **Categorized Skills Matrix**: 5 skill domain categories without arbitrary percentage charts.
5. **Evolutionary Professional Journey**: Honest timeline showing development stages.
6. **Flutter & Mobile AI Integration**: Highlighting cross-platform UI and on-device ML synergy.
7. **Single-Page Smooth Scrolling**: Reliable GitHub Pages navigation immune to 404 routing errors.
8. **URL Safety Layer**: Helper functions ensuring zero `TypeError: Invalid URL` runtime crashes.

---

## 📁 Project Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Single pnpm version GitHub Pages workflow
├── public/
│   ├── favicon.svg             # SFS Monogram Favicon
│   └── resume.pdf              # PDF Resume asset
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── NeuralBackground.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SkillCard.tsx
│   │   ├── AgenticFlowDiagram.tsx
│   │   └── TimelineItem.tsx
│   ├── sections/               # Page section modules
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── AgenticSection.tsx
│   │   ├── WorkflowSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── JourneySection.tsx
│   │   ├── FlutterSection.tsx
│   │   ├── LearningSection.tsx
│   │   └── ContactSection.tsx
│   ├── data/                   # Structured content data
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── timeline.ts
│   │   └── workflow.ts
│   ├── config/
│   │   └── site.ts             # Centralized site configuration & links
│   ├── types/                  # Strict TypeScript definitions
│   ├── App.tsx                 # Root application wrapper
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles & Tailwind directives
├── index.html                  # Main HTML template with SEO tags
├── package.json                # Dependencies & single pnpm definition
├── vite.config.ts              # Base path configured for /Portfolio/
├── tsconfig.json               # TypeScript compiler config
└── README.md
```

---

## 💻 Local Development

### Prerequisites

- Node.js `>= 20`
- `pnpm` (or `npx pnpm` / `npm`)

### Installation & Execution

```bash
# 1. Install dependencies
pnpm install

# 2. Start local development server
pnpm dev

# 3. Type-check TypeScript codebase
pnpm exec tsc --noEmit

# 4. Build production bundle for GitHub Pages
pnpm exec vite build
```

---

## ⚙️ How to Customize Your Personal Details

All personal configurations and links are centralized in [`src/config/site.ts`](file:///e:/1-%20Sayed%20Faisal/Portfolio/Portfolio/src/config/site.ts):

### 1. Update Contact Information

Open `src/config/site.ts` and replace the placeholder strings:

```typescript
export const SITE_CONFIG = {
  social: {
    github: "https://github.com/SayedFaisalShah12",
    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME", // Replace placeholder
    email: "your.email@domain.com", // Replace placeholder
    resume: `${import.meta.env.BASE_URL || "/Portfolio/"}resume.pdf`,
  }
};
```

### 2. Update Resume PDF

Replace the file at [`public/resume.pdf`](file:///e:/1-%20Sayed%20Faisal/Portfolio/Portfolio/public/resume.pdf) with your actual PDF resume.

### 3. Edit Projects or Add New Ones

Edit [`src/data/projects.ts`](file:///e:/1-%20Sayed%20Faisal/Portfolio/Portfolio/src/data/projects.ts) to update project details, GitHub repositories, or live demo links.

---

## 🚢 Deploying to GitHub Pages

The repository contains a GitHub Actions workflow at `.github/workflows/deploy.yml`.

### One-Time GitHub Settings:

1. Go to your GitHub repository: `https://github.com/SayedFaisalShah12/Portfolio`
2. Click **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### Git Push Commands to Deploy:

```bash
git init
git add .
git commit -m "Build brand-new professional portfolio"
git branch -M main
git remote add origin https://github.com/SayedFaisalShah12/Portfolio.git
git push -u origin main
```

Upon pushing to the `main` branch, the GitHub Action will automatically compile Vite and deploy to `https://sayedfaisalshah12.github.io/Portfolio/`.
