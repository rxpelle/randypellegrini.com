# GitHub Pages Deployment (Free Hosting)

## 1) Create a GitHub repo
- Create a new repo named `randypellegrini.com` (or any name you want).
- Do not initialize with a README if you plan to push from local.

## 2) Put the site files at the repo root
GitHub Pages serves from the repo root. Move everything in `author_site/` into the repo root.

Expected root files:
- `index.html`
- `styles.css`
- `CNAME`
- `.nojekyll`

## 3) Push to GitHub
From your terminal:
```bash
mkdir randypellegrini.com
cp -R author_site/* randypellegrini.com/
cp author_site/.nojekyll randypellegrini.com/
cd randypellegrini.com
git init
git add .
git commit -m "Initial author site"
git branch -M main
git remote add origin https://github.com/<your-username>/randypellegrini.com.git
git push -u origin main
```

## 4) Enable Pages
- GitHub repo → Settings → Pages
- Source: Deploy from branch
- Branch: `main` / root
- Save

## 5) Set DNS for randypellegrini.com
At your domain registrar, create these DNS records:

**A records (apex):**
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**AAAA records (IPv6, optional):**
- 2606:50c0:8000::153
- 2606:50c0:8001::153
- 2606:50c0:8002::153
- 2606:50c0:8003::153

**CNAME:**
- `www` → `randypellegrini.com`

DNS can take a few hours to propagate.
