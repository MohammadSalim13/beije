'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import Skeleton from '@/components/@shared/product-card/skeleton';
import Props from '@/components/@shared/product-card/type';

import { productTypeIconMapper } from '@/@utilities/helpers';
import { localization } from '@/@utilities/localization';

import chevron from '~/icon/chevron-right.svg';

export default function ProductCard({ title, image, type }: Props) {
  return (
    <Box className='flex cursor-pointer flex-col gap-4'>
      <Image
        src={image}
        alt={title}
        width={300}
        height={135}
        className='max-h-[135px] object-cover'
      />
      <Box className='flex items-center gap-3'>
        {type && <Image src={productTypeIconMapper(type)} width={24} height={24} alt={type} />}
        <Typography className='grow'>{title}</Typography>
        <Image src={chevron} width={24} height={24} alt={localization.continue} />
      </Box>
    </Box>
  );
}

export { Skeleton };

// this component is assumed to be used multiple times inside project
