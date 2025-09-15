import { Box, Skeleton } from '@mui/material';
import Image from 'next/image';

import { localization } from '@/@utilities/localization';

import chevron from '~/icon/chevron-right.svg';

export default function ProductCardSkeleton() {
  return (
    <Box className='flex w-full cursor-pointer flex-col gap-4'>
      <Skeleton variant='rectangular' height={135} className='w-full' />
      <Box className='flex items-center gap-3'>
        <Skeleton variant='text' width={120} height={24} className='grow' />
        <Image src={chevron} width={24} height={24} alt={localization.continue} />
      </Box>
    </Box>
  );
}
