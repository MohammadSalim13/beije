'use client';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { calcTotalPrice } from '@/components/[products]/@helpers';
import { useCartContext } from '@/components/[products]/@helpers/hooks/use-cart-context';
import { productLocalization } from '@/components/[products]/@helpers/localization';
import List from '@/components/[products]/cart/list';

import { AppDispatch } from '@/store';
import {
  useGetProductsAndPacketsQuery,
  usePostVerifyPriceMutation,
} from '@/store/services/products/api';
import { incrementCartCount } from '@/store/slices/global';
import { showToast } from '@/store/slices/toast';
import { ToastSeverity } from '@/store/slices/toast/type';

import { formatPrice } from '@/@utilities/helpers';

export default function Cart() {
  const { cart, clearCart } = useCartContext();
  const { data } = useGetProductsAndPacketsQuery();
  const dispatch = useDispatch<AppDispatch>();

  const [postVerifyPrice, { isLoading }] = usePostVerifyPriceMutation();

  const isDisable = cart.length === 0;
  const totalPrice = calcTotalPrice(data?.products, cart);

  const handleVerify = async () => {
    const params = {
      packet: cart,
      totalPrice,
    };
    try {
      const response = await postVerifyPrice(params).unwrap();
      if (response.success) {
        clearCart();
        dispatch(
          incrementCartCount(),
          showToast({
            message: productLocalization.submitPacketSuccess,
            severity: ToastSeverity.success,
          }),
        );
      }
    } catch (_) {
      dispatch(
        showToast({
          message: productLocalization.submitPacketError,
          severity: ToastSeverity.error,
        }),
      );
    }
  };

  return (
    <Box className='bottom-0 flex h-fit flex-col gap-8 rounded-2xl bg-white p-8 md:sticky md:top-6 md:w-[466px]'>
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
        loading={isLoading}
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
        onClick={handleVerify}
      >
        {productLocalization.addToCart(formatPrice(totalPrice))}
      </Button>
    </Box>
  );
}
