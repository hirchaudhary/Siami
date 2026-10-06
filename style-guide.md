# Siami — Website Style Guide

Raw design specs for the site: fonts, sizes, colors, spacing. Use this as the reference sheet for future edits or handing off to a designer/developer.

---

## 1. Fonts

Loaded via Google Fonts:
```
Space Grotesk: 400, 500, 600, 700
Inter: 400, 500, 600, 700
IBM Plex Mono: 400, 500
```

| Font | Role | Used for |
|---|---|---|
| **Space Grotesk** | Display / headline | Logo wordmark, all `h1–h4`, section headings |
| **Inter** | Body | Paragraphs, nav links, buttons, form fields |
| **IBM Plex Mono** | Utility / label | Eyebrows, tags, stat labels, "spec sheet" style tags, footer meta text |

---

## 2. Color Palette

### Navy — backgrounds
| Name | Hex |
|---|---|
| Navy 950 | `#0A1424` |
| Navy 900 | `#0F1E35` |
| Navy 800 | `#16294A` |
| Navy 700 | `#1F3760` |

### Accents
| Name | Hex | Used for |
|---|---|---|
| Coral 500 | `#FF6B4A` | Primary accent — buttons, CTAs, "Sia" in logo |
| Coral 400 | `#FF8567` | Hover state on coral elements |
| Amber 400 | `#E8A94C` | Secondary accent — eyebrow labels, "Mira" in logo, signal dots |

### Neutrals
| Name | Hex | Used for |
|---|---|---|
| Paper 50 | `#F7F5F0` | Main light background |
| Paper 100 | `#EFEBE2` | Alternate/striped section background |
| Slate 600 | `#5B6472` | Secondary body text on light backgrounds |
| Slate 500 | `#7A8390` | Muted labels |
| Ink 900 | `#12181F` | Primary text color |

### Lines / borders
| Name | Value |
|---|---|
| Line (light) | `rgba(18,24,31,0.1)` |
| Line (dark) | `rgba(247,245,240,0.14)` |

---

## 3. Type Scale (as used on the page)

| Size | Where |
|---|---|
| `clamp(36px, 5.2vw, 62px)` | Hero H1 (fluid — scales with viewport) |
| `clamp(28px, 3.4vw, 38px)` | Section H2 (Engagement Models, Practice Areas, Contact) |
| `clamp(26px, 3vw, 34px)` | About H2 |
| 28px | Hero stat numbers |
| 26px | Logo wordmark (nav) |
| 24px | Why-panel heading / stacked logo variant |
| 21px | Logo wordmark, mobile |
| 19px | Practice card headings |
| 18px | Hero lead paragraph |
| 17px | Engagement model card headings |
| 16.5px | Why-item headings |
| 16px | Section intro paragraphs |
| 15.5px | About paragraph text, contact info values |
| 15px | Buttons, nav CTA |
| 14.5px | Nav links, why-panel body, form submit |
| 14px | Practice card body text, about tags |
| 13.5px | Engagement model card descriptions |
| 13px | Why-item body text, footer text |
| 12.5px | Hero eyebrow label |
| 12px | Section "tag" eyebrows, about-tags labels |
| 11.5px | Hero stat labels, form field labels, contact info labels |

**Base body text:** 16px (browser default via Inter), line-height `1.5`.

---

## 4. Font Weights

| Weight | Used for |
|---|---|
| 700 (Bold) | Hero H1, logo wordmark, nav CTA button, stat numbers |
| 600 (Semibold) | H2/H3/H4 headings (default), buttons, form submit |
| 500 (Medium) | Nav links |
| 400 (Regular) | Body copy, mono labels |

---

## 5. Spacing / Layout

| Element | Value |
|---|---|
| Max content width | 1180px (`.wrap`) |
| Side padding (desktop) | 32px |
| Side padding (mobile ≤640px) | 20px |
| Section vertical padding | 96px top/bottom |
| Hero padding | 100px top / 120px bottom |
| Nav height | 76px |
| Border radius (buttons, cards) | 3–4px |

---

## 6. Breakpoints

| Breakpoint | Applies to |
|---|---|
| `max-width: 960px` | Engagement model grid → 2 columns |
| `max-width: 860px` | Practice cards, Why grid, About grid → stack/2-col |
| `max-width: 760px` | Hero stats → 2 columns |
| `max-width: 640px` | General mobile padding, logo shrink |
| `max-width: 560px` | Engagement models & Practice cards → 1 column |

---

## 7. Logo Spec

- **Icon:** two circles (r=10.5, 72×72 viewBox), coral `#FF6B4A` (Sia) and amber `#E8A94C` (Mira), joined by a 2.5px connecting line, meeting at a small navy center dot (r=3).
- **Wordmark:** "SIA" in Coral 500, "MI" in Amber 400, set in Space Grotesk 700.
- **Suffix:** none; the brand wordmark is kept as “Siami” in the primary logo treatment.
- **Nav size:** 42px icon / 26px wordmark (desktop), 34px icon / 21px wordmark (mobile).
