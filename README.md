# Siami LLC — Telecom & Software Consulting

A React-based website for Siami LLC, a DFW-area consulting and staffing firm specializing in telecom, software, AI, consulting, and staffing engagements.

## Project Structure

```
src/
├── components/
│   ├── App.tsx                 # Main app shell
│   ├── Header.tsx              # Navigation header with mobile menu
│   ├── Hero.tsx                # Hero section with stats
│   ├── EngagementModels.tsx    # Five engagement model cards
│   ├── PracticeAreas.tsx       # Practice area cards
│   ├── WhySiami.tsx            # Why Siami value proposition
│   ├── About.tsx               # Company background
│   ├── ContactSection.tsx      # Contact form and info
│   ├── ContactForm.tsx         # Form component
│   └── SectionHeader.tsx       # Reusable section header
├── main.tsx                    # Entry point
└── types.d.ts                  # TypeScript declarations
styles.css                       # Global styles
index.html                       # HTML template
```

## Technologies

- **React 18** with JSX automatic transform
- **TypeScript** for type safety
- **Vite** for fast development and optimized builds
- **Custom CSS** for styling

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server (hot reload on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The project uses:
- React 18 with automatic JSX transform (no need to import React in components)
- Vite for HMR (Hot Module Replacement) during development
- TypeScript for type safety
- Modern ES modules throughout

## Features

- Responsive mobile-first design
- Mobile hamburger menu with smooth animations
- Sticky header navigation
- Hero section with animated mesh background
- Five engagement model cards
- Practice area showcase
- Why Siami value proposition panel
- Contact form with submission feedback
- Full company information and tags
