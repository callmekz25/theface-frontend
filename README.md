# Skincare Microservices Frontend

A modern e-commerce frontend built with React, TypeScript, and Vite following a feature-based architecture.

## Project Structure

```
src/
├── api/                  # API client configuration
├── components/           # Shared components
│   ├── ui/              # UI components
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   └── common/          # Common reusable components
├── features/            # Feature modules
│   ├── product/         # Product feature
│   │   ├── components/  # Product-specific components
│   │   ├── hooks/       # Product hooks (React Query)
│   │   ├── services/    # Product API services
│   │   ├── types/       # Product types & mock data
│   │   └── pages/       # Product pages
│   ├── cart/            # Cart feature
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── pages/
│   └── auth/            # Authentication feature (to be implemented)
├── hooks/               # Shared custom hooks
├── lib/                 # Utility functions
├── routes/              # Router configuration
├── types/               # Global TypeScript types
└── utils/               # Helper functions
```

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **React Router** - Client-side routing
- **TanStack Query** (React Query) - Server state management
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first styling

## Getting Started

### Prerequisites

- Node.js >= 18
- Yarn package manager

### Installation

1. Install dependencies:

```bash
yarn install
```

2. Create a `.env` file:

```bash
cp .env.example .env
```

3. Start the development server:

```bash
yarn dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## Architecture

The project follows a **feature-based architecture**:

- Each feature is self-contained with its own components, hooks, services, and types
- Components follow the pattern: **Component → Hook → Service → API**
- Mock data is used for development until the backend API is ready

### Architecture Flow

```
User Interaction → Component → Custom Hook → Service → API Client
```

## Features

### Implemented Pages

✅ **Home Page** - Hero section, categories, and featured products  
✅ **Product List Page** - Browse all products or filter by category  
✅ **Product Detail Page** - View product details and add to cart  
✅ **Cart Page** - Manage cart items and checkout

### Key Features

- Product browsing with categories
- Product search and filtering
- Shopping cart with localStorage persistence
- Responsive design (mobile-first)
- Loading states and error handling
- Mock data for development

## Mock Data

Currently using mock data for development. Files are located in:

- `features/product/types/index.ts` - Product and category mock data

To switch to real API:

1. Set `USE_MOCK_DATA = false` in:
   - `features/product/services/productService.ts`
   - `features/cart/services/cartService.ts`

2. Update `VITE_API_URL` in `.env` file with your backend API URL

## Design Reference

UI design follows: **https://thefaceshop.com.vn/**

## Code Guidelines

Follow the rules defined in `/RULE.md`:

- ✅ Use TypeScript strict typing
- ❌ No `any` types
- ✅ API calls must be in services layer
- ✅ Use React Query for server state management
- ✅ Components should be small and reusable
- ✅ Follow SOLID principles and clean code practices
- ✅ Define constants for all variables

## API Structure

All API endpoints are defined in `src/api/endpoints.ts` following the pattern:

```
/v1/products
/v1/products/{id}
/v1/cart
etc.
```

## Project Status

- ✅ Project structure setup
- ✅ API client configuration
- ✅ Product feature module
- ✅ Cart feature module
- ✅ Shared components (Header, Footer, Layout)
- ✅ Routing configuration
- ⏳ Authentication feature (planned)
- ⏳ Checkout flow (planned)
- ⏳ User profile (planned)

## License

MIT
