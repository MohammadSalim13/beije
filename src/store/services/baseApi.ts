import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';

import axios from '@/@utilities/axios-instance';
import STORAGE_KEYS from '@/@utilities/storage-keys';

// use directly axios instance for complex api
export const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }) =>
  async ({
    url,
    method,
    data,
    params,
  }: {
    url: string;
    method: string;
    data?: unknown;
    params?: unknown;
  }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (error: AxiosError | unknown) {
      if (error instanceof AxiosError) {
        return {
          error: { status: error.response?.status, data: error.response?.data },
        };
      }
      throw error;
    }
  };

// use RTK Query for simple api
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
    prepareHeaders: (headers) => {
      const token = Cookies.get(STORAGE_KEYS.TOKEN);
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
