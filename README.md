# Rhythm Chavda — Portfolio

A responsive, single-page portfolio for Rhythm Chavda, a Computer Engineering student and developer.

- **Live site:** [nyx73.github.io](https://nyx73.github.io/)
- **GitHub:** [github.com/nyx73](https://github.com/nyx73)
- **Contact:** [rhythmchavda147@gmail.com](mailto:rhythmchavda147@gmail.com)

## Features

- About, selected projects, technology toolkit, education, and contact sections
- Responsive desktop and mobile navigation with active-section indication
- Interactive hero illustration with section links to the portfolio's four characters
- Scroll-triggered section and hero animations, plus a reading progress indicator
- Reduced-motion support, keyboard focus styles, and semantic navigation
- Project and social links, plus a validated contact form that opens an email draft
- Light theme and resume-free navigation

## Built with

- React 18
- Vite 6
- CSS, with Tailwind CSS available in the project configuration
- GitHub Actions and GitHub Pages for deployment

## Run locally

Install [Node.js](https://nodejs.org/) (which includes npm), then run:

~~~sh
npm install
npm run dev
~~~

Vite prints a local address in the terminal (usually http://localhost:5173). Open it in a browser to preview the site.

To create and preview a production build:

~~~sh
npm run build
npm run preview
~~~

## Project structure

~~~text
src/
├── App.jsx                  # Portfolio sections and interactions
├── index.css                # Layout, responsive styles, and animations
├── main.jsx                 # React entry point
├── components/
│   └── ScrollProgress.jsx   # Page reading progress indicator
└── data/
    ├── education.js
    └── projects.js
public/
└── rhythm-chavda-resume.txt
.github/workflows/
└── deploy.yml               # GitHub Pages deployment workflow
~~~

## Deployment

The GitHub Actions workflow builds and deploys the site to GitHub Pages when changes are pushed to the main branch. It can also be started manually from the repository's Actions tab.
