# Dev Raj Portfolio

A personal portfolio website built with React and Vite, featuring animated section reveals, responsive navigation, project highlights, live GitHub analytics, and contact links.

## Tech Used

### Core
- React 19
- React DOM 19
- Vite 6
- JavaScript (ES modules)
- HTML5
- CSS3

### Animation and UI Behavior
- Framer Motion (scroll-triggered and section animations)

### Data and Integrations
- GitHub REST API (`https://api.github.com`) for profile and repository stats
- GitHub Search API for merged PR and commit totals
- GitHub Contributions API (`https://github-contributions-api.jogruber.de`) for contribution heatmap data
- Spotify Embed (iframe component available in codebase)

### Reliability and Tooling
- Error Boundary pattern for runtime UI fallback
- ESLint 9 with React Hooks and React Refresh plugins
- @vitejs/plugin-react

### Installed but Not Currently Used in App Code
- react-router-dom
- gsap
- @fontsource/outfit
- @fontsource/roboto

## Design Overview

The portfolio uses a warm, earthy visual language with a handcrafted card aesthetic.

- Background and atmosphere:
	Repeating textured background image with a fixed attachment for subtle depth.
- Color system:
	Browns, tan, cream, and muted gold tones (`#5a4e45`, `#7c6c5b`, `#d2b991`, `#eee1c9`) to keep the interface cohesive.
- Surface styling:
	Cards and pills use ridge borders with dashed inner outlines to create a framed-paper look.
- Navigation:
	Fixed glassmorphism-style navbar with blur, gradient fill, and a mobile hamburger toggle.
- Motion language:
	Consistent reveal variants (fade up/down/left/right, zoom, flip) triggered on in-view entry.
- Interaction cues:
	Hover lift, scaling, and color transitions on project cards, skill pills, stat tiles, and links.
- Layout and responsiveness:
	Desktop-first structure with breakpoints for `900px`, `768px`, `600px`, and `480px` to keep sections readable on smaller screens.
- Personality details:
	Custom cursor, large handwritten hero typography, emoji labels in headings, and profile image emphasis.

## Fonts Used

### Active Fonts in Current UI
- Josefin Sans
	- Source: Google Fonts import in global styles
	- Usage: Primary body and general text font
- Caveat
	- Source: Google Fonts import in global styles
	- Usage: Hero/intro heading text in the header section

### Font Packages Installed (Currently Unused)
- @fontsource/outfit
- @fontsource/roboto

## Project Structure (Key Files)

- `src/App.jsx`: Section composition
- `src/components/Header.jsx`: Hero + responsive navigation
- `src/components/Projects.jsx`: Project cards
- `src/components/Skills.jsx`: Skills list + GitHub stats inclusion
- `src/components/GitHubStats.jsx`: Live GitHub stats and contribution chart
- `src/components/Contact.jsx`: Contact links
- `src/components/Footer.jsx`: Footer
- `src/motion/animations.js`: Shared Framer Motion variants
- `src/css/*.css`: Section and global styling

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
