# LG MGMT Website

Static GitHub Pages site for LG MGMT / Lighthouse Growth.

## Publish

1. Push these files to the `main` branch.
2. In GitHub, open **Settings > Pages**.
3. Choose **Deploy from a branch**.
4. Select branch `main` and folder `/root`.
5. Save.

The site will publish at:

```text
https://lg917.github.io/LG_MGMT_web/
```

## Custom Domain

In **Settings > Pages**, add your custom domain.

For `www.lg-mgmt.eu`, add a `CNAME` record at Gandi pointing to:

```text
lg917.github.io
```

For the apex domain `lg-mgmt.eu`, follow the GitHub Pages DNS instructions shown in the Pages screen, then enable **Enforce HTTPS**.
