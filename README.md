# OBVERRA DIGITAL — Premium Law Firm Website Demo Hub

A commercial-grade, multi-theme demonstration portal showcasing **FOUR radically distinct** premium digital designs for Indian advocates, senior counsels, corporate law firms, and legal advisory practices.

Designed and engineered for prospective law firm clients seeking bespoke digital projects at the **₹80,000** agency benchmark.

---

## 🏛️ The Four Creative Directions

1. **Design A — The Heritage Chambers (`/design-a`)**
   - **Audience:** Senior Advocates, Supreme Court & High Court Chambers, established multi-generational appellate practices.
   - **Aesthetic:** Warm ivory (`#FBF9F5`), deep forest green (`#1C2B22`), muted gold (`#C5A880`), dark walnut.
   - **Typography:** Classical serif typography (Playfair Display & Cormorant Garamond) paired with quiet editorial prose.
   - **Key Features:** Chambers archive pedigree, reported judgment citations, Advocate-on-Record procedural flow, Bar Council of India compliant ethics notice.

2. **Design B — The Modern Legal Authority (`/design-b`)**
   - **Audience:** High-growth corporate law firms, venture capital advisory, M&A dealmakers, fintech & technology practices.
   - **Aesthetic:** Crisp white, deep slate/charcoal (`#0F172A`), structural navy (`#1E293B`), restrained electric blue (`#2563EB`).
   - **Typography:** Modern geometric sans (Plus Jakarta Sans + DM Sans) with structured tabular metrics.
   - **Key Features:** Interactive practice area selector, 4-step corporate consultation journey, DPDP Act 2023 compliance advisory, transparent retainer tiers.

3. **Design C — The Noir Luxury Law Firm (`/design-c`)**
   - **Audience:** Ultra-high-net-worth private client offices, crisis defense, cross-border arbitration, boardroom warfare.
   - **Aesthetic:** Obsidian black (`#0B0C0E`), warm charcoal, brushed brass & champagne gold (`#C9A86A`, `#E2C896`).
   - **Typography:** Dramatic luxury serif (Cinzel & Cormorant Garamond) with generous negative space.
   - **Key Features:** Bespoke 10-case retainer model, encrypted private client consultation vault, SIAC/LCIA international arbitration focus.

4. **Design D — The Immersive Legal Experience (`/design-d`)**
   - **Audience:** Frontier technology, energy transition, aerospace, autonomous systems, complex infrastructure litigation.
   - **Aesthetic:** Deep midnight slate (`#070B14`), cool silver, controlled electric cyan (`#38BDF8`).
   - **Typography:** Contemporary spatial typography with mono accents.
   - **Key Features:** Interactive Three.js 3D spatial justice & equilibrium sculpture, touch and drag rotation, multidimensional dispute modeling framework, reduced-motion accessibility fallback.

---

## 📱 Mobile Responsiveness & Layout Architecture

The codebase has undergone a full audit and optimization to ensure pristine mobile rendering across small, medium, and large devices (320px, 375px, 390px, 412px, 428px, 768px, 1024px, 1440px+):

- **Zero Unintentional Horizontal Drift:** Strict `max-w-full`, `overflow-x-hidden`, and `box-sizing: border-box` containment across HTML, body, and all component grids.
- **Normal Viewport Zoom:** Calibrated viewport `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />` prevents unintended zoom drift on initial load.
- **Persistent Floating Demo Switcher:** A compact, non-intrusive floating pill at the bottom of the screen (`DemoSwitcherBar`) provides single-tap access to all 4 designs and the Hub from any device without requiring mobile menu expansion.
- **Adaptive Touch & Gestures:** 3D Three.js canvas in Design D supports touch dragging on mobile without locking vertical page scroll (`touch-none` on container, passive touch listeners).
- **Responsive Modals:** The `ConsultationModal` and `BarCouncilDisclaimerModal` feature adaptive sizing (`max-h-[92vh] flex flex-col`) with independently scrollable form content and 16px/14px inputs to avoid auto-zoom on mobile safari.

---

## ⚡ Quick Start & Local Run Instructions

Compatible with Node.js **v20+ / v24+** and npm **10+ / 11+**:

```bash
# 1. Clone or extract the repository
git clone <your-repo-url>
cd law-firm-demo-hub

# 2. Install dependencies cleanly
npm install

# 3. Start local development server on port 3000
npm run dev

# 4. Verify production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Cloudflare Deployment Guide

You can deploy this project to Cloudflare in two ways:

### Option A: Cloudflare Pages (Recommended - Zero Config)

1. Push your repository to GitHub.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository.
4. Set the build configuration:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version (Environment variable):** `NODE_VERSION = 22` or `24`
5. Click **Save and Deploy**.
6. Single Page Application (SPA) routing is handled automatically by the included `public/_redirects` file (`/* /index.html 200`), so direct visits or browser refreshes on `/design-a`, `/design-b`, `/design-c`, or `/design-d` will work without 404 errors.

### Option B: Cloudflare Workers (Static Assets with Wrangler)

The project includes a ready-to-use `wrangler.jsonc` file with `not_found_handling: "single-page-application"`.

```bash
# 1. Log in to Cloudflare via CLI
npx wrangler login

# 2. Build the project
npm run build

# 3. Deploy assets to Cloudflare Workers
npx wrangler deploy
```

---

## 🐙 Step-by-Step GitHub Push Instructions

If pushing this codebase to your GitHub repository for the first time or updating an existing remote:

```bash
# Initialize git if not already initialized
git init

# Add all files
git add .

# Commit your changes
git commit -m "feat: complete mobile responsiveness audit, Cloudflare deployment config, and 4 premium legal designs"

# Set default branch
git branch -M main

# Add your GitHub remote (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# Push to GitHub
git push -u origin main --force
```

---

## 🧭 Client-Side Routing Architecture

The hub and all four designs operate under a lightweight, pushState-compatible client router:

- `/` — OBVERRA DIGITAL Master Showcase Hub
- `/design-a` — The Heritage Chambers
- `/design-b` — The Modern Legal Authority
- `/design-c` — The Noir Luxury Law Firm
- `/design-d` — The Immersive Legal Experience

All internal links and back buttons update the browser history stack, allowing full forward/backward navigation and bookmarking.

---

## ⚖️ Bar Council of India Compliance (Rule 36)

Under **Rule 36 of Chapter II, Part VI of the Bar Council of India Rules**, advocates in India are not permitted to solicit work or advertise. 

All firm names, advocate profiles, matter references, and metrics displayed across this demo hub are **clearly labeled demonstrative concepts** crafted to showcase UI/UX architecture and web development capabilities for legal professionals.

---

## 📦 Tech Stack & Package Stability

- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS 4 (`@import "tailwindcss";`)
- **3D Graphics:** Three.js (`three: ^0.186.1`, `@types/three: ^0.186.0`)
- **Icons:** Lucide React (`lucide-react: ^0.546.0`)
- **Animation:** Motion (`motion: ^12.23.24`)
- **Archive Generator:** JSZip (`jszip: ^3.10.2`)
- **Deployment Artifacts:** `public/_redirects` + `wrangler.jsonc`

---

© 2026 OBVERRA DIGITAL. Built for bespoke client presentations and commercial conversions.
