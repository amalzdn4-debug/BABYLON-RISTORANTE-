# Babylon Ristorante — Milano

Static trilingual (IT/EN/AR) restaurant website. No backend, no build step.
Verified against real CSS rendering: language switching, RTL layout, and
mobile image cropping all confirmed working correctly.

## What changed in this version
- **Arabic added** as a third language, with full right-to-left layout
  (Cairo/Amiri fonts, mirrored spacing, RTL-aware nav and menu).
- **Mobile hero logo** repositioned into the empty space above the headline
  instead of sitting low behind the text.
- **Chef photo and coffee-pour photo** no longer get aggressively cropped on
  mobile — they now show close to their full framing, same as desktop.
- **Chef name** corrected to Mufeed Al Jabor throughout.
- **Chef bio** no longer states a specific nationality — reframed poetically
  around "the land of Babylon," tying into the restaurant's own story.

## Setting this up (single upload, no manual editing needed)

1. Go to [github.com/new](https://github.com/new). Create a new, empty,
   **Public** repo.
2. Unzip this package on your computer.
3. On the repo page, click **uploading an existing file**, then drag in
   ALL of it at once: `index.html`, `menu.html`, `README.md`, and the
   `css`, `js`, and `images` folders together.
4. Before committing, confirm the file list shows `css/style.css` and
   `js/main.js` with their folder prefixes (not loose at the root).
5. Commit, then **Settings → Pages** → Source: "Deploy from a branch",
   Branch `main`, folder `/ (root)` → Save.
6. Wait 1–2 minutes, then test in an **incognito window** first.

## Buying a domain
See the earlier instructions — Namecheap/Porkbun/Register.it, point A
records at GitHub's IPs (185.199.108–111.153), add the domain under
Settings → Pages → Custom domain.
