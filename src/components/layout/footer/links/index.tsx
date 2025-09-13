import { Box, Typography } from '@mui/material';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { footerLinks } from '@/components/layout/@helpers/constants';

export default function Links() {
  const hasIcon = (
    items: {
      id: number;
      label: string;
      icon?: StaticImport | undefined;
    }[],
  ) => {
    return !!items.find((item) => item?.icon);
  };
  return (
    <Box className='grid grow grid-cols-2 gap-0 px-4 md:w-1/2 md:grid-cols-3 md:gap-6 md:px-0'>
      {footerLinks.map((cols, index) => (
        <Box
          key={`col${index}`}
          className={
            hasIcon(cols)
              ? 'col-span-2 flex justify-between p-5 md:col-span-1 md:flex-col md:justify-start md:gap-4 md:p-0'
              : 'flex grow flex-col gap-4'
          }
        >
          {cols.map((item) => (
            <Box key={item.id} className='flex cursor-pointer gap-2'>
              {item?.icon && <Image src={item.icon} alt={item.label} width={24} height={24} />}
              <Typography className={!!item?.icon ? 'hidden md:block' : ''}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
