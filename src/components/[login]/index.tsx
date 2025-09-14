import { Box } from '@mui/material';
import Image from 'next/image';

import Form from '@/components/[login]/form';

import { localization } from '@/@utilities/localization';

import loginHero from '~/images/login-hero.jpg';

export default function Login() {
  return (
    <Box className='flex'>
      <Image
        src={loginHero}
        alt={localization.beije}
        width={720}
        height={820}
        className='hidden aspect-[720/820] w-1/2 object-cover md:block'
      />
      <Form />
    </Box>
  );
}
