import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { SSO_LIST } from '@/components/[login]/@helpers/constant';
import { loginLocalization } from '@/components/[login]/@helpers/localization';

export default function SSO() {
  return (
    <Box className='flex flex-col gap-6'>
      <Box className='flex h-12'>
        <Box className='flex w-full cursor-pointer items-center justify-center border-b-2 border-[#444]'>
          <Typography>{loginLocalization.login}</Typography>
        </Box>
        <Box className='flex w-full cursor-pointer items-center justify-center'>
          <Typography>{loginLocalization.signup}</Typography>
        </Box>
      </Box>
      <Box className='flex flex-col gap-3 md:flex-row'>
        {SSO_LIST.map((item, index) => (
          <Box
            key={index}
            className='flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-[20px] border'
          >
            <Image src={item.icon} alt={item.label} width={24} height={24} />
            <Typography className='!text-[14px]'>{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
