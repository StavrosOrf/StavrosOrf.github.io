# Academic Site — UI Kit

High-fidelity recreation of Stavros Orfanoudakis's personal academic website, re-skinned with the new design system.

## Structure

- `index.html` — entry point, loads React + Babel, mounts the app
- `components.jsx` — all UI components (TopNav, Footer, HomePage, PublicationsPage, ProjectsPage, TeachingPage, Intro, News, PubRow, …)
- `site.css` — layout + component styles, scoped to `.so-root`

## Tabs

- **Home** — intro (portrait + bio + interests), news timeline, selected publications
- **Publications** — full archive, grouped by year
- **Projects** — EV2Gym and DRIVE2X cards, with links
- **Teaching** — co-supervised MSc students

Tab state persists to `localStorage`.

## Parity notes

- Kept the **vertical news timeline** pattern from the original, re-skinned with green dots on a hairline rule.
- Kept the **underlined self-author** convention in publication lists.
- Kept the **fixed top-nav + fixed bottom-footer** with social links (Google Scholar, ORCID, LinkedIn, GitHub).
- Dropped the original's **theme-toggle** (the paper palette works at all hours; if needed later, `colors_and_type.css` already defines `--ink-*` dark-theme variables).
- Dropped the asymmetric footer `margin-left: 35%` hack in favour of flex-between.
