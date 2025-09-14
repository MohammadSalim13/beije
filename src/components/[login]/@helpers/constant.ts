import * as Yup from 'yup';

import { loginLocalization } from '@/components/[login]/@helpers/localization';

import facebook from '~/icon/facebook-colored.svg';
import google from '~/icon/google-colored.svg';

export const SSO_LIST = [
  { label: loginLocalization.googleLogin, icon: google },
  { label: loginLocalization.facebookLogin, icon: facebook },
];

export const LOGIN_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string()
    .email(loginLocalization.validEmail)
    .required(loginLocalization.requiredEmail),
  password: Yup.string().required(loginLocalization.requiredPassword),
});
