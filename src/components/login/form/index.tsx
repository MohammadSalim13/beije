import { Box, Button, Divider, Typography } from '@mui/material';

import { loginLocalization } from '@/components/login/@helpers/localization';
import SSO from '@/components/login/form/sso';

export default function Form() {
  return (
    <Box className='flex w-full justify-center px-4 py-8 md:w-1/2 md:py-24'>
      <Box className='flex w-full max-w-108 flex-col gap-6'>
        <Box className='flex flex-col gap-1'>
          <Typography className='text-center !text-[32px] font-bold md:!text-[38px]'>
            {loginLocalization.hello}
          </Typography>
          <Typography className='text-center'>{loginLocalization.welcome}</Typography>
        </Box>
        <Box className='flex flex-col gap-6'>
          <SSO />
          <Divider />
        </Box>
        <Button
          type='submit'
          variant='contained'
          size='large'
          sx={{
            backgroundColor: '#343131',
            color: 'white',
            height: '50px',
            borderRadius: '28px',
            '&:hover': {
              backgroundColor: '#222',
            },
          }}
        >
          {loginLocalization.login}
        </Button>
      </Box>
    </Box>
  );
}
