import { baseApi } from '@/store/services/baseApi';
import { SignInBody, User } from '@/store/services/user/type';
import { GET_USER_PROFILE, POST_USER_SIGN_IN } from '@/store/services/routes';
import { CredentialModel } from '@/models/credential.model';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<User, number>({
      query: () => GET_USER_PROFILE,
    }),
    postUserSignIn: builder.mutation<CredentialModel, SignInBody>({
      query: (credentials) => ({
        url: POST_USER_SIGN_IN,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserProfileQuery, usePostUserSignInMutation } = userApi;
