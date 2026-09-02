# Andrew Stinson — Portfolio

A hand-coded portfolio site built with React and Vite. No page builder — every
component, layout, and interaction here is written from scratch.

**[Live demo](#)** _(add your deployed URL here once it's hosted — Vercel or
Netlify both deploy this for free in a couple of clicks)_

## What's in it

- **A live project scope estimator** in the hero — real state and derived
  calculations (`useState` + `useMemo`), not a static mockup. It runs a
  simplified version of the math used to scope real client work.
- **Expandable case study cards** for selected projects, each following an
  ask → approach → result structure.
- A small design system built around a technical-drafting visual language —
  Space Grotesk for display type, IBM Plex Mono for data/labels — expressed
  through CSS custom properties and CSS Modules (no CSS framework).

## Stack

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) for the build tooling
- CSS Modules for scoped component styles
- No UI framework, no component library — everything here is hand-built

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Header.jsx        top nav
    Hero.jsx           headline + live scope estimator
    Work.jsx            expandable case study cards
    Stack.jsx          tools/skills, shown as spec data
    Contact.jsx        contact CTA
    Footer.jsx          footer
  index.css            design tokens + global styles
  App.jsx              page assembly
  main.jsx             React entry point
```

## Why this exists

I run [ADeSignZ](https://adesignz-portfolio.design.webflow.com), a design and
development practice, mostly on Webflow for client work. This repo is the
other half — proof of hand-written frontend work, built to show the process
as much as the result.
