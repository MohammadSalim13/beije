import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { useGetUserProfileQuery } from '@/store/services/user/api';
import { selectCartCount } from '@/store/slices/global';

import { localization } from '@/@utilities/localization';
import { LOGIN } from '@/@utilities/routes';

import shoppingCart from '~/icon/cart-button.svg';
import user from '~/icon/user.svg';

export default function Profile() {
  useGetUserProfileQuery();
  const cartCount = useSelector(selectCartCount);

  return (
    <Box className='flex items-center gap-4'>
      <Box className='relative'>
        <Image src={shoppingCart} alt={localization.shoopingCart} width={24} height={24} />
        {!!cartCount && (
          <Box className='absolute -top-1 -right-1.5 h-4 w-4 min-w-fit rounded-2xl bg-black'>
            <Typography className='text-center !text-[12px] leading-3 !text-white'>
              {cartCount}
            </Typography>
          </Box>
        )}
      </Box>
      <Link href={LOGIN}>
        <Image src={user} alt={localization.user} width={24} height={24} />
      </Link>
    </Box>
  );
}
