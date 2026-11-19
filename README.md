# Sanjiv Beri — HEALTHSPAN

The current approved website is in `site/`. It is static HTML, CSS and JavaScript, with local WebP images. No build step is required.

## Deployment

`.github/workflows/deploy.yml` publishes `site/` to GitHub Pages whenever `main` changes. In repository Settings > Pages, select **GitHub Actions** as the source if it is not already selected.

## Local preview

```bash
python3 -m http.server 8000 --directory site
```

Then open http://localhost:8000.

## Editing

- `site/index.html`: content, booking links and email links
- `site/style.css`: layout and styling
- `site/script.js`: floating booking-button behaviour
- `site/assets/`: website images and favicon

The lower Meet Sanjiv portrait uses the latest approved Dutch-park image. The header badge reads “BIOLOGICAL AGE — 20 years younger” and is level.

Booking links open the existing TidyCal page. Diagnostic links open an email draft; no automatic email delivery is configured. Fonts load from Google Fonts with browser fallbacks.

## Previous implementation

The earlier Next.js application remains in `src/` and `public/`, with its package files and configuration, for reference. It is not the active GitHub Pages source.
