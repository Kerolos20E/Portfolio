# Kerolos Emad — Portfolio

A single-page developer portfolio built with a code-editor inspired design:
a tab bar of "open files" at the top, and every section styled like a file
in an IDE, complete with a line-number gutter.

**Live demo:** _add your deployed link here_

## Tech Stack

- **React** — component structure and hooks
- **Vite** — dev server and build tool
- **Tailwind CSS** — styling
- **lucide-react** — icons
- Custom hooks (`useTypewriter`, `useReveal`) — typing effect and scroll-reveal
  animations, no external animation library

## Project Structure

```
src/
├── Portfolio.jsx          # composes all sections
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx       # accepts a `projects` prop
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Gutter.jsx          # shared line-number gutter
│   └── SectionLabel.jsx    # shared <Tag/> section heading
└── hooks/
    ├── useTypewriter.js
    └── useReveal.js
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
