import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import Props from '@/components/@shared/product-container/type';

import arrow from '~/icon/arrow-right.svg';

export default function ProductContainer({ title, continueLabel, children }: Props) {
  return (
    <Box className='flex flex-col gap-6'>
      <Box className='flex items-center justify-between'>
        <Typography variant='h6' className='font-bold'>
          {title}
        </Typography>
        {continueLabel && (
          <Box className='flex cursor-pointer items-center gap-1.5'>
            <Typography variant='body2' className='font-semibold'>
              {continueLabel}
            </Typography>
            <Image src={arrow} alt={continueLabel} width={24} height={24} />
          </Box>
        )}
      </Box>
      <Box className='flex gap-6'>{children}</Box>
    </Box>
  );
}

// this component is assumed to be used multiple times inside project
