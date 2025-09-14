import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { selectCartCount } from '@/store/slices/global';

import { localization } from '@/@utilities/localization';
import { LOGIN } from '@/@utilities/routes';

import shoppingCart from '~/icon/cart-button.svg';
import user from '~/icon/user.svg';

export default function Profile() {
  const cartCount = useSelector(selectCartCount);

  return (
    <Box className='flex items-center gap-4'>
      <Box className='relative'>
        <Image src={shoppingCart} alt={localization.shoopingCart} width={24} height={24} />
        {!!cartCount && (
          <Box className='absolute -top-1 -right-1.5 h-4 w-4 rounded-2xl bg-black'>
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
