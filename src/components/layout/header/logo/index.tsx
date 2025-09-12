import { Box } from '@mui/material';
import Image from 'next/image';

import { localization } from '@/@utilities/localization';

import beijeLogo from '~/images/logo.svg';

export default function Logo() {
  return (
    <Box className='w-43'>
      <Image src={beijeLogo} alt={localization.beije} width={60} height={24} />
    </Box>
  );
}
