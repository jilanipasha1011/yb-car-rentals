# YB Car Rentals Website

A modern, responsive, single-page website for YB Car Rentals (Delhi NCR Self-Drive Rentals).

## Files
- `index.html` — Website content and structure
- `style.css` — Modern UI styling and animations
- `script.js` — Interactive features, modal, fleet filters, and WhatsApp booking handoff
- `images/` — Car fleet images and assets
- `vercel.json` — Vercel static deployment configuration

## Local Development
Simply open `index.html` in your browser.

## Deployment to Vercel

### Method 1: Via GitHub (Recommended)
1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for YB Car Rentals"
   git remote add origin https://github.com/YOUR_USERNAME/yb-car-rentals.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** > **"Project"**.
4. Import your `yb-car-rentals` repository from GitHub.
5. Click **"Deploy"** (no custom build settings needed).

### Method 2: Via Vercel CLI
1. Open PowerShell or Terminal in this folder.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the on-screen prompts:
   - Log in using your browser when prompted.
   - Set up and deploy: press `Y`.
   - Which scope: choose your account.
   - Link to existing project: `N`.
   - Project name: `yb-car-rentals` (or press Enter).
   - In which directory: `./` (press Enter).
   - Want to modify settings: `N`.
4. To deploy directly to production:
   ```bash
   npx vercel --prod
   ```
