# Articles Section — Implementation Plan

> **Branch:** `feature/articles-section`
> **Goal:** Add a full articles/blog section to See Saw Subs portfolio
> **Language:** English
> **Architecture:** Separate `/articles` page with React Router + individual `/articles/:slug` pages
> **Design:** Colorful, dynamic, animated — matching site identity but bringing new energy

---

## Task Breakdown

### Phase 0: Planning & Research (DONE)

| Task | Status | Assigned To |
|------|--------|-------------|
| Read CLAUDE.md + project context | DONE | Claude Opus 4.6 |
| Read Audiovisual Translation Industry Report | DONE | Claude Opus 4.6 |
| Read translation-deep-research-report.md | DONE | Claude Opus 4.6 |
| Read Laura's CV (PDF) | DONE | Claude Opus 4.6 |
| Research Laura online (LinkedIn, web) | DONE (limited results) | Claude Opus 4.6 |
| Read current website source code | DONE | Claude Opus 4.6 |
| Create feature branch `feature/articles-section` | DONE | Claude Opus 4.6 |
| Create `laura-lanchon-persona.md` | DONE | Claude Opus 4.6 |
| Create `articles-proposals.md` (10 proposals, 6 selected) | DONE | Claude Opus 4.6 |
| Create this plan (`articles-plan.md`) | DONE | Claude Opus 4.6 |

---

### Phase 1: Infrastructure — React Router Setup

| # | Task | Description | Assigned To |
|---|------|-------------|-------------|
| 1.1 | Install react-router-dom | `npm install react-router-dom` in C:\temp\mom-website | Claude Opus 4.6 |
| 1.2 | Refactor `index.tsx` | Wrap `<App />` with `<BrowserRouter>` | Claude Opus 4.6 |
| 1.3 | Create `HomePage.tsx` | Extract current App.tsx content into a Home page component | Claude Opus 4.6 |
| 1.4 | Refactor `App.tsx` | Convert to layout shell with `<Routes>` — Home at `/`, Articles at `/articles`, Article detail at `/articles/:slug` | Claude Opus 4.6 |
| 1.5 | Update `Navbar.tsx` | Add "Articles" nav link using React Router `Link`. Keep anchor links for home sections, use Router links for pages. | Claude Opus 4.6 |
| 1.6 | Update `vite.config.ts` | Add SPA fallback for client-side routing (if needed for Vercel) | Claude Opus 4.6 |

---

### Phase 2: Article Data & Types

| # | Task | Description | Assigned To |
|---|------|-------------|-------------|
| 2.1 | Extend `types.ts` | Add `Article` interface (slug, title, subtitle, category, date, readTime, excerpt, content, coverGradient, icon) | Claude Opus 4.6 |
| 2.2 | Create article content data | Add `ARTICLES[]` array in `constants.tsx` with all 6 articles — full text content, metadata, styling hints | Claude Opus 4.6 |

---

### Phase 3: Article Pages — Design & Build

| # | Task | Description | Assigned To |
|---|------|-------------|-------------|
| 3.1 | Create `ArticlesPage.tsx` | Articles listing page — animated card grid, category filters, staggered entrance animations. Design: colorful gradient cards, hover effects, coral/cream/charcoal palette with pops of new accent colors. Use `skillsui-ux-pro-max` + `frontend-design` skills. | Claude Opus 4.6 |
| 3.2 | Create `ArticleDetail.tsx` | Individual article reading page — hero with gradient, animated content reveal, back navigation, reading progress bar, share-friendly layout. Respect `.font-heading-tall`, `.font-mono`, body font conventions. | Claude Opus 4.6 |
| 3.3 | Create `ArticleCard.tsx` | Reusable card component for the articles grid — gradient background, category tag, hover animation (scale + color shift), date/readTime metadata. | Claude Opus 4.6 |
| 3.4 | Add scroll-to-top on navigation | Ensure page scrolls to top when navigating between routes | Claude Opus 4.6 |

---

### Phase 4: Article Content Writing

| # | Task | Article | Assigned To |
|---|------|---------|-------------|
| 4.1 | Write Article 1 | "From New York to Île de Ré: How I Accidentally Became a French Subtitler" | Claude Opus 4.6 |
| 4.2 | Write Article 2 | "The 40-Character Cage: What It Really Takes to Subtitle a Film" | Claude Opus 4.6 |
| 4.3 | Write Article 3 | "Lost in Translation? More Like Found: Why Subtitles Are Cinema's Secret Weapon" | Claude Opus 4.6 |
| 4.4 | Write Article 4 | "What AI Gets Wrong About Translation (And Why Your Favorite Show Might Suffer)" | Claude Opus 4.6 |
| 4.5 | Write Article 5 | "Cannes at 3 AM: What Happens When a Film Premiere Depends on Your Subtitles" | Claude Opus 4.6 |
| 4.6 | Write Article 6 | "Between Two Tongues: What Living Bilingually Taught Me About Translation" | Claude Opus 4.6 |

---

### Phase 5: Integration & QA

| # | Task | Description | Assigned To |
|---|------|-------------|-------------|
| 5.1 | Test all routes | Verify `/`, `/articles`, `/articles/:slug` all work | Claude Opus 4.6 |
| 5.2 | Test responsive (mobile) | Verify articles page + detail look good on 375px | Claude Opus 4.6 |
| 5.3 | Test animations | Verify no animation is broken on existing pages | Claude Opus 4.6 |
| 5.4 | Verify Navbar works on all pages | Anchor links from articles page should navigate to home sections | Claude Opus 4.6 |
| 5.5 | Commit to feature branch | Stage all changes, commit with clear message | Claude Opus 4.6 |

---

### Phase 6: Review & Merge (USER)

| # | Task | Description | Assigned To |
|---|------|-------------|-------------|
| 6.1 | User review | User verifies branch, tests locally, approves | User (Alex) |
| 6.2 | Merge to main | After approval, merge `feature/articles-section` → `main` | Claude Opus 4.6 (after approval) |
| 6.3 | Push to GitHub | `git push` triggers Vercel auto-deploy | Claude Opus 4.6 (after approval) |

---

## Design Guidelines for Articles Section

### Matching Site Identity
- **Palette:** Charcoal `#212121`, Coral Red `#E35342`, Warm Cream `#F2E3CF`, Near Black `#1a1a1a`
- **Fonts:** Young Serif (headings), Geist Mono (labels/tags), Averia Serif Libre (body), Gochi Hand (decorative)
- **Animation library:** Framer Motion (consistent with existing site)

### New Energy for Articles
- **Gradient cards** — each article gets a unique gradient (coral→orange, cream→gold, charcoal→navy, etc.)
- **Staggered animations** — cards appear with cascading delays
- **Category pills** — colored tags (Personal = warm, Craft = cool, Industry = neutral)
- **Reading experience** — generous whitespace, drop caps, pull quotes with coral accent
- **Back navigation** — smooth transition back to articles list

### Animations to Add
- Card hover: subtle lift + shadow expansion + gradient shift
- Page entrance: content slides up with staggered timing
- Article detail: hero gradient animates, content fades in progressively
- Category filter: smooth crossfade between filtered sets
- Reading progress: thin coral bar at top (reuse existing scroll progress pattern)

---

## File Changes Summary

### New Files
```
components/
├── ArticlesPage.tsx      # Articles listing page
├── ArticleDetail.tsx     # Individual article page
├── ArticleCard.tsx       # Reusable article card
└── ScrollToTop.tsx       # Route change scroll handler (if needed)

docs/
├── laura-lanchon-persona.md  # Author voice guide
├── articles-proposals.md     # 10 proposals + selection
└── articles-plan.md          # This file
```

### Modified Files
```
index.tsx          # Add BrowserRouter
App.tsx            # Add Routes, convert to layout
types.ts           # Add Article interface
constants.tsx      # Add ARTICLES[] data
Navbar.tsx         # Add Articles link
package.json       # Add react-router-dom
```

### Untouched Files (CRITICAL)
```
components/Hero.tsx              # NO CHANGES
components/Sunburst.tsx          # NO CHANGES
components/NorthernLights.tsx    # NO CHANGES
components/ImmersiveSection.tsx  # NO CHANGES
components/WorkGallery.tsx       # NO CHANGES
components/Testimonials.tsx      # NO CHANGES
components/ContactCTA.tsx        # NO CHANGES
components/Footer.tsx            # NO CHANGES
index.html                       # NO CHANGES
```

---

*Plan created: 2026-02-16*
*All tasks assigned to: Claude Opus 4.6*
