import { Box } from '@mui/material';
import Link from 'next/link';

import Props from '@/components/layout/header/nav/item/type';

export default function Item({ label, link }: Props) {
  return (
    <Box className='flex h-11 items-center'>
      <Link href={link} className='hover:underline'>
        {label}
      </Link>
    </Box>
  );
}
