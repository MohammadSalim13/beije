'use client';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HEADER_NAV_ITEMS } from '@/components/layout/@helpers/constants';
import Item from '@/components/layout/header/nav/item';

import { RootState } from '@/store';
import { useGetProductsAndPacketsQuery } from '@/store/services/products/api';
import { setUser } from '@/store/slices/global/global-slice';

export default function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.global.user);
  const { data, isLoading } = useGetProductsAndPacketsQuery();
  useEffect(() => {
    dispatch(setUser({ name: 'Salim' }));
  }, []);
  useEffect(() => {
    console.log('salim data', data, user, isLoading);
  }, [data]);
  return (
    <Box className='flex w-fit items-center justify-center gap-8'>
      {HEADER_NAV_ITEMS.map((item) => (
        <Item key={item.label} {...item} />
      ))}
    </Box>
  );
}
