# Stavros Orfanoudakis — Design System

A personal-brand design system for **Stavros Orfanoudakis**, PhD Researcher at TU Delft's Intelligent Electrical Power Grids group, positioning for an assistant-professor track. This system elevates his existing personal academic website into a more intentional brand: scholarly, restrained, and quietly confident, with an identity rooted in his domain (energy transition, reinforcement learning, power systems).

> **What this is not:** a pixel-copy of the current site. The existing site (Segoe UI, muted beige/gray, fa-icons) is utilitarian and conference-submission-era. This system keeps its _soul_ — clean, text-forward, timeline-based news feed, publication list as first-class content — but replaces the visual language with something closer to what you'd see on the faculty pages of well-designed European technical universities (TU Delft, ETH Zurich, EPFL).

---

## Sources

- **Codebase:** [StavrosOrf/StavrosOrf.github.io](https://github.com/StavrosOrf/StavrosOrf.github.io) — static site, `main` branch. Imported `style.css`, `index.html`, `home.html`, `projects.html`, `publications.html`, `script.js`, and the `figures/` folder (logos, profile, project thumbnails).
- **Brand cues extracted:**
  - Profile photograph → warm neutral anchor
  - `letter-s.png` favicon → isometric geometric "S", repurposed as monogram
  - DRIVE2X and EV2Gym project logos → **green is the accent color of the research domain**
  - Footer icon set → Google Scholar, ORCID, LinkedIn, GitHub (Font Awesome)

---

## Subject in one paragraph

Stavros is a Greek (born in Crete) PhD Researcher, now at **TU Delft, IEPG group**, building scalable ML / reinforcement-learning algorithms for city-scale EV charging. Notable: winner of the international PowerTAC 2020 competition as a student. Core work lives in the **DRIVE2X** EU project and the **EV2Gym** V2G simulator. His public-facing site needs to do three jobs at once: (1) make him easy to reach and cite, (2) signal research trajectory and taste, (3) look like the homepage of someone who is _already_ a professor. This system targets that third job.

---

## Index / manifest

Root:
- **`README.md`** — this file
- **`SKILL.md`** — portable Agent Skill for producing Stavros-branded artifacts
- **`colors_and_type.css`** — all design tokens (colors, type, spacing, radii, shadows, motion)

Folders:
- **`assets/`** — logos, icons, project thumbnails, profile photograph
- **`preview/`** — design-system preview cards (registered in the Design System tab)
- **`ui_kits/academic-site/`** — hi-fi React recreation of the personal academic website, elevated to the new visual system

---

## CONTENT FUNDAMENTALS

### Voice, person, tone

- **First person, unpretentious.** "I received my Diploma and M.Sc. degrees…", "I have been a Ph.D. Researcher at…". Never "we" (not a team site) and never third-person on the about page.
- **Past-tense CV with present-tense focus.** Education and awards are factual and tidy; current work is described with intent ("My research focuses on…").
- **Academic-formal, not stiff.** Full sentences, no ad-copy punchiness, no "we believe" mission-statement language. Closer to a European CV than an American startup bio.
- **Accessible but not dumbed-down.** Papers are named by their real titles. Use plain-language one-liners only in the **Projects** section, which needs to read to industry and public funders too ("A flexible simulation environment for EV smart charging research").

### Casing, punctuation

- **Sentence case** for H2/H3 ("Research interests", "Selected publications"), **Title Case** for proper nouns only (project names, institution names).
- **Section headings are nouns,** not gerunds or calls-to-action. "News", "Projects", "Selected Publications" — not "What I'm working on".
- **ALL CAPS / eyebrows** reserved for section metadata (e.g., "2025", "PEER-REVIEWED", year labels).
- **Periods at end of every timeline/news item.** Titles of papers get no trailing period inside quotes.
- **Oxford comma on.** Venues spelled out: _IEEE Transactions on Intelligent Transportation Systems_, not _IEEE TITS_.

### Typography of copy

- **Italics** for venue names and journal titles (not for emphasis — use bold or underline sparingly).
- **Underline on author name** in publication lists to self-identify in multi-author papers (`<u>Stavros Orfanoudakis</u>`). Keep this convention.
- **No emoji in running copy.** Emoji only appears in the GitHub README (👋 📫 👀) and should NOT migrate to the site.

### Sample copy

> I received my Diploma and M.Sc. degrees in Electrical and Computer engineering from the Technical University of Crete, Greece, in 2020 and 2022, respectively. During my studies, I developed an autonomous power-trading agent that secured first place in the international Power Trading Agent Competition (PowerTAC) in 2020.

> **EV2Gym** — A flexible simulation environment for EV smart charging research. It provides an OpenAI Gym interface for developing and benchmarking reinforcement learning solutions in the Vehicle-to-Grid domain.

### Vibe

Quietly credentialed. More "faculty page at a European technical university" than "SaaS indie hacker". The reader should finish a paragraph and think: _this person publishes_.

---

## VISUAL FOUNDATIONS

### Palette

- **Paper & ink as the core duality.** Background is a warm eggshell (`#f4f1e8`), ink is a green-biased near-black (`#18201c`) — the system reads like a well-printed academic monograph, not a web app.
- **Accent: "grid green"** (`#1f7a4c`). Borrowed from the DRIVE2X / EV2Gym project logos; ties the personal brand to the research domain (energy transition, power grids). Used sparingly — eyebrow labels, key links, the monogram.
- **Secondary accent: "Delft blue"** (`#00539b`). A nod to TU Delft without imitating its brand; used for inline links and interactive elements.
- **Dark theme** inverts to a deep ink (`#11140f`) with warm cream text, preserving the green/blue accents at slightly higher luminance.
- **No gradients.** No brand gradients. No purple/indigo. No neon.

### Type

- **Display: Fraunces** (variable serif, optical-size axis). High-contrast, humanist, faintly literary — carries the "faculty page, not app" signal. Used for H1/H2/H3.
- **Accent italic: Instrument Serif.** For pull quotes, venue names, and the occasional italicized word — pairs with Fraunces without fighting.
- **Body: IBM Plex Sans.** Neutral, readable at 17px, has excellent multilingual support (Greek glyphs — his name renders beautifully).
- **Mono: IBM Plex Mono.** For dates, DOIs, metadata, and any code snippets in projects.
- **⚠️ Substitution flag:** the original site used `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif` — an OS system stack, not a licensed font. Plex and Fraunces/Instrument Serif are **upgrades**, not matches. If Stavros has preferences (e.g. wants to keep a neutral geometric sans), swap in `Manrope` or `Inter Tight` in `colors_and_type.css`.

### Spacing

- **4px base unit.** Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Most compositions use 16 / 24 / 48 as the primary rhythm.
- **Generous vertical whitespace.** Section spacing is 64–96px. Pages breathe.
- **Container widths:** 720px (narrow, long-form prose), 1040px (default, the current site's limit), 1240px (wide, grids of projects).

### Backgrounds

- **Solid paper, almost always.** No imagery behind text. No hand-drawn illustrations. No textures, noise, or patterns.
- **Project and news cards sit on `--paper-2`** (a slightly deeper eggshell), creating a subtle stepped surface. The original site's `--tab-bg: #b4b4b0` was too gray for a warm palette; the new `--paper-2` (#eae5d6) keeps the "raised surface" idea but in the new hue family.
- **Full-bleed imagery** used only for project thumbnails (screenshots of research tools) — they are informational, not decorative.
- **No brand illustration.** If the page feels empty, a timeline dot or a hairline rule is the answer, never a decorative shape.

### Imagery direction

- **Warm, neutral, slightly desaturated.** Profile photograph shows him against a pale warm wall — the entire palette keys off this.
- **Screenshots over renderings.** Project thumbnails are real simulator output or real logo art, never 3D renders or stock photography.
- **No people except him.** Co-authors are names, not headshots.

### Motion

- **Restrained.** Page-level: 220ms fade on tab switch (kept from the original). Interactive: 140ms color transitions on links and buttons, 220ms on cards.
- **Easing:** custom standard curve `cubic-bezier(0.2, 0.6, 0.2, 1)` for most transitions, `cubic-bezier(0.16, 1, 0.3, 1)` for entrances.
- **No bounces, no spring physics, no scroll-triggered parallax.** This is a professor's homepage.

### Hover and press

- **Links:** underline thickens slightly, color shifts from Delft blue to a brighter variant. No color change on body text.
- **Buttons / tabs:** background steps one shade deeper (`paper-2` → `paper-3`), no scale transform.
- **Press:** 1px inward inset shadow, no shrink transform (feels cheap).
- **Cards:** 1px border remains, shadow deepens from `--sh-sm` to `--sh-md` on hover, 220ms.

### Borders and rules

- **1px hairline rules** (`--rule: #c9c2ad`) dominate. Between sections, between publications, under section headings.
- **Card borders:** 1px, very low-contrast, paired with a small shadow. The border keeps the card anchored on paper backgrounds where shadow alone disappears.
- **No double borders. No inset borders (Neumorphism). No colored left-borders as accents.** That "rounded card with colored left-border" pattern is banned.

### Shadows

- **Three levels only:** `--sh-sm` (resting), `--sh-md` (hover / raised), `--sh-lg` (dialog / popover).
- **Warm shadow color** (`rgba(24, 32, 28, 0.08)`) — not neutral black — so shadows blend into the paper rather than punching through it.
- **`--sh-hair`** for a crisp 1px drop under fixed headers / footers.
- **No glow. No inner glow.** No colored shadows.

### Transparency and blur

- **Almost never.** The only allowed use: a semi-opaque paper header bar (`paper` at 86% + 8px backdrop-blur) when the page scrolls, to keep the top nav legible over content. Everywhere else: solid.

### Corners

- **Small radii only.** `--r-md: 4px` is the default for cards, buttons, inputs. `--r-lg: 8px` for larger surfaces (modal, sidebar). `--r-pill` reserved for tags/badges. **No heavily rounded `border-radius: 20px+` cards** — it reads as app, not publication.

### Cards

- **Anatomy:** 1px border in `--rule`, 4–8px radius, `--sh-sm` shadow, `--paper-2` fill, 24–32px internal padding.
- **Project cards** combine a left image (~33% width) with right text, mirroring the current site's pattern.
- **Publication rows are _not_ cards.** They are text rows separated by hairline rules, the way a CV reads on paper.

### Layout rules

- **Fixed top nav.** Kept from the original. 56px tall on desktop, uses the paper-blur treatment above.
- **Fixed bottom footer** with socials + year — kept from the original, but aligned flex-between instead of the asymmetric margin-left hack.
- **Content column is 1040px max**, centered, with 24px side padding on mobile.
- **Grid:** 12-column on the desktop home, but most sections are single-column with asymmetric weights (1:2 for profile/interests → bio).

### Imagery treatment

- **Profile picture:** circular, 1px dark border, no drop shadow.
- **Project thumbnails:** 4px radius, no border, image fills.
- **Favicons / monograms:** the `letter-s.png` is reworked conceptually as a "S" serifed monogram in the masthead (keep the pixel favicon for tabs; use a typographic monogram on the page).

---

## ICONOGRAPHY

The original site uses **Font Awesome 6.0.0-beta3** via CDN, which is the correct source of truth for the icons already in use. This design system keeps that dependency and documents the specific icons Stavros uses, but upgrades to a _stylistic_ preference of **Lucide** for any _new_ UI icons (stroke-based, 1.5px weight, matches the restrained typographic direction better than Font Awesome's filled style).

### Rules

- **Existing icons stay on Font Awesome** to avoid re-authoring the publication-link icons (external-link-alt, file-pdf, book, etc.) that appear hundreds of times across publication listings.
- **New icons use Lucide** (CDN: `lucide@latest`), stroke width 1.5, 20×20 default, 24×24 on desktop navigation.
- **Social icons stay on Font Awesome Brands** — `fa-google`, `fa-orcid`, `fa-linkedin`, `fa-github` — because Font Awesome's brand glyphs are the officially-recognized marks and replacing them creates inconsistency. ORCID especially has no good Lucide equivalent.
- **The arXiv logo is an image**, not an icon (`assets/arxiv_logo.png`) — a raster logomark, same as the original site. Treat as a first-class brand mark, not an icon.
- **The DRIVE2X and EV2Gym logos** are their own marks, bundled in `assets/`. Use at their native colors against paper; do not tint or recolor them.
- **The "letter-s" favicon** is preserved as `assets/letter-s.png` and remains the browser favicon. In headers, use an `S` in Fraunces Semibold (the **typographic monogram**) instead, because the pixel-art mark doesn't scale to display sizes.
- **No emoji anywhere in-product.** The GitHub-flavored `👋 📫 👀` from the GitHub profile README do not migrate to the site.
- **No Unicode icon characters** (→ ★ ✓). Use Font Awesome or Lucide for any glyph that carries meaning.

### Loading

```html
<!-- Existing Font Awesome, kept -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

<!-- Lucide, added for new icons -->
<script src="https://unpkg.com/lucide@latest"></script>
```

---

## Notes for reviewers / iteration asks

- **Font substitution** (Segoe UI → IBM Plex Sans + Fraunces) is the biggest single change. If this doesn't land, it's a one-line swap.
- **Green as primary accent** is my interpretation from his project logos; if he'd rather the brand lean more toward a neutral/scholarly direction (no brand color at all), drop `--grid-green` usage and the palette works as monochrome paper-and-ink.
- **The "letter-s" monogram** is reinterpreted as a typographic serif "S"; the original pixel mark reads as an old favicon, not a wordmark. If Stavros has a preferred monogram file, it slots in at `assets/letter-s.png`.
