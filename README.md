# Responsible AI Hull — front page

Static replica of the home page of https://www.responsibleaihull.com, built to run on GitHub Pages (plain HTML, CSS and JavaScript — no build step).

## Structure

```
index.html      the page
css/style.css   styles (colours are variables at the top)
js/main.js      mobile menu, dropdowns, footer year
.nojekyll       tells GitHub Pages to serve files as-is
```

## Publish on GitHub Pages

1. Create a repository and upload these files to its root (keep the folders).
2. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`, and save.
3. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Notes

- **Images** are currently loaded from Wix's image server (`static.wixstatic.com`). They will keep working while the Wix site exists. To make the repository fully independent, download each image into an `images/` folder and change the `src` paths in `index.html`.
- **Menu and profile links** point to the existing pages on responsibleaihull.com. Replace them with local pages as you migrate the rest of the site.
- **Custom domain**: to serve this at responsibleaihull.com later, add a `CNAME` file containing `www.responsibleaihull.com` and update your DNS as described in GitHub's Pages documentation.
