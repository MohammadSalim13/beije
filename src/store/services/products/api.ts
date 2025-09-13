import { GET_PACKETS_AND_PRODUCTS } from '@/store/services/api-routes';
import { baseApi } from '@/store/services/baseApi';
import { ProductAndPackets } from '@/store/services/products/type';

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductsAndPackets: builder.query<ProductAndPackets, void>({
      query: () => GET_PACKETS_AND_PRODUCTS,
      keepUnusedDataFor: 300,
      transformResponse: (response: { success: boolean; data: ProductAndPackets }) => {
        return response.data;
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsAndPacketsQuery } = productsApi;
