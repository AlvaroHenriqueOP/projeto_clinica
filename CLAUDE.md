# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (Next.js dev mode)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run build:clean` - Clean cache and build
- `npm run dev:clean` - Clean cache and start dev server

### Image Optimization Scripts
- `npm run compress:blog` - Compress blog images specifically
- `npm run compress:all` - Compress all project images
- `npm run replace:images` - Replace original images with compressed versions

### Deployment
- `npm run deploy` - Deploy to Vercel
- `npm run deploy:prod` - Deploy to production on Vercel

## Architecture Overview

This is a modern dental clinic website built with Next.js 15 using the App Router pattern. The project follows a hybrid approach, combining both App Router and Pages Router for specific use cases.

### Tech Stack
- **Framework**: Next.js 15.3 with App Router as primary routing system
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion with LazyMotion optimization
- **Icons**: Heroicons
- **Image Processing**: Sharp for optimization
- **Deployment**: Vercel-optimized

### Project Structure
```
src/
├── app/                    # App Router pages and layouts
│   ├── components/         # React components organized by category
│   │   ├── home/          # Homepage-specific components
│   │   ├── layouts/       # Layout components (MainLayout)
│   │   ├── navigation/    # Header, Footer, Breadcrumbs
│   │   ├── shared/        # Reusable components (LazyImage, ContactForm)
│   │   └── ui/           # Basic UI components (Button, Card, Typography)
│   ├── blog/             # Blog functionality with dynamic routes
│   ├── styles/           # Global CSS and animations
│   └── [pages]/          # Individual pages (sobre, tratamentos, etc.)
├── lib/                  # Utility functions and navigation helpers
└── pages/                # Pages Router (legacy support)
```

### Key Implementation Details

#### Routing Architecture
- **Primary**: App Router (`src/app/`) for main pages and layouts
- **Hybrid**: Pages Router (`src/pages/`) still present for legacy compatibility
- The `next.config.js` explicitly enables App Router with `experimental.appDir: true`

#### Performance Optimizations
- **Images**: Custom LazyImage component with lazy loading
- **Animations**: LazyMotion with domAnimation features for reduced bundle size
- **Dynamic Imports**: Footer and heavy components loaded dynamically
- **Image Compression**: Automated scripts for optimizing images
- **Sharp Integration**: High-performance image processing

#### Component Organization
- Components are categorized by function (home/, navigation/, shared/, ui/)
- Layouts use MainLayout wrapper with Header, Footer, and ScrollToTop
- Motion components are abstracted in `shared/motion.ts`

#### SEO & Metadata
- Comprehensive metadata setup in layout.tsx
- OpenGraph and Twitter card optimization
- Portuguese locale configuration (pt-BR)
- Proper meta tags for dental clinic business

### Configuration Notes

#### ESLint & TypeScript
- ESLint uses Next.js recommended config with TypeScript support
- TypeScript strict mode enabled
- Build errors are ignored in production (development-focused project)

#### Tailwind CSS
- Uses v4 with PostCSS plugin
- Custom animations defined in styles/animations.css
- Responsive design optimized for dental clinic use case

#### Image Handling
- Sharp configured for WebP/AVIF generation
- Custom compression scripts in `/scripts/`
- Lazy loading implementation for performance

## Important Development Notes

### Working with Images
- Always run image compression scripts after adding new images
- Use the LazyImage component for non-critical images
- Critical images (like hero images) should be preloaded in layout.tsx

### Performance Considerations
- Components use dynamic imports where appropriate
- Framer Motion is optimized with LazyMotion
- Next.js Image component should be used for all images

### Styling Guidelines
- Follow Tailwind CSS utility-first approach
- Custom CSS only when necessary in styles/ directory
- Animations should be performant and respect user preferences

### Navigation
- Use the navigation helpers in `lib/navigation.ts` for smooth scrolling
- Header includes smooth scroll functionality to page sections