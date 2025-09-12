import { Box } from '@mui/material';

import { HEADER_NAV_ITEMS } from '@/components/layout/@helpers/constants';
import Item from '@/components/layout/header/nav/item';

export default function Nav() {
  return (
    <Box className='flex w-fit items-center justify-center gap-8'>
      {HEADER_NAV_ITEMS.map((item) => (
        <Item key={item.label} {...item} />
      ))}
    </Box>
  );
}
