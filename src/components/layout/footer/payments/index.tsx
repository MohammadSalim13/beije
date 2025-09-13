import { Box } from '@mui/material';
import Image from 'next/image';

import { localization } from '@/@utilities/localization';

import masterCart from '~/images/master-cart.svg';
import visa from '~/images/visa.svg';

export default function Payments() {
  return (
    <Box className='flex items-center justify-center gap-2'>
      <Image src={masterCart} alt={localization.masterCart} width={48} height={24} />
      <Image src={visa} alt={localization.visa} width={48} height={24} />
    </Box>
  );
}
