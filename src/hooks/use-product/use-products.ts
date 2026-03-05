import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";
import { productService } from "../services/product-service";
import type { Product, Category } from "../types";

// Query keys
const QUERY_KEYS = {
  PRODUCTS: "products",
  PRODUCT: "product",
  CATEGORIES: "categories",
  CATEGORY: "category",
} as const;

// Hook to get all products
export const useProducts = (params?: {
  page?: number;
  pageSize?: number;
  categoryId?: string;
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS, params],
    queryFn: () => productService.getProducts(params),
  });
};

// Hook to get single product by ID
export const useProduct = (id: string): UseQueryResult<Product, Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCT, id],
    queryFn: () => productService.getProductById(id),
    enabled: !!id,
  });
};

// Hook to get product by slug
export const useProductBySlug = (
  slug: string,
): UseQueryResult<Product, Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCT, "slug", slug],
    queryFn: () => productService.getProductBySlug(slug),
    enabled: !!slug,
  });
};

// Hook to get all categories
export const useCategories = (): UseQueryResult<Category[], Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: () => productService.getCategories(),
  });
};

// Hook to get category by slug
export const useCategoryBySlug = (
  slug: string,
): UseQueryResult<Category, Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORY, "slug", slug],
    queryFn: () => productService.getCategoryBySlug(slug),
    enabled: !!slug,
  });
};
