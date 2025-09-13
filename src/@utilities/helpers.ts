import { ProductType } from '@/store/services/products/type';

import menstrualIcon from '~/icon/product-menstrual.svg';
import otherIcon from '~/icon/product-others.svg';

export function productTypeIconMapper(type: keyof typeof ProductType) {
  switch (type) {
    case ProductType.Menstrual:
      return menstrualIcon;
    default:
      return otherIcon;
  }
}
