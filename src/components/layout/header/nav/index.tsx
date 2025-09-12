'use client';
import { Box, SwipeableDrawer } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { HEADER_NAV_ITEMS } from '@/components/layout/@helpers/constants';
import Item from '@/components/layout/header/nav/item';

import { RootState } from '@/store';
import { useGetProductsAndPacketsQuery } from '@/store/services/products/api';

export default function Nav() {
  const user = useSelector((state: RootState) => state.global.user);
  const { data, isLoading } = useGetProductsAndPacketsQuery();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log('salim data', data, user, isLoading);
  }, [data]);
  return (
    <>
      <Box className='flex w-fit items-center justify-center gap-8'>
        {HEADER_NAV_ITEMS.map((item) => (
          <Item key={item.label} {...item} toggleDrawer={setIsOpen} />
        ))}
      </Box>
      <SwipeableDrawer
        anchor='top'
        open={isOpen}
        className='bg-transparent'
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        slotProps={{
          root: {
            sx: {
              top: 94,
              zIndex: 50,
            },
          },
          paper: {
            sx: {
              top: 94,
            },
          },
          backdrop: {
            onMouseEnter: () => setIsOpen(false),
            sx: {
              backgroundColor: 'rgba(0,0,0,0)',
            },
          },
        }}
      >
        <Box className='top-9 z-10 h-120 bg-red-500'>some content</Box>
      </SwipeableDrawer>
    </>
  );
}
