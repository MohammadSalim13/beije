'use client';
import { Box } from '@mui/material';

import { CartContextProvider } from '@/components/[products]/@helpers/hooks/use-cart-context';
import Cart from '@/components/[products]/cart';
import ProductList from '@/components/[products]/product-list';

export default function Products() {
  return (
    <CartContextProvider>
      <Box className='max-w-large mx-auto mb-6 flex justify-between'>
        <ProductList />
        <Cart />
      </Box>
    </CartContextProvider>
  );
}
