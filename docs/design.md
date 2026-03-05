# UI Implementation Instructions

## UI Source

You must implement the UI **based strictly on the reference images provided for each page**.

The images are located in:

design/

Each page has a corresponding UI image that must be followed.

---

## Requirements

1. You must recreate the layout exactly based on the provided UI images.
2. Do not invent new layouts.
3. Spacing, sections, and component order must match the UI images.
4. You may adapt colors or typography slightly but the structure must remain identical.
5. All pages must include the same header and navigation layout.

---

## Required Global Components

### Header

Create a reusable header component that appears on every page.

Header must include:

- Logo (left)
- Navigation menu
- Search bar
- Cart icon
- User account icon

Navigation menu items:

- Home
- Products
- Categories
- About
- Contact

---

### Banner Slider

The homepage must contain a **banner slider** section below the header.

Requirements:

- Full-width banner
- Image slider
- Navigation arrows
- Pagination dots
- Auto-play enabled

Create component:

components/BannerSlider.tsx

---

## Component Rules

Follow these rules strictly:

- Each UI section must be a separate reusable component.
- Pages must only compose components.
- Do not place large UI blocks directly inside pages.

Example:

HomePage
Header
BannerSlider
CategorySection
ProductGrid
Footer

---

## UI Accuracy Requirement

The generated UI must match the reference images in:

design/

You must replicate:

- layout
- section order
- spacing
- grid structure
- UI hierarchy

If something is unclear in the image, choose the simplest interpretation.

---

## Important Rules

Do NOT:

- redesign the UI
- change layout structure
- remove sections shown in the UI image

You must follow the reference design strictly.
