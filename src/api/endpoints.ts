// API Endpoints Constants
export const API_ENDPOINTS = {
  // Products
  PRODUCTS: "/products",
  PRODUCT_BY_ID: (id: string) => `/products/${id}`,
  PRODUCTS_BY_CATEGORY: (category: string) => `/products/category/${category}`,

  // Categories
  CATEGORIES: "/categories",
  CATEGORY_BY_ID: (id: string) => `/categories/${id}`,

  // Cart
  CART: "/cart",
  CART_ADD_ITEM: "/cart/items",
  CART_UPDATE_ITEM: (itemId: string) => `/cart/items/${itemId}`,
  CART_REMOVE_ITEM: (itemId: string) => `/cart/items/${itemId}`,

  // Auth
  AUTH_LOGIN: "/auth/login",
  AUTH_REGISTER: "/auth/register",
  AUTH_LOGOUT: "/auth/logout",
  AUTH_REFRESH: "/auth/refresh",
  AUTH_PROFILE: "/auth/profile",

  // Orders
  ORDERS: "/orders",
  ORDER_BY_ID: (id: string) => `/orders/${id}`,
  ORDER_CREATE: "/orders",

  // User
  USER_PROFILE: "/user/profile",
  USER_ADDRESSES: "/user/addresses",
  USER_ORDERS: "/user/orders",
} as const;
