'use client';
import { Box, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';

import ProductCard from '@/components/@shared/product-card';
import ProductContainer from '@/components/@shared/product-container';
import { HEADER_NAV_ITEMS } from '@/components/layout/@helpers/constants';
import Item from '@/components/layout/header/nav/item';

import { useGetProductsAndPacketsQuery } from '@/store/services/products/api';

import { localization } from '@/@utilities/localization';

export default function Nav() {
  const { data } = useGetProductsAndPacketsQuery();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (index: number) => {
    // hear we can set the drawer content based on the item hovered
    // we can memoize the content if needed
    // i don't think it's needed now as the content is for 1 item only so i didn't implement it
    if (index === 0) {
      return (open: boolean) => setIsOpen(open);
    }
    // dou to we do not have other nav drawer contents, return empty function instead we can handle drawer items
    return () => {};
  };
  return (
    <>
      <Box className='flex w-fit items-center justify-center gap-8'>
        {HEADER_NAV_ITEMS.map((item, index) => (
          <Item key={item.label} {...item} toggleDrawer={toggleDrawer(index)} />
        ))}
      </Box>
      <SwipeableDrawer
        anchor='top'
        className='bg-transparent px-4'
        open={isOpen}
        ModalProps={{ keepMounted: true }}
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
        <Box className='max-w-large mx-auto flex min-h-40 w-full flex-col gap-10 pb-16'>
          <ProductContainer title={localization.products}>
            {data?.products.map((product) => <ProductCard key={product._id} {...product} />)}
          </ProductContainer>
          <ProductContainer
            title={localization.packets}
            continueLabel={localization.allPackets}
          >
            {data?.packets.map((packet) => <ProductCard key={packet._id} {...packet} />)}
          </ProductContainer>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
