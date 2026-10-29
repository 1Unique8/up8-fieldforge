# Up8 FieldForge

**Geological Provenance & Lapidary Metrology** for Unique Perspective 8.

Single-file progressive web app for field specimen intake, dual-station photography, diagnostic tests, specimen ledger with lineage, AI copilot, printable labels, and Google Sheets export.

## Features
- **Station A — Field Mobile**: locality selector (Similkameen, Hedley, Okanagan, Sumas, Princeton, custom), GPS capture, dual photo upload (rough + slab), weight, size, visual description
- **Station B — Workshop**: cabochon stencil / metrology notes, kerf guidance, dimensional tracking after slabbing
- Diagnostic protocol: Mohs (with value), SG (with value), streak (with color), acid, UV, magnet, candling, soundness + notes
- Master specimen ledger with dual photos, weights, dimensions, tests, appraisals, and localStorage persistence
- AI assistant / copilot (rules-based, extensible to external model): suggests possible ID, rough value range, disposition (throw it back / educational / jewelry-lapidary / crush-process), plus SG formula and kerf reminders
- Export: JSON download, Google Sheets webhook (Apps Script), printable specimen drawer labels
- Branding and direct links to uniqueperspective8.com and the education hub
- Mobile-first, offline-capable for Okanagan field use

## Usage
Open `index.html` in a modern browser (or host on GitHub Pages / SiteGround / Vercel).

All data stays local in the browser unless you export. Ideal for offline field work.

For Google Sheets sync: deploy an Apps Script web app and paste the webhook URL in the Export tab.

## Integration with uniqueperspective8.com
- Header and footer link back to the main site and education hub.
- Specimens can later feed educational pages, "Know the cut" cabinet, or shop provenance stories.
- Suggested hosting: `field.uniqueperspective8.com` or a `/fieldforge` path on the main repo / Pages.

## Possible next refinements
- Real AI endpoint (prompt to Grok or local model) while keeping private data local
- MINFILE / claim reference fields and AR intake overlay
- Dual-image AI enhancement pipeline formulas for Sheets
- Vein Ledger direct sync

Part of the 1Unique8 ecosystem. Raw Origins. Refined Craft.