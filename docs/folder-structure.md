## Folder Structure

Follow structrue base on feature
src/
│
├── api/
│ ├── client.ts
│ └── endpoints.ts
│
├── components/
│ ├── ui/
│ ├── layout/
│ └── common/
│
├── features/
│ ├── product/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── services/
│ │ ├── types/
│ │ └── pages/
│ │
│ ├── cart/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── services/
│ │ ├── types/
│ │ └── store/
│ │
│ ├── auth/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── services/
│ │ └── types/
│
├── hooks/
│ shared hooks
│
├── lib/
│ utilities
│
├── routes/
│ router configuration
│
├── types/
│ global types
│
├── utils/
│ helper functions
│
├── App.tsx
└── main.tsx
