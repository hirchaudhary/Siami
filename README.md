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

- **React 18** (via CDN with classic JSX transform)
- **TypeScript** for type safety
- **Custom CSS** for styling

## Installation & Setup

```bash
# Install dependencies (if needed)
npm install

# Build the TypeScript source
npm run build

# Start the development server
npm start
```

The app will be available at `http://localhost:3000`

## Build

```bash
npm run build
```

Compiles TypeScript files from `src/` to the `dist/` directory using ES2020 targets.

## Development

The project uses:
- Classic JSX transform (requires `declare const React: any` in each JSX file)
- TypeScript without strict mode for flexibility
- HTTP server on port 3000 for development

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
