# Tayo Adebayo — Portfolio

A minimalist, editorial-style personal portfolio website for Tayo Adebayo, a Nigerian product designer and founder based in Lagos.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start (React + Vite) |
| Routing | TanStack Router v1 (file-based) |
| Styling | Tailwind CSS v4 + custom CSS |
| Typography | Instrument Serif + DM Sans (Google Fonts) |
| Deployment | Netlify |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server runs on `http://localhost:3000`. In Netlify dev mode (with function emulation), use port 8888 via the Netlify CLI.

## Design System

- **Background**: `#F5F5F3` — warm off-white
- **Primary text**: `#1C1C1A` — warm near-black
- **Secondary text**: `#8A8A85` — muted warm gray
- **Dividers**: `#E2E2DD` — barely-there warm rule

Fonts are loaded via Google Fonts at render time. The display font (Instrument Serif) pairs with the body font (DM Sans) for an editorial, warm typographic system.
