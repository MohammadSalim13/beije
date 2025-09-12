import { localization } from '@/@utilities/localization';
import {
  ABOUT,
  CREATE_YOUR_OWN_PACKAGE,
  DONATION_CULTURE,
  PERIOD_TEST,
  PRODUCTS,
} from '@/@utilities/routes';

const { menuItems } = localization;

export const HEADER_NAV_ITEMS = [
  { label: menuItems.allProducts, link: PRODUCTS },
  { label: menuItems.aboutUs, link: ABOUT },
  { label: menuItems.donationCulture, link: DONATION_CULTURE },
  { label: menuItems.periodTest, link: PERIOD_TEST },
  { label: menuItems.createYourOwnPackage, link: CREATE_YOUR_OWN_PACKAGE },
];
