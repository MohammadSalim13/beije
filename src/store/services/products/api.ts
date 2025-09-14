import {
  GET_PACKETS_AND_PRODUCTS,
  POST_VERIFY_PACKET_PRICE,
} from '@/store/services/api-routes';
import { baseApi } from '@/store/services/baseApi';
import { ProductAndPackets, VerifyPriceBody } from '@/store/services/products/type';

import { BaseResponse } from '@/models/_base';

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductsAndPackets: builder.query<ProductAndPackets, void>({
      query: () => GET_PACKETS_AND_PRODUCTS,
      keepUnusedDataFor: 300,
      transformResponse: (response: { success: boolean; data: ProductAndPackets }) => {
        return response.data;
      },
    }),
    postVerifyPrice: builder.mutation<BaseResponse, VerifyPriceBody>({
      query: (bodyParams) => ({
        url: POST_VERIFY_PACKET_PRICE,
        method: 'POST',
        body: bodyParams,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsAndPacketsQuery, usePostVerifyPriceMutation } = productsApi;
