import { Box, Button, TextField, Typography } from '@mui/material';

import { localization } from '@/@utilities/localization';

const { footer: footerLocalization } = localization;
export default function ContactUs() {
  return (
    <Box className='flex grow flex-col gap-6 px-4 md:mx-0 md:w-1/2'>
      <Typography className='font-bold'>{localization.beije}.</Typography>
      <Box>
        <Typography className='text-[#FFFFFF99]'>{footerLocalization.keepInTouch}</Typography>
        <Typography className='text-[#FFFFFF99]'>
          {footerLocalization.keepInTouchDescription}
        </Typography>
      </Box>
      <Box className='flex gap-4'>
        <TextField
          label={footerLocalization.emailAddress}
          placeholder={footerLocalization.emailAddress}
          type='email'
          className='max-w-90 grow rounded-lg'
          sx={{
            '& .MuiInputLabel-root': {
              color: '#FFFFFF99',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#FFFFFF99',
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              '& fieldset': {
                borderColor: '#FFFFFF99',
              },
              '&:hover fieldset': {
                borderColor: '#FFFFFF99',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FFFFFF99',
              },
            },
            borderColor: '#FFF',
            '& .MuiInputBase-input::placeholder': {
              color: 'white',
            },
          }}
        />
        <Button
          type='submit'
          variant='contained'
          sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '28px',
            '&:hover': {
              backgroundColor: '#ececec',
            },
          }}
        >
          {localization.submit}
        </Button>
      </Box>
      <Typography className='text-[#FFFFFF99]'>
        {footerLocalization.policyDescription}
      </Typography>
    </Box>
  );
}
