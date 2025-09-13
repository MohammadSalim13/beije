import { Box } from '@mui/material';
import Image from 'next/image';

import ContactUs from '@/components/layout/footer/contact-us';
import Links from '@/components/layout/footer/links';
import OtherLinks from '@/components/layout/footer/other-links';
import Payments from '@/components/layout/footer/payments';

import { localization } from '@/@utilities/localization';

import footerHead from '~/images/footer-head.png';

export default function Footer() {
  return (
    <>
      <Image
        src={footerHead}
        width={1920}
        height={32}
        alt={localization.wave}
        className='min-w-large w-screen object-cover'
      />
      <Box className='flex flex-col items-center justify-center bg-[#262626] py-20 text-white'>
        <Box className='max-w-large flex gap-8 border-b border-[#FFFFFF99] pb-16'>
          <ContactUs />
          <Links />
        </Box>
        <OtherLinks />
        <Payments />
      </Box>
    </>
  );
}
