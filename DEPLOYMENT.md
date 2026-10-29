# MAX SKULPT website

Static coming-soon website for MAX SKULPT and Dr. Preetha Anand.

## Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages using:

- Production branch: `main`
- Framework preset: None
- Build command: leave empty
- Build output directory: `dist`
- Root directory: repository root

After deployment, open the Pages project's Custom domains section and add `maxskulpt.com`. Follow Cloudflare's prompts to configure DNS and HTTPS. Add `www.maxskulpt.com` separately if desired.

## Local preview

Run `python3 -m http.server 8765 --directory dist`, then open http://localhost:8765.

## Files

- `dist/index.html`: page content
- `dist/style.css`: responsive styles
- `dist/assets/`: logo and portrait extracted from the supplied brochure

The public business information and imagery come from the supplied MAX SKULPT brochure. The website displays an under-development notice.
