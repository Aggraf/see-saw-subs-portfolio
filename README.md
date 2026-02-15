# See Saw Subs — Laura Seeger-Lanchon Portfolio

A bespoke portfolio website for **Laura Seeger-Lanchon**, bilingual audiovisual translation expert (FR/EN). Specializing in cinema subtitling, literary adaptation, and screenplay localization.

## Preview

The site features a dark cinematic aesthetic with smooth animations, a looping project carousel, and interactive scroll-based reveals.

## Tech Stack

| Technology | Version | Role |
|-----------|---------|------|
| React | 19.2.4 | UI framework |
| TypeScript | 5.8.2 | Type safety |
| Vite | 6.2.0 | Build tool & dev server |
| Tailwind CSS | CDN | Utility-first styling |
| Framer Motion | 12.34.0 | Animations & transitions |
| Lucide React | 0.564.0 | SVG icons |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Installation

```bash
git clone https://github.com/Aggraf/see-saw-subs-portfolio.git
cd see-saw-subs-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
├── index.html              # Entry point — fonts, CSS variables, favicon
├── App.tsx                 # Main layout — assembles all sections
├── constants.tsx           # Data: projects & testimonials
├── types.ts                # TypeScript interfaces
├── vite.config.ts          # Vite config (port 3000)
├── assets/
│   └── laura-portrait.png  # Edited portrait with branded background
└── components/
    ├── Hero.tsx            # Hero section — title, CTA, sunburst animation
    ├── Sunburst.tsx        # Rotating conic-gradient background
    ├── NorthernLights.tsx  # Canvas aurora borealis background
    ├── Navbar.tsx          # Fixed navigation — desktop + mobile menu
    ├── ImmersiveSection.tsx # Scroll-reveal wrapper (scale + borderRadius)
    ├── WorkGallery.tsx     # Looping carousel with left/right buttons
    ├── Testimonials.tsx    # Client testimonials on cream background
    ├── ContactCTA.tsx      # Contact call-to-action card
    └── Footer.tsx          # Footer — social links, expertise, contact
```

## Design

### Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Background | Charcoal | `#212121` |
| Primary / CTA | Coral Red | `#E35342` |
| Accent / Text | Warm Cream | `#F2E3CF` |

### Typography

- **Headings:** Young Serif
- **Display/Decorative:** Gochi Hand
- **Monospace/Labels:** Geist Mono
- **Body:** Averia Serif Libre

## License

All rights reserved. This project is the property of Laura Seeger-Lanchon / See Saw Subs.
