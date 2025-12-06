This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Project Technical Documentation

## 1. Complex Animations Explained

### Hero Section (`src/views/sections/Hero.tsx`)
- **Tab Component Logic**: Uses `AnimatePresence` to handle the mounting and unmounting of tab content. The `key` prop on the content container (`motion.div`) is critical; changing it (via state `activeTabId`) triggers Framer Motion's `exit` and `initial` animations, creating a smooth transition between content.
- **Active Tab Border**: The active tab button features a moving border animation. This is achieved using `layoutId="activeTabBorder"` on a `motion.div`. Framer Motion automatically animates this element to the new parent's position when the state changes, creating a "sliding" effect.

### Frameworks Section (`src/views/sections/Frameworks.tsx`)
- **Infinite Moving Cards**:
  - We essentially duplicate the list of items (`items.cloneNode(true)`) and append them to the container.
  - CSS variables `--animation-direction` and `--animation-duration` are set dynamically based on props.
  - A CSS animation (`animate-scroll`) translates the container endlessly. The cloned items ensure that when the first set scrolls out of view, the second set seamlessly takes its place, creating an infinite loop illusion.

### Stats Section (`src/views/sections/Stats.tsx`)
- **Sticky Horizontal Scroll**:
  - The section has a very large height (`300vh`), forcing the user to scroll vertically.
  - The content container uses `position: sticky; top: 0;`, so it stays in the viewport while the parent scrolls.
  - We track the scroll progress via `useScroll({ target: targetRef })`.
  - `useTransform` maps this vertical scroll progress (0 to 1) to a horizontal X-axis translation (`2%` to `-55%`).
  - Result: Vertical scrolling drives horizontal movement.

---

## 2. Performance Optimization Decisions

- **Next.js Image Component**: Used `next/image` for all logos and icons (Frameworks, Testimonials) to automatically serve optimized formats (WebP), lazy load images below the fold, and prevent layout shifts (CLS).
- **Font Optimization**: Used `next/font/google` for Inter and DM Sans. This self-hosts the font files at build time, eliminating external network requests to Google Fonts and preventing layout shifts (FOUT/FOIT).
- **Hardware Acceleration**: Animations (specifically in `Frameworks.tsx`) use `transform: translate3d(...)` or `will-change: transform` implicitly via Framer Motion to ensure animations run on the GPU, preventing jank on scroll.
- **Component Memoization (Implicit)**: By splitting large sections into separate files (`Hero`, `Stats`, `Frameworks`, etc.) and importing them into `page.tsx`, we ensure clear boundaries. Next.js App Router (Server Components by default) helps reduce the client-side JavaScript bundle size, though our interactive sections mark `"use client"` where necessary.

---

## 3. Challenges & Solutions

### Challenge 1: Header Transparency & Scroll State
**Issue:** The header needed to be transparent initially but turn solid and show different styling (white text vs dark text) when scrolling.
**Solution:** Implemented a custom hook `useNavigation` (or direct event listener) in `Header.tsx` to track `window.scrollY`. We toggle a css class/state `isScrolled` when scroll > 10px. We used `clsx` / `tailwind-merge` (`cn` utility) to conditionally apply classes like `bg-[#2B3D72]` and text color changes dynamically.

### Challenge 2: Sticky Scroll Implementation
**Issue:** Making the "Results We Celebrate" section scroll horizontally while the user scrolls vertically is counter-intuitive in standard CSS layout.
**Solution:** We used the "Sticky Parent" technique. The section is given a large height (`300vh`) to create scroll space. The internal container is `sticky top-0 h-screen`. We then used `framer-motion`'s `useScroll` hook to map the vertical scroll progress to a horizontal `x` transform. This locks the view in place while translating content sideways.

### Challenge 3: Mobile Responsiveness & Overflow
**Issue:** Large typography in the "Industries" and "Stats" sections caused horizontal scrolling on mobile devices, breaking the layout.
**Solution:**
1.  Applied `overflow-hidden` to section containers to clip decorative elements.
2.  Used responsive text sizing (`text-3xl md:text-[2.5rem]`).
3.  Adjusted padding (`py-20` mobile vs `py-32` desktop) to ensure content fits comfortably on smaller screens without excessive white space.

### Challenge 4: SEO Optimization on SPA-like Framework
**Issue:** The initial Lighthouse SEO score was low (66) due to missing metadata and crawl instructions.
**Solution:**
1.  **Metadata**: Enhanced `src/app/layout.tsx` with specific `title` templates, `description`, `canonical` tags, and `OpenGraph` data.
2.  **Robots/Sitemap**: Added dynamic `robots.ts` and `sitemap.ts` files pointing to the correct production URL on Vercel, ensuring search engines can properly index the site.

---

## 4. Verification Results

We achieved significant improvements in all key metrics following our optimizations.

![Lighthouse Performance Scores](/public/performance.pdf)
