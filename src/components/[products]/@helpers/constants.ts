import { productLocalization } from '@/components/[products]/@helpers/localization';

import { ProductType } from '@/store/services/products/type';

export const PRODUCT_TAPS = [
  {
    label: productLocalization.menstrualProducts,
    type: ProductType.Menstrual,
  },
  {
    label: productLocalization.otherProducts,
    type: ProductType.Other,
  },
];

export const PRODUCT_GUIDE = {
  'beije Ped': productLocalization.pedGuide,
  'beije Günlük Pad': productLocalization.padGuide,
};
