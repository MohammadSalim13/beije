import { Box } from '@mui/material';

import Logo from '@/components/layout/header/logo';
import Navbar from '@/components/layout/header/nav';
import Profile from '@/components/layout/header/profile';

export default function Header() {
  return (
    <Box className='relative z-100 flex h-[94px] items-center justify-center bg-white'>
      <Box className='mx-4 flex w-full max-w-[1152px] items-center justify-between'>
        <Box className='flex items-center gap-6'>
          <Logo />
          <Navbar />
        </Box>
        <Profile />
      </Box>
    </Box>
  );
}
