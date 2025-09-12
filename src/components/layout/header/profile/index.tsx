import { Box } from '@mui/material';
import Image from 'next/image';

import { localization } from '@/@utilities/localization';

import shoppingCart from '~/icon/cart-button.svg';
import user from '~/icon/user.svg';

export default function Profile() {
  return (
    <Box className='flex items-center gap-4'>
      <Image src={shoppingCart} alt={localization.shoopingCart} width={24} height={24} />
      <Image src={user} alt={localization.user} width={24} height={24} />
    </Box>
  );
}
