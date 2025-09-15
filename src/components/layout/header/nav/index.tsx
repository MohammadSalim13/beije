'use client';
import { Box, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';

import ProductCard, { Skeleton } from '@/components/@shared/product-card';
import ProductContainer from '@/components/@shared/product-container';
import { HEADER_NAV_ITEMS } from '@/components/layout/@helpers/constants';
import Item from '@/components/layout/header/nav/item';

import { useGetProductsAndPacketsQuery } from '@/store/services/products/api';

import { generateFixList } from '@/@utilities/helpers';
import { localization } from '@/@utilities/localization';

export default function Nav() {
  const { data, isLoading } = useGetProductsAndPacketsQuery();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (index: number) => {
    // hear we can set the drawer content based on the item hovered
    // we can memoize the content if needed
    // i don't think it's needed now as the content is for 1 item only so i didn't implement it
    if (index === 0) {
      return (open: boolean) => setIsOpen(open);
    }
    // dou to we do not have other nav drawer contents, return empty function instead we can handle drawer items
    // drawer content can be managed in a custom hook
    return () => {};
  };
  return (
    <>
      <Box className='hidden w-fit items-center justify-center gap-8 md:flex'>
        {HEADER_NAV_ITEMS.map((item, index) => (
          <Item key={item.label} {...item} toggleDrawer={toggleDrawer(index)} />
        ))}
      </Box>
      <SwipeableDrawer
        anchor='top'
        className='px-4'
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
              backgroundColor: '#F7F6F5',
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
            {isLoading
              ? generateFixList(6).map((id) => <Skeleton key={id} />)
              : data?.products.map((product) => (
                  <ProductCard key={product._id} {...product} />
                ))}
          </ProductContainer>
          <ProductContainer
            title={localization.packets}
            continueLabel={localization.allPackets}
          >
            {isLoading
              ? generateFixList(4).map((id) => <Skeleton key={id} />)
              : data?.packets.map((packet) => <ProductCard key={packet._id} {...packet} />)}
          </ProductContainer>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
