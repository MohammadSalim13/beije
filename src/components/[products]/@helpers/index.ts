import { PRODUCT_GUIDE } from '@/components/[products]/@helpers/constants';

import { Product, SubProduct } from '@/store/services/products/type';

import { CartItem } from './hooks/use-cart-context/type';

export function getProductGuid(title: string): string {
  return PRODUCT_GUIDE?.[title as keyof typeof PRODUCT_GUIDE] || '';
}

export function getProductsExitsInCart(cart: CartItem[], products?: Product[]): Product[] {
  if (!products?.length) {
    return [];
  }
  const ids = new Set(cart.map((item) => item._id));
  return products.filter((product) => product.subProducts.find((sub) => ids.has(sub._id)));
}

export function getSubProductsInCart(product: Product, cart: CartItem[]) {
  const cartMap = new Map(cart.map((item) => [item._id, item]));

  return product.subProducts.reduce<(SubProduct & CartItem)[]>((acc, subProduct) => {
    const subProductInCart = cartMap.get(subProduct._id);
    if (subProductInCart) {
      acc.push({ ...subProduct, ...subProductInCart });
    }
    return acc;
  }, []);
}

export function calcTotalPrice(products: Product[] | undefined, cart: CartItem[]): number {
  const priceMap = new Map<string, number>();
  if (!products) {
    return 0;
  }
  products.forEach((product) => {
    product.subProducts.forEach((sub) => {
      priceMap.set(sub._id, sub.price);
    });
  });

  return cart.reduce((total, item) => {
    const price = priceMap.get(item._id) ?? 0;
    return total + price * item.count;
  }, 0);
}
