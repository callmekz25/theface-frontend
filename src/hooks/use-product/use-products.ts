import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';
import productApi from '@/services/api/product-api';
import type { ProductSearchRequest } from '@/models/product.model';

// Query keys
const QUERY_KEYS = {
  PRODUCTS: 'products',
  PRODUCT: 'product',
  CATEGORIES: 'categories',
  CATEGORY: 'category',
} as const;

// Hook to get all products
export const useGetAllProducts = (params: ProductSearchRequest) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS, params],
    queryFn: () => productApi.getAll(params),
  });
};

export const useGetProductBySlug = (slug: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCT, slug],
    queryFn: () => productApi.getBySlug(slug),
    enabled: !!slug,
  });
};

// // Hook to get single product by ID
// export const useProduct = (id: string): UseQueryResult<Product, Error> => {
//   return useQuery({
//     queryKey: [QUERY_KEYS.PRODUCT, id],
//     queryFn: () => productService.getProductById(id),
//     enabled: !!id,
//   });
// };

// // Hook to get product by slug
// export const useProductBySlug = (
//   slug: string,
// ): UseQueryResult<Product, Error> => {
//   return useQuery({
//     queryKey: [QUERY_KEYS.PRODUCT, 'slug', slug],
//     queryFn: () => productService.getProductBySlug(slug),
//     enabled: !!slug,
//   });
// };
