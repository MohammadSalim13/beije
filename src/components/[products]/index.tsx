'use client';
import { Box } from '@mui/material';

import { CartContextProvider } from '@/components/[products]/@helpers/hooks/use-cart-context';
import Cart from '@/components/[products]/cart';
import ProductList from '@/components/[products]/product-list';

export default function Products() {
  return (
    <CartContextProvider>
      <Box className='max-w-large mx-auto my-10 flex flex-col justify-between gap-8 md:flex-row md:gap-4'>
        <ProductList />
        <Cart />
      </Box>
    </CartContextProvider>
  );
}
