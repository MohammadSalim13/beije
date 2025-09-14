'use client';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

import { PRODUCT_TAPS } from '@/components/[products]/@helpers/constants';
import { productLocalization } from '@/components/[products]/@helpers/localization';
import Product from '@/components/[products]/product-list/product';

import { useGetProductsAndPacketsQuery } from '@/store/services/products/api';
import { ProductType } from '@/store/services/products/type';

import { cn } from '@/@utilities/helpers';

export default function ProductList() {
  const { data } = useGetProductsAndPacketsQuery();
  const [type, setType] = useState<keyof typeof ProductType>(ProductType.Menstrual);
  const list = data?.products.filter((product) => product.type === type) || [];

  return (
    <Box className='flex max-w-141 flex-col gap-8 px-4 md:px-0'>
      <Box className='flex flex-col gap-6'>
        <Box className='flex items-center justify-between gap-6'>
          <Typography className='!text-[24px] !font-medium'>
            {productLocalization.customPackage}
          </Typography>
          <Button
            variant='text'
            sx={{
              fontSize: 14,
              color: '#222',
              fontWeight: 500,
              textTransform: 'none',
              padding: 0,
            }}
          >
            {productLocalization.howItWorks}
          </Button>
        </Box>
        <Typography className='text-[#00000099]'>
          {productLocalization.productDescription}
        </Typography>
      </Box>
      <Box className='flex'>
        {PRODUCT_TAPS.map((tab) => (
          <Box
            key={tab.type}
            onClick={() => setType(tab.type)}
            className={cn(
              'flex h-12 w-1/2 cursor-pointer items-center justify-center border-b-2 border-transparent',
              type === tab.type && 'border-[#222]',
            )}
          >
            <Typography
              className={cn(
                'text-center !text-[18px] text-[#888]',
                type === tab.type && 'text-[#222]',
              )}
            >
              {tab.label}
            </Typography>
          </Box>
        ))}
      </Box>
      {list.map((product, index) => (
        <Product key={product._id} index={index} {...product} />
      ))}
    </Box>
  );
}
