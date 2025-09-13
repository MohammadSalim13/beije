import { GET_USER_PROFILE, POST_USER_SIGN_IN } from '@/store/services/api-routes';
import { baseApi } from '@/store/services/baseApi';
import { SignInBody, User } from '@/store/services/user/type';

import { CredentialModel } from '@/models/credential.model';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<User, void>({
      query: () => GET_USER_PROFILE,
      transformResponse: (response: { success: boolean; data: User }) => {
        return response.data;
      },
    }),
    postUserLogin: builder.mutation<CredentialModel, SignInBody>({
      query: (credentials) => ({
        url: POST_USER_SIGN_IN,
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: { success: boolean; data: CredentialModel }) => {
        return response.data;
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserProfileQuery, usePostUserLoginMutation } = userApi;
