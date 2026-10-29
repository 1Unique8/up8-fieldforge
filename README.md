# Up8 FieldForge

**Geological Provenance & Lapidary Metrology** for Unique Perspective 8.

Single-file progressive web app for field specimen intake, diagnostic test checklists, specimen ledger, AI-assisted identification/valuation/disposition, and connection to uniqueperspective8.com.

## Features
- Specimen entry: locality selector (Similkameen, South Okanagan, Penticton, Princeton, custom), weight, size, visual description
- Diagnostic protocol checkboxes (Mohs, SG, streak, acid, UV, magnet, candling, soundness) + notes
- Master specimen ledger with localStorage persistence
- AI assistant (rules-based, extensible to external model): suggests possible ID, rough value range, and disposition (throw it back / educational / jewelry-lapidary / crush-process)
- Branding and direct links to uniqueperspective8.com and the education hub
- Printable-friendly layout, mobile-first for field use

## Usage
Open `index.html` in a modern browser (or host on GitHub Pages / SiteGround / Vercel).

All data stays local in the browser unless you export. Ideal for offline field work in the Okanagan.

## Integration with uniqueperspective8.com
- Header and footer link back to the main site and education hub.
- Specimens can later feed educational pages, "Know the cut" cabinet, or shop provenance stories.
- Suggested hosting: `field.uniqueperspective8.com` or a `/fieldforge` path on the main repo / Pages.

## Next refinements
- Dual photo upload (rough + slab)
- Real AI endpoint (prompt to Grok or local model) while keeping private data local
- Google Sheets / Vein Ledger webhook export
- GPS capture and MINFILE / claim reference fields
- Printable drawer labels

Part of the 1Unique8 ecosystem. Raw Origins. Refined Craft.