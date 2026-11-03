# Akademi Pengajian Melayu — Digital Experience 2027 · V2

A modern, responsive **unofficial UI/UX redesign concept** for Universiti Malaya's Akademi Pengajian Melayu (APM), made as a personal portfolio study by **Lembayu Studio**.

> **Disclaimer:** This is an independent, unofficial portfolio concept. It is **not** the official APM or Universiti Malaya website and is not affiliated with, approved by, or commissioned by Universiti Malaya.

## V2 visual direction

**Modern academic editorial.** An asymmetric light editorial hero, expressive Cormorant Garamond typography, navy/ivory/sand colour palette, tactile photography, a culture-inspired typographic interlude, redesigned programme cards and understated responsive microinteractions.

The hero emblem is an **APM portfolio mark**, not the official UM seal. No official APM/UM website functionality or backend is used.

## Project goals

- Modernise an informational academic homepage using an editorial visual language.
- Make undergraduate, postgraduate and research pathways easier to discover.
- Explore heritage-inspired typography, colour and visual storytelling.
- Demonstrate a responsive, accessible frontend without a backend or CMS.

## Tech stack

- HTML5 with semantic landmarks
- CSS3 with design tokens and responsive layouts
- Bootstrap 5.3 (grid utilities)
- Vanilla JavaScript (mobile navigation, placeholder link handling, scroll reveal)
- Google Fonts: DM Sans and Cormorant Garamond

No framework build process, server-side logic, database or UM API access is required.

## Run locally

Open `index.html` in your browser. An internet connection is needed for the external Bootstrap, Google Fonts and Unsplash assets.

For a local development server, run `python3 -m http.server 8000` and visit `http://localhost:8000`.

## Project structure

```
├── index.html   # Full concept homepage
├── styles.css   # V1 base layout and component styling
├── v2.css       # V2 editorial art direction and responsive refinements
├── script.js    # Accessible mobile menu, scroll feedback, reduced-motion reveals
└── README.md    # Scope and setup
```

## Included sections

Asymmetric editorial hero, academic quick access, academy introduction, cultural typography interlude, four undergraduate programme cards, postgraduate callout, research editorial feature, sample stories, final CTA and footer.

All demo CTA/navigation links intentionally point to `#` and their default action is disabled. This is a **front-end only** prototype.

## Design and content notes

Programme names were informed by the publicly accessible APM website. Editorial headlines, sample news stories and photographs are conceptual placeholders and should not be presented as official communications. Photographs are served externally from Unsplash; the UM-style seal is a typographic placeholder, not an official university logo.

## Accessibility and responsive approach

Semantic HTML, a skip link, visible focus treatments, explicit navigation toggle state, descriptive image text, and reduced-motion support are included. Responsive layout has CSS rules for desktop, tablet and mobile, but formal WCAG conformance, cross-browser QA and visual regression testing have **not yet been completed**.

## Deployment

Static hosting such as GitHub Pages is sufficient. Once enabled in GitHub Pages settings, publish the root of the `main` branch.

## Portfolio status

**Version 2 — visual refinement.** Responsive styles and inline structure were reviewed in source. Full live-browser screenshot QA, image-availability checks and formal accessibility conformance testing remain open. Not intended for production deployment or institutional use.
