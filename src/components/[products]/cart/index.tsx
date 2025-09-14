'use client';
import { Box, Button, Typography } from '@mui/material';

import { calcTotalPrice } from '@/components/[products]/@helpers';
import { useCartContext } from '@/components/[products]/@helpers/hooks/use-cart-context';
import { productLocalization } from '@/components/[products]/@helpers/localization';
import List from '@/components/[products]/cart/list';

import { useGetProductsAndPacketsQuery } from '@/store/services/products/api';

import { formatPrice } from '@/@utilities/helpers';

export default function Cart() {
  const { cart } = useCartContext();
  const { data } = useGetProductsAndPacketsQuery();

  const isDisable = cart.length === 0;
  return (
    <Box className='sticky top-6 flex h-fit w-[466px] flex-col gap-8 rounded-2xl bg-white p-8'>
      <Box className='flex flex-col gap-6'>
        <Box className='flex items-center justify-between'>
          <Typography className='!text-[24px] !font-medium'>
            {productLocalization.packet}
          </Typography>
          <Box className='flex items-center justify-center gap-2 rounded-lg bg-[#D2E7E0] px-3 py-1.5'>
            <Box className='h-2 w-2 rounded-lg bg-[#0EB9B3]' />
            <Typography className='!text-[12px]'>{productLocalization.packetLabel}</Typography>
          </Box>
        </Box>
        <Typography className='!text-[#666]'>
          {productLocalization.packetDescription}
        </Typography>
      </Box>
      <List />
      <Button
        type='submit'
        variant='contained'
        size='large'
        // loading={isLoading}
        disabled={isDisable}
        sx={{
          backgroundColor: '#343131',
          color: 'white',
          height: '50px',
          borderRadius: '28px',
          '&:hover': {
            backgroundColor: '#222',
          },
        }}
      >
        {productLocalization.addToCart(formatPrice(calcTotalPrice(data?.products, cart)))}
      </Button>
    </Box>
  );
}
