import apiClient from '@/api/client';
import type { IProduct, ProductSearchRequest } from '@/models/product.model';

const ENDPOINT = '/products';

const productApi = {
  getAll: async (params: ProductSearchRequest) => {
    const { data } = await apiClient.get<IProduct[]>(ENDPOINT, {
      params,
    });
    return data;
  },

  getBySlug: async (slug: string) => {
    const { data } = await apiClient.get<IProduct>(ENDPOINT + `/slug/${slug}`);
    return data;
  },

  create: async (payload: IProduct) => {
    const { data } = await apiClient.post(ENDPOINT, payload);
    return data;
  },
};
export default productApi;
