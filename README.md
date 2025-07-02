# 🚀 Ashwani Kumar – Modern Dynamic Portfolio with Admin Dashboard

Welcome to **Ashwani Kumar's Portfolio** – a next-generation, fully dynamic, and visually striking portfolio system for developers, designers, and creators. Experience a blend of modern UI, rich animations, and seamless admin controls to showcase your work, skills, and personal brand with style.

---

## 🌟 Why This Portfolio Stands Out

- **Ultra-Modern Design:** Crafted with cutting-edge UI (shadcn/ui + TailwindCSS), glassmorphism, smooth gradients, and elegant dark/light modes.
- **Fully Dynamic:** All sections managed from a secure admin dashboard – update your content anytime, anywhere.
- **Developer-Centric:** Built by and for developers (Ashwani Kumar) with attention to performance, accessibility, and scalability.
- **Personalized Touch:** Loaded with real, actionable info about Ashwani Kumar, plus dedicated sections for testimonials, certifications, and more.

---

## ✨ Key Features

### 🖥️ Frontend – Public Portfolio Site

1. **Hero Section**
   - Visually captivating animated intro (Framer Motion, Lottie, GSAP)
   - Dynamic name, designation, creative intro, and stylish CTA buttons (Contact / Download Resume)
   - Typewriter effect for multiple roles (e.g., "Fullstack Developer", "UI Enthusiast", "Open Source Contributor")
   - Quick theme toggle (dark/light), and language switcher (i18n)

2. **About Me**
   - High-res personal image (optimized with Next/Image)
   - Dynamic bio (edit in Admin)
   - Key highlights: years of experience, notable achievements, certifications, and “Fun Facts”
   - Downloadable CV

3. **Skills**
   - Categorized (Frontend, Backend, DevOps, ML, Cloud, etc.)
   - Animated progress bars, tag clouds, and interactive skill filters
   - Tech stack logos (auto-fetched)
   - “Currently Learning” and “Top Endorsements”

4. **Projects**
   - Stylish cards: project image, title, tags, live demo, GitHub link, stack badges
   - Hover 3D tilt, modals with full details, videos/screenshots, and testimonials
   - Category & tag filtering, instant search
   - Featured projects carousel

5. **Work Experience / Timeline**
   - Animated vertical timeline (Framer Motion)
   - Company logos, role, duration, and key contributions (rich text)
   - Downloadable letters/references (if public)

6. **Blogs & Articles**
   - Markdown & MDX support, Notion API integration for seamless publishing
   - Animated reading progress, tags, and estimated reading time
   - Highlighted “Most Popular” and “Recent” blogs

7. **Testimonials**
   - Carousel of endorsements from colleagues, mentors, and clients (dynamic from Admin)
   - Company logos, LinkedIn links

8. **Certifications & Achievements**
   - Badges with links to verify
   - Downloadable certificates

9. **Contact**
   - Animated email/contact form (EmailJS, Nodemailer API route)
   - Social links (LinkedIn, GitHub, X, etc.), WhatsApp, Telegram
   - Google Maps integration for location (optional)

10. **Resume Download**
    - Always up-to-date (Cloudinary/Firebase storage)
    - Download button with animated feedback

---

### 🛠️ Admin Dashboard (`/admin`)

- **Authentication:** Secure login (NextAuth.js, JWT, Credentials Provider)
- **Route Protection:** All admin routes are protected
- **Dashboard Features:**  
  | Section         | Actions                                       |
  |-----------------|-----------------------------------------------|
  | About           | Edit bio, image, fun facts, achievements      |
  | Skills          | Add / Edit / Delete                           |
  | Projects        | CRUD, upload images/videos, set featured      |
  | Experience      | CRUD, upload letters                          |
  | Socials         | Update all social/contact links               |
  | Blogs           | Write (Markdown/MDX), edit, delete            |
  | Testimonials    | Add / Edit / Delete, set featured             |
  | Certifications  | Add / Edit / Delete, upload certificates      |
  | Resume          | Upload new file                               |

- **Rich Text Editor:** React Quill or TipTap
- **Visual Dashboard Analytics:** Visits, clicks, contact messages
- **File uploads:** Cloudinary / UploadThing
- **UI:** Super-clean, responsive, and accessible (Tailwind UI, shadcn/ui)

---

## 🔐 Tech Stack

- **Framework & Language:** Next.js 15 (App Router), TypeScript
- **Styling:** TailwindCSS, shadcn/ui (Radix + Tailwind), CSS Variables
- **Animations:** Framer Motion, Lottie, GSAP
- **Forms & Validation:** React Hook Form, Zod
- **Auth:** NextAuth.js (Credentials Provider)
- **Database:** MongoDB Atlas (free tier)
- **ORM:** Mongoose or DrizzleORM
- **Image Handling:** Next/Image, Cloudinary
- **File Uploads:** Cloudinary / UploadThing
- **SEO:** next-seo, OpenGraph meta, sitemap.xml, robots.txt

---

## 🧩 Plus Features

- **Dark/Light Mode:** Beautiful theme toggle, persists user preference (localStorage/cookies)
- **Internationalization (i18n):** Multi-language support (next-intl)
- **Page Transitions:** Framer Motion layout transitions
- **PWA Support:** Installable, offline-ready
- **Accessibility:** Keyboard navigation, WCAG AA+ compliance
- **Performance:** Lighthouse 95+ scores, image optimization, code splitting
- **Security:** Best practices for auth, uploads, rate limiting
- **Deploy-Ready:** Vercel & Docker deployment scripts

---

## 👤 About Me – Ashwani Kumar

- **Full Name:** Ashwani Kumar
- **Role:** Fullstack Developer, UI/UX Enthusiast, Open Source Contributor
- **Location:** India (Remote/Hybrid)
- **Skills:** React, Next.js, TypeScript, Node.js, MongoDB, TailwindCSS, Cloudinary, Figma, Docker, AWS
- **Experience:** 5+ years in software development, built 25+ projects, contributed to open source, passionate about UI, cloud, and automation
- **Certifications:** AWS Certified Developer, Google Cloud, MongoDB University
- **Achievements:** Winner at [insert hackathon], Speaker at [insert conference], Top contributor on StackOverflow
- **Fun Fact:** Loves chess, cycling, and experimenting with new web APIs

---

## ✨ Demo

> **Live Demo:** _Coming Soon!_
>
> _Or, clone and run locally to explore all features._

---

## 📦 Getting Started

```bash
git clone https://github.com/ashwanik0777/portfolio
cd portfolio
npm install
npm run dev
```

---

## 📫 Contact

- [LinkedIn](https://www.linkedin.com/in/ashwanik0777/)
- [GitHub](https://github.com/ashwanik0777)
- [Email](mailto:ashwanik0777@gmail.com)
- [Twitter/X](https://twitter.com/ashwanik0777)
- [Portfolio](https://ashwanikumar.dev)

---

> _Built with ❤️ by Ashwani Kumar using Next.js, TypeScript, and the latest modern web technologies.  
> Inspired by the community, for the community._
