# Deeksha Portfolio - Next.js

A modern, responsive portfolio website for Deeksha Hemanth, PR & Events Executive. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14 App Router** - Modern React framework with server components
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **Static Export** - Generates static HTML files for GitHub Pages deployment
- **Responsive Design** - Mobile-first approach
- **React Slick** - Smooth carousel/slider for work portfolio

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a static export for GitHub Pages:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/page.tsx      # About page
│   ├── experience/page.tsx # Experience/Portfolio page
│   ├── contact/page.tsx    # Contact page
│   └── images/page.tsx     # Media coverages page
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Footer component
│   ├── SocialIcons.tsx     # Social media icons
│   └── WorkSlider.tsx      # Work portfolio carousel
├── public/
│   ├── images/             # Image assets
│   ├── favicon/            # Favicon files
│   ├── Deeksha_Resume.pdf  # Resume file
│   └── CNAME               # Custom domain config
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies
```

## Deployment to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The `out/` directory contains the static files ready for deployment.

3. Push the contents of `out/` to your GitHub Pages branch (usually `gh-pages`).

## Color Palette

- **Primary (Burgundy)**: `#89043d`
- **Primary Light**: `#a3054a`
- **Primary Dark**: `#6c0331`
- **Gold**: `#d4af37`
- **Cream**: `#fff8e6`

## Fonts

- **Cormorant Garamond** - Headings
- **Poppins** - Subheadings and buttons
- **Manrope** - Body text

## License

All rights reserved © 2025 Deeksha Hemanth
