export * from "./endpoint-constants";

// App Constants
export const APP_NAME = "The Face Shop";
export const ITEMS_PER_PAGE = 12;
export const MAX_CART_QUANTITY = 99;

// UI Constants
export const NAVBAR_HEIGHT = 80;
export const MOBILE_BREAKPOINT = 768;

// Query Keys for React Query
export const QUERY_KEYS = {
  PRODUCTS: "products",
  PRODUCT: "product",
  CATEGORIES: "categories",
  CATEGORY: "category",
  CART: "cart",
  USER: "user",
  ORDERS: "orders",
  ORDER: "order",
} as const;
