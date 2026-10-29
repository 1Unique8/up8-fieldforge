# Up8 FieldForge

**Geological Provenance & Lapidary Metrology** for Unique Perspective 8.

Single-file progressive web app for field specimen intake, dual-station photography (rough + slab), diagnostic test checklists, specimen ledger with lineage, AI copilot, and Google Sheets export.

## Features
- Station A: Field mobile OCR / AR intake with locality GPS
- Station B: Workshop slabbing & metrology with cabochon stencils
- Master specimen ledger with dual photos, weights, dimensions, tests, appraisals
- Diagnostic protocol (Mohs, SG, streak, acid, UV, magnet, candling, soundness)
- Dual-image AI enhancement pipeline + `=IMAGE()` formulas for Sheets
- Locality selector (Similkameen, Hedley, Okanagan, Sumas, custom GPS)
- Printable specimen drawer labels
- Mock AI Copilot for appraisals, kerf, SG formulas
- **localStorage persistence** so records survive refresh

## Usage
Open `index.html` in a modern browser (or host on GitHub Pages / SiteGround).

For Google Sheets sync: deploy an Apps Script web app and paste the webhook URL in the Google Sheet modal.

## Integration with uniqueperspective8.com
Host this as a static page or subdomain (e.g. `field.uniqueperspective8.com` or `/fieldforge`). Link from the Education / Field hub.

Part of the 1Unique8 ecosystem.