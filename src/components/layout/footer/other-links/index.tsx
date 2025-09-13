import { Box, Typography } from '@mui/material';

import { otherLinks } from '@/components/layout/@helpers/constants';

import { localization } from '@/@utilities/localization';

const { footer: footerLocalization } = localization;
export default function OtherLinks() {
  return (
    <Box className='max-w-large flex w-full justify-between py-8'>
      <Typography className='text-[#FFFFFF99]'>{footerLocalization.rights}</Typography>
      <Box className='flex gap-6'>
        {otherLinks.map((link, index) => (
          <Typography key={index} className='text-[#FFFFFF99]'>
            {link}
          </Typography>
        ))}
      </Box>
      <Box className='flex gap-2 text-[#FFFFFF99]'>
        <Typography className='cursor-pointer font-bold text-[#FFFFFF99]'>
          {footerLocalization.english}
        </Typography>
        |
        <Typography className='cursor-pointer font-bold text-white'>
          {footerLocalization.turkish}
        </Typography>
      </Box>
    </Box>
  );
}
