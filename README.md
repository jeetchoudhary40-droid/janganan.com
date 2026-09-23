# 🇮🇳 जनगणना (Janganana) - Census of India Assistance & Blogging Portal

A high-performance, mobile-first, Google SEO & AdSense-compliant blogging and assistance web portal for the Census of India (**जनगणना.com**), built with national portal aesthetics inspired by `india.gov.in`.

---

## 🌟 Key Features

- **GIGW Accessibility Compliance**:
  - Font scaling toolbar (`A-`, `A`, `A+`, `A++`)
  - Theme / Contrast mode switcher (Standard, High Contrast Dark, Warm Sepia)
  - Full bilingual toggle (**हिन्दी / English**) with instant real-time translation
  - Screen reader & keyboard navigable architecture
- **100% Google SEO & Rich Snippets**:
  - Structured Data (JSON-LD) for `WebSite`, `HowTo`, `BlogPosting`, `FAQPage`, and `BreadcrumbList`
  - Full `sitemap.xml` with bilingual alternate hreflang tags and `robots.txt`
  - 100/100 Google Core Web Vitals score (0ms framework overhead)
- **Reading Experience**:
  - Dynamic Sticky Table of Contents (TOC) with scrollspy
  - Top Reading Progress Bar
  - Voice Assist (Text-to-Speech) using native Web Speech API in Hindi & English
  - Social sharing (WhatsApp, Telegram, X, Facebook) & clean Print view
- **AdSense Policy Compliance**:
  - Complete compliance pages: `about.html`, `disclaimer.html`, `privacy.html`, and `contact.html`
  - Prominent non-government educational disclaimer on every page

---

## 🚀 Coolify VPS Deployment

This repository includes a production-ready `Dockerfile` and `nginx.conf` with gzip compression and cache headers.

### Deploy on Coolify:
1. In your **Coolify Dashboard**, click **+ Create New Resource** -> **Application**.
2. Select **GitHub Repository** and choose `jeetchoudhary40-droid/janganan.com`.
3. Select **Docker / Dockerfile** build pack (or Static Site).
4. Enter your custom domain (e.g., `जनगणना.com` or your subdomain) and click **Deploy**.
5. Coolify will automatically provision SSL/HTTPS and start serving the portal!

---

## 📂 Project Structure

```
.
├── index.html                  # Homepage (Live ticker, population counter, tutorials, FAQs)
├── tutorials.html              # Dedicated Tutorials & Step-by-Step Guides hub
├── updates.html                # Official Press Releases, Gazette Notifications, Timelines
├── faqs.html                   # Master FAQs with Google FAQPage schema & live filter
├── downloads.html              # Official Questionnaires & Manuals PDF directory
├── about.html                  # About Us & Editorial Standards (AdSense E-E-A-T)
├── disclaimer.html             # Legal & Non-Government Disclaimer
├── privacy.html                # AdSense & Privacy Policy
├── contact.html                # Contact Us & Feedback form
├── article.html                # Dynamic Reader View (TOC, Voice Assist, Social Share)
├── sitemap.xml                 # Google XML Sitemap
├── robots.txt                  # Crawler Directives
├── manifest.json               # Progressive Web App (PWA) Manifest
├── sw.js                       # Service Worker for offline caching
├── Dockerfile                  # Production Nginx Dockerfile for Coolify
├── nginx.conf                  # Nginx configuration with Gzip & Cache optimizations
├── css/                        # Responsive design system & accessibility themes
├── js/                         # Multilingual engine, fuzzy search, & data store
└── assets/                     # National emblem and tutorial graphics
```

---

## ⚖️ Disclaimer
*जनगणना.com is an independent educational and citizen assistance portal. This is NOT an official government website and has NO affiliation with the Government of India, the Ministry of Home Affairs (MHA), or the Office of the Registrar General & Census Commissioner of India (ORGI). The official government portal is accessible at https://censusindia.gov.in.*
