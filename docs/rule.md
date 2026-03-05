## Coding Rules

1. Use TypeScript strict typing
2. Do not use `any`
3. API calls must be inside `services`
4. React Query must be used for server state
5. Components should be small and reusable
6. Prefer functional components
7. Use hooks for logic reuse
8. Must follow SOLID and clean code
9. Always define constants for varible. Example: API_GET_PRODUCTS=/v1/products
10. Always separate components if code too long and need to optimize prevent re-render

---

## API Rules

All requests go through:

v1/

Example:

GET /v1/products
GET /v1/products/{id}

Use axios instance:

api/client.ts

---

## Example Pattern

Service example:

```ts
export const productService = {
  getProducts: () => api.get("/products"),
};
```
