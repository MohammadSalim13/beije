import { PRODUCT_GUIDE } from '@/components/[products]/@helpers/constants';

export function getProductGuid(title: string): string {
  return PRODUCT_GUIDE?.[title as keyof typeof PRODUCT_GUIDE] || '';
}
