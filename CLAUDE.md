# CLAUDE.md — Carte 42 WebSite

## Contexte projet

Refonte du site **carte42.fr** (ancienne version Webflow supprimée).
Hébergement : **GitHub Pages** (repo `Carte42/Carte42-WebSite`, public).
Domaine : **carte42.fr** (DNS OVH → GitHub Pages — configuré et actif).

## Stack

- **Astro 4** + **Tailwind CSS v3**
- Pas de framework JS côté client (Astro vanilla)
- Google Fonts : Inter (corps) + Space Grotesk (titres, classe `font-display`)
- Design : dark theme — fond `slate-950`, cards `slate-900`, accent `cyan-400/500`

## Structure des fichiers

```
src/
  layouts/Layout.astro      # HTML de base, Google Fonts, scroll reveal script
  pages/index.astro         # Page unique, importe tous les composants
  components/
    Header.astro            # Nav fixe avec menu mobile (logo PNG + nav)
    Hero.astro              # Section plein écran avec grille géo
    Poles.astro             # 3 pôles d'expertise (cards)
    CasPratiques.astro      # 3 cas pratiques (cards + images .png)
    APropos.astro           # Bio Allan + photo portrait (grille 3 cols, photo col-1)
    Contact.astro           # Formulaire Formspree (xqeyloby) — sans téléphone
    Footer.astro            # Copyright + liens + logo PNG
  styles/global.css         # Tailwind base + .bg-grid + .reveal + .card-glow
public/
  CNAME                     # → carte42.fr
  favicon.svg               # Logo SVG
  images/
    42-256.png              # Logo Carte 42 (header + footer)
    allan.JPG               # Portrait Allan (ratio 4:5)
    cases/
      canopee.png           # Cas pratique canopée urbaine
      pcrs.png              # Cas pratique accessibilité CNIG
      sentinel.png          # Cas pratique détection changements
.github/workflows/deploy.yml  # GitHub Actions → build + deploy automatique sur push main
```

## Positionnement du site (ne pas dériver)

Site recentré sur **3 pôles uniquement** :
1. **Data Science & IA** — flagship, pipelines, computer vision, LLMs
2. **Télédétection** — IGN, Pléiades, Copernicus, LiDAR HD, NDVI
3. **Réglementaire & Institutionnel** — CNIG, PCRS, DT-DICT, PLU, RGPD

**Cibles :** collectivités, bureaux d'études, services techniques — pas les particuliers.

## Checklist déploiement — TOUT FAIT ✅

- [x] Images déposées dans `public/images/` (allan.JPG, 42-256.png, cases/*.png)
- [x] Formspree configuré — ID `xqeyloby` dans `Contact.astro`
- [x] GitHub Pages activé — Source : GitHub Actions
- [x] DNS OVH reconfiguré (Webflow supprimé, IPs GitHub Pages ajoutées)
- [x] Domaine custom `carte42.fr` configuré dans GitHub Pages

## DNS OVH — configuration actuelle

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  carte42.github.io.
```
Enregistrements conservés : NS, SPF, MX x4, google-site-verification, DKIM x2

## Git

- Remote : `https://github.com/Carte42/Carte42-WebSite.git`
- Token stocké localement dans `token.txt` (ignoré par git)
- Identité git : `Carte42 <contact@carte42.fr>`
- Push sur `main` → déploiement automatique via GitHub Actions

## Commandes utiles

```bash
npm run dev      # Dev local → http://localhost:4321
npm run build    # Build de production → ./dist
npm run preview  # Preview du build
```

## Animations / classes CSS custom

- `.reveal` + `.reveal-d1/d2/d3` — scroll reveal via IntersectionObserver (dans Layout.astro)
- `.bg-grid` — grille géographique subtile en fond (utilisée dans Hero)
- `.card-glow` — hover lift + glow cyan sur les cards
