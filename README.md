# Up8 FieldForge

**Geological Provenance & Lapidary Metrology** for Unique Perspective 8.

Single-file progressive web app for field specimen intake, dual-station photography, diagnostic tests, specimen ledger with lineage, AI copilot, printable labels, and Google Sheets export.

## Features
- **Station A — Field Mobile**: locality selector (PEN, PRI, OLI, SUM, SIM/TUL, OKAN, YEL, HED, custom), GPS capture, dual photo upload (rough + slab), optional field video (≤30s; stored in IndexedDB, not localStorage), weight (grams), size L×W×H in inches (0.01 in steps), visual description
- **Station B — Workshop**: cabochon stencil / metrology notes, kerf guidance (0.04–0.06 in), dimensional tracking after slabbing in inches
- Diagnostic protocol: Mohs (with value), SG (with value), streak (with color), acid, UV, magnet, candling, soundness + notes
- Master specimen ledger with dual photos, optional video player, weights, dimensions in inches, tests, appraisals, localStorage (v3) + IndexedDB video blobs, v2→v3 migration, and a one-time cm/mm→inches size migration
- AI assistant / copilot (rules-based, extensible to external model): suggests possible ID, rough value range, disposition (throw it back / educational / jewelry-lapidary / crush-process), plus SG formula and kerf reminders
- Export: JSON download, Google Sheets webhook (Apps Script), printable specimen drawer labels
- Branding and direct links to uniqueperspective8.com and the education hub
- Mobile-first, offline-capable for Okanagan field use

## Usage
Open `index.html` in a modern browser (or host on GitHub Pages / SiteGround / Vercel).

All data stays local in the browser unless you export. Ideal for offline field work.

For Google Sheets sync: deploy an Apps Script web app and paste the webhook URL in the Export tab. Exports send string metadata only (photo yes/no flags; `videoName`, `videoMime`, `videoSize`, `videoUrl`) — video bytes stay in the browser IndexedDB keyed by specimen `id`.

### Photos and the Drive intake inbox
- Rough and slab photos are re-encoded on the device to JPEG (max 2400 px) and kept in IndexedDB (`up8_fieldforge_photos`, keys `<id>:rough` / `<id>:slab`).
- Optional **Rock ID** field (`UP8-<LOC>-NNN`); leave blank and the next free number for the locality is assigned when the bundle is processed.
- **Send photos to Drive inbox** (Export tab) packs every specimen not yet sent into one `up8-intake-<time>.json` (`schema: up8-fieldforge-bundle/2`, `sizeUnit: in`, photos as data URLs) and opens the share sheet (or downloads). Save it to Google Drive › `01_Intake_Media/_Inbox`. Older `bundle/1` files are still accepted; their size values are treated as centimetres and converted.
- A box-side job then removes backgrounds locally (no cloud AI), saves JPGs on brand black `#0B0D10`, files them under `UP8 Specimen Photos + Vids/<Rock_ID>/`, and logs a row in the **Field Intake** tab of the COMPLETE sheet. The app itself makes no network calls for this.

### Specimen video notes
- Capture or upload via Station A (`accept="video/*"`, max duration 30s; warn if file > 50 MB).
- Blob stored in IndexedDB (`up8_fieldforge_videos`) under the specimen `id`; ledger plays it locally and can show an optional external `videoUrl`.
- Storage key: `up8_fieldforge_specimens_v3` (auto-migrates from `..._v2` and assigns missing ids). Size values saved before the inches change are converted once on load (`up8_fieldforge_size_unit_in` flag; `sizeUnit: in` on each record).

## Integration with uniqueperspective8.com
- Header and footer link back to the main site and education hub.
- Specimens can later feed educational pages, "Know the cut" cabinet, or shop provenance stories.
- Hosting: GitHub Pages from `main` with the custom domain in `CNAME` (`fieldforge.uniqueperspective8.com`).

## Possible next refinements
- Real AI endpoint (prompt to Grok or local model) while keeping private data local
- MINFILE / claim reference fields and AR intake overlay
- Dual-image AI enhancement pipeline formulas for Sheets
- Vein Ledger direct sync

Part of the 1Unique8 ecosystem. Raw Origins. Refined Craft.