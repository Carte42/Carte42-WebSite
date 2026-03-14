# CLAUDE.md — Carte 42 WebSite

## Contexte projet

Refonte du site **carte42.fr** (ancienne version Webflow supprimée).
Hébergement : **GitHub Pages** (repo `carte42/Carte42-WebSite`, public).
Domaine : **carte42.fr** (DNS OVH → GitHub Pages).

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
    Header.astro            # Nav fixe avec menu mobile
    Hero.astro              # Section plein écran avec grille géo
    Poles.astro             # 3 pôles d'expertise (cards)
    CasPratiques.astro      # 3 cas pratiques (cards + images)
    APropos.astro           # Bio Allan + photo portrait
    Contact.astro           # Formulaire Formspree + coordonnées
    Footer.astro            # Copyright + liens
  styles/global.css         # Tailwind base + .bg-grid + .reveal + .card-glow
public/
  CNAME                     # → carte42.fr
  favicon.svg               # Logo "42" cyan
  images/
    allan.jpg               # Portrait Allan (à déposer — format 4:5)
    cases/
      canopee.jpg           # Cas pratique LiDAR canopée (à déposer)
      pcrs.jpg              # Cas pratique PCRS (à déposer)
      sentinel.jpg          # Cas pratique Sentinel (à déposer)
.github/workflows/deploy.yml  # GitHub Actions → build + deploy automatique sur push main
```

## Positionnement du site (ne pas dériver)

Site recentré sur **3 pôles uniquement** (ce qui marche) :
1. **Data Science & IA** — flagship, pipelines, computer vision, LLMs
2. **Télédétection** — IGN, Pléiades, Copernicus, LiDAR HD, NDVI
3. **Réglementaire & Institutionnel** — CNIG, PCRS, DT-DICT, PLU, RGPD

**Cibles :** collectivités, bureaux d'études, services techniques — pas les particuliers.

## À faire (checklist déploiement)

- [ ] Déposer `public/images/allan.jpg` (portrait)
- [ ] Déposer `public/images/cases/canopee.jpg`, `pcrs.jpg`, `sentinel.jpg`
- [ ] Créer compte Formspree → remplacer `VOTRE_ID_FORMSPREE` dans `Contact.astro`
- [ ] Activer GitHub Pages dans le repo : Settings → Pages → Source : GitHub Actions
- [ ] Reconfigurer DNS OVH (supprimer anciens CNAME Webflow, ajouter IPs GitHub Pages)

## DNS OVH — IPs GitHub Pages

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  carte42.github.io.
```

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
