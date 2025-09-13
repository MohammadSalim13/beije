import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { localization } from '@/@utilities/localization';
import {
  ABOUT,
  CREATE_YOUR_OWN_PACKAGE,
  DONATION_CULTURE,
  PERIOD_TEST,
  PRODUCTS,
} from '@/@utilities/routes';

import facebook from '~/icon/facebook.svg';
import instagram from '~/icon/instagram.svg';
import linkedin from '~/icon/linkedin.svg';
import spotify from '~/icon/spotify.svg';
import twitter from '~/icon/twitter.svg';

const { menuItems, footer: footerLocalization } = localization;

export const HEADER_NAV_ITEMS = [
  { label: menuItems.allProducts, link: PRODUCTS },
  { label: menuItems.aboutUs, link: ABOUT },
  { label: menuItems.donationCulture, link: DONATION_CULTURE },
  { label: menuItems.periodTest, link: PERIOD_TEST },
  { label: menuItems.createYourOwnPackage, link: CREATE_YOUR_OWN_PACKAGE },
];

export const footerLinks: {
  id: number;
  label: string;
  icon?: StaticImport;
}[][] = [
  [
    { id: 1, label: footerLocalization.pads },
    { id: 2, label: footerLocalization.ped },
    { id: 3, label: footerLocalization.tampon },
  ],
  [
    { id: 4, label: footerLocalization.where },
    { id: 5, label: footerLocalization.blog },
    { id: 6, label: footerLocalization.faq },
    { id: 7, label: footerLocalization.join },
  ],
  [
    { id: 8, label: footerLocalization.facebook, icon: facebook },
    { id: 9, label: footerLocalization.instagram, icon: instagram },
    { id: 10, label: footerLocalization.twitter, icon: twitter },
    { id: 11, label: footerLocalization.linkedin, icon: linkedin },
    { id: 12, label: footerLocalization.spotify, icon: spotify },
  ],
];

export const otherLinks = [
  footerLocalization.kvkk,
  footerLocalization.form,
  footerLocalization.membership,
  footerLocalization.policy,
  footerLocalization.cookiePolicy,
  footerLocalization.test,
];
