# Rhythm Chavda — Personal Portfolio Website

Production-quality developer portfolio website for **Rhythm Chavda**, Computer Engineering student, deployed as the root GitHub Pages website:

🔗 **Live Website**: [https://nyx73.github.io/](https://nyx73.github.io/)  
🔗 **GitHub Profile**: [https://github.com/nyx73](https://github.com/nyx73)

---

## 🛠️ Built With

- **Framework**: [React 18](https://react.dev/)
- **Tooling & Bundler**: [Vite](https://vitejs.dev/) (`base: "/"`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with dark/light mode toggle
- **Deployment**: [GitHub Actions](https://github.com/features/actions) to GitHub Pages

---

## 📂 Architecture

```text
src/
├── components/
│   ├── About.jsx             # Factual bio & interactive visual profile card
│   ├── Achievements.jsx      # DBMS Decathon (2nd), Techtraid (3rd), Hackathons
│   ├── Certificates.jsx      # Verified certifications (HackerRank, freeCodeCamp, etc.)
│   ├── Contact.jsx           # Direct links (GitHub, LinkedIn, LeetCode, Unstop) & mail draft form
│   ├── Education.jsx         # B.Tech Computer Engineering timeline
│   ├── FocusCards.jsx        # Web Dev, Android Dev, AI Systems
│   ├── Footer.jsx            # Copyright, social handles, back-to-top button
│   ├── GithubSection.jsx     # Live GitHub public repository integration + fallback
│   ├── Hero.jsx              # Confident intro + interactive floating code/terminal window
│   ├── Icons.jsx             # Clean, accessible inline SVG icons
│   ├── Journey.jsx           # Factual build journey milestones
│   ├── Navbar.jsx            # Sticky blurred navbar with active scroll spy & mobile drawer
│   ├── ProblemSolving.jsx    # LeetCode practice focus & DSA topics
│   ├── ProjectCard.jsx       # Responsive card with category tags & preview
│   ├── ProjectModal.jsx      # Deep-dive modal with problem, solution, architecture, learnings
│   ├── ProjectPreviews.jsx   # Interactive CSS/SVG simulation previews (Traffic-OPS, Financial Crime, etc.)
│   ├── Projects.jsx          # Filterable project catalog (Web, AI, Full Stack)
│   ├── ResumeModal.jsx       # Verified candidate resume summary & print action
│   ├── ScrollProgress.jsx    # Top scroll progress indicator bar
│   ├── ThemeToggle.jsx       # Dark / Light theme switch
│   └── Toast.jsx             # Micro-interaction notifications
├── data/
│   ├── achievements.js
│   ├── certificates.js
│   ├── education.js
│   ├── journey.js
│   ├── projects.js
│   └── skills.js
├── hooks/
│   └── useTheme.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local development server**:
   ```bash
   npm run dev
   ```

3. **Build production bundle**:
   ```bash
   npm run build
   ```

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 📄 License

MIT © 2026 Rhythm Chavda
