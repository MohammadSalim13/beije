import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';

import {
  getProductsExitsInCart,
  getSubProductsInCart,
} from '@/components/[products]/@helpers';
import { useCartContext } from '@/components/[products]/@helpers/hooks/use-cart-context';

import { useGetProductsAndPacketsQuery } from '@/store/services/products/api';
import { Product } from '@/store/services/products/type';

import { formatPrice } from '@/@utilities/helpers';
import { localization } from '@/@utilities/localization';

import trash from '~/icon/trash.svg';

export default function List() {
  const { data } = useGetProductsAndPacketsQuery();
  const { cart, deleteItemsFromCart } = useCartContext();
  const productsList = getProductsExitsInCart(cart, data?.products);
  const deleteProduct = (product: Product) => {
    const subIds = product.subProducts.map((subProduct) => subProduct._id);
    deleteItemsFromCart(subIds);
  };

  if (productsList.length === 0) {
    return null;
  }
  return (
    <Box className='flex flex-col gap-5'>
      {productsList.map((product) => (
        <Box className='flex flex-col gap-5 rounded-lg border border-[#3429291F] p-4'>
          <Box className='flex items-center justify-between'>
            <Typography className='!text-[18px] !font-medium'>{product.title}</Typography>
            <IconButton
              aria-label={localization.delete}
              onClick={() => deleteProduct(product)}
            >
              <Image src={trash} alt={localization.delete} width={24} height={24} />
            </IconButton>
          </Box>
          {getSubProductsInCart(product, cart).map((subProduct) => (
            <Box className='flex items-center justify-between'>
              <Typography>{`${subProduct.count} ${subProduct.name}`}</Typography>
              <Typography>
                {localization.priceInLira(formatPrice(subProduct.count * subProduct.price))}
              </Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
