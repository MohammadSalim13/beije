'use client';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Form as FormikForm, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { LOGIN_VALIDATION_SCHEMA } from '@/components/login/@helpers/constant';
import { loginLocalization } from '@/components/login/@helpers/localization';
import Inputs from '@/components/login/form/inputs';
import SSO from '@/components/login/form/sso';

import { AppDispatch } from '@/store';
import { useGetUserProfileQuery, usePostUserLoginMutation } from '@/store/services/user/api';
import { SignInBody } from '@/store/services/user/type';
import { showToast } from '@/store/slices/toast';
import { ToastSeverity } from '@/store/slices/toast/type';

import { setUserToken } from '../@helpers';

export default function Form() {
  const dispatch = useDispatch<AppDispatch>();
  const [postUserLogin, { isLoading }] = usePostUserLoginMutation();
  // const { data, refetch } = useGetUserProfileQuery();
  const { refetch } = useGetUserProfileQuery();
  const handleSubmit = async (values: SignInBody) => {
    try {
      const response = await postUserLogin(values).unwrap();
      if (response.token) {
        setUserToken(response.token);
        dispatch(
          showToast({
            message: loginLocalization.successfulLogin,
            severity: ToastSeverity.success,
          }),
        );
        refetch();
      }
    } catch (_) {
      dispatch(
        showToast({ message: loginLocalization.wrongPassword, severity: ToastSeverity.error }),
      );
    }
  };
  // profile query commented out due to an issue that always response even with out cookie or other credentials
  return (
    <Box className='flex w-full justify-center px-4 py-8 pb-16 md:w-1/2 md:py-24'>
      <Box className='flex w-full max-w-108 flex-col gap-6'>
        <Box className='flex flex-col gap-1'>
          <Typography className='text-center !text-[32px] font-bold md:!text-[38px]'>
            {loginLocalization.hello}
          </Typography>
          <Typography className='text-center'>{loginLocalization.welcome}</Typography>
        </Box>
        <Box className='flex flex-col gap-6'>
          <SSO />
          <Divider />
        </Box>
        {/* {data?._id ? (
          <Box>
            <Typography className='text-center'>
              {loginLocalization.loggedInAs(data.profileInfo.firstName)}
            </Typography>
          </Box>
        ) : ( */}
        <Formik
          validateOnChange={false}
          initialValues={{ email: '', password: '' }}
          validationSchema={LOGIN_VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
        >
          <FormikForm className='flex flex-col gap-6'>
            <Inputs />
            <Button
              type='submit'
              variant='contained'
              size='large'
              loading={isLoading}
              sx={{
                backgroundColor: '#343131',
                color: 'white',
                height: '50px',
                borderRadius: '28px',
                '&:hover': {
                  backgroundColor: '#222',
                },
              }}
            >
              {loginLocalization.login}
            </Button>
          </FormikForm>
        </Formik>
        {/* )} */}
      </Box>
    </Box>
  );
}
