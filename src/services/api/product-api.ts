import apiClient from '@/api/client';

const ENDPOINT = '/products';

const productApi = {
  getAll: async () => {
    const { data } = await apiClient.get(ENDPOINT);
    return data;
  },

  create: async (payload) => {
    const { data } = await apiClient.post(ENDPOINT, payload);
    return data;
  },
};
export default productApi;
