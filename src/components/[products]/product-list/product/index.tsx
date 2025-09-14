import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useState } from 'react';

import { getProductGuid } from '@/components/[products]/@helpers';
import SubProduct from '@/components/[products]/product-list/product/sub-product';
import Props from '@/components/[products]/product-list/product/type';

import { localization } from '@/@utilities/localization';

import heart from '~/icon/heart.svg';

export default function Product({ index, title, subProducts }: Props) {
  const [open, setOpen] = useState(index === 0);
  return (
    <Box className='rounded-2xl bg-white p-4'>
      <Box
        className='flex w-full items-center justify-between focus:outline-none'
        onClick={() => setOpen(!open)}
      >
        <Typography className='!text-[20px] !font-medium'>{title}</Typography>
        <IconButton
          size='small'
          sx={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      <Collapse in={open} timeout='auto'>
        <Box className='flex flex-col gap-4 pt-5'>
          {getProductGuid(title) && (
            <Box className='flex items-start gap-4 rounded-lg bg-[#ECF1CF] px-4 py-5'>
              <Image src={heart} alt={localization.guide} width={32} height={32} />
              <Typography className='!text-[14px] !text-[#444]'>
                {getProductGuid(title)}
              </Typography>
            </Box>
          )}
          {subProducts.map((subProduct) => (
            <SubProduct key={subProduct._id} {...subProduct} />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
}
