import { loginLocalization } from '@/components/login/@helpers/localization';

import facebook from '~/icon/facebook-colored.svg';
import google from '~/icon/google-colored.svg';

export const SSO_LIST = [
  { label: loginLocalization.googleLogin, icon: google },
  { label: loginLocalization.facebookLogin, icon: facebook },
];
