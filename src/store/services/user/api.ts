import { baseApi } from '@/store/services/baseApi';
import { User } from '@/store/services/user/type';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, number>({
      query: (id) => `user/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserQuery } = userApi;
