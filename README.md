# My Sample Bank - Vercel Deployment Guide

## Why the logo is not showing

Your HTML files reference:

```html
<img src="logo.png" height="50">
```

The project does not contain a `logo.png` file, so the browser cannot load it.

## Option 1 (Recommended)

Add a file named:

```
logo.png
```

to the project root (same folder as `index.html`).

Your folder should look like:

```
index.html
dashboard.html
style.css
script.js
logo.png
README.md
```

## Option 2

If your logo is an SVG, change:

```html
<img src="logo.png" height="50">
```

to

```html
<img src="logo.svg" height="50">
```

in both `index.html` and `dashboard.html`.

## Deploying to Vercel

1. Upload the project to GitHub.
2. Import the repository into Vercel.
3. Framework Preset: **Other**.
4. Build Command: Leave empty.
5. Output Directory: Leave empty.
6. Click **Deploy**.

## Login Credentials

User ID:
9483115495

Password:
Anand@1977

## Notes

- Keep all files in the project root unless you update the image paths.
- If you move the logo into an `images` folder, update the HTML to:

```html
<img src="images/logo.png" height="50">
```
