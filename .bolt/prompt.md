# Daniel Di Martino Website Clone

## Project Description
A professional, fully responsive website clone of Daniel Di Martino's personal site. The site showcases a speaker and economist's portfolio with multiple sections including hero, about, affiliations, and contact form.

## Tech Stack
- Next.js 15.3.2 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons
- Bun package manager

## Key Features
- Fixed navigation bar with social icons
- Hero section with background image overlay
- Speaker section with topics list
- Economist section with research areas
- Media logos showcase ("As seen on")
- About section with circular profile image
- Quote section with background image
- Affiliations section with organization cards (black background)
- Wave dividers between sections
- Contact form with validation
- Footer with social links
- Fully responsive design
- Serif font (Libre Baskerville) for headings
- Sans-serif font (Inter) for body text

## Project Structure
- `src/app/page.tsx` - Main homepage with all sections
- `src/app/layout.tsx` - Root layout
- `src/app/globals.css` - Global styles with font imports
- `src/components/ui/` - shadcn/ui components (button, input, textarea)
- `src/lib/utils.ts` - Utility functions

## Development
Run `bun install` then `bun run dev` to start development server on port 3000.

## Design Notes
- Color scheme: Black (#000000), White (#FFFFFF), Gray shades
- Rounded corners on buttons and cards (rounded-full, rounded-3xl)
- Wave SVG dividers between major sections
- Images from same-assets.com CDN
- Smooth scroll behavior enabled
