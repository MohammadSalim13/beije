import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { footerLinks } from '@/components/layout/@helpers/constants';

export default function Links() {
  return (
    <Box className='flex w-1/2 grow gap-6'>
      {footerLinks.map((cols, index) => (
        <Box key={`col${index}`} className='flex grow flex-col gap-4'>
          {cols.map((item) => (
            <Box key={item.id} className='flex cursor-pointer gap-2'>
              {item?.icon && <Image src={item.icon} alt={item.label} width={24} height={24} />}
              <Typography>{item.label}</Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
