import { Box, Button, styled, TextField } from '@mui/material';
import { useFormikContext } from 'formik';

import { loginLocalization } from '@/components/[login]/@helpers/localization';
import { FormValues } from '@/components/[login]/form/type';

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: 8,
  '& .MuiOutlinedInput-root': {
    margin: 0,
    borderRadius: 8,
    paddingRight: 0,
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function Inputs() {
  const { values, errors, touched, handleChange, setFieldTouched, handleBlur } =
    useFormikContext<FormValues>();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    handleChange(e);
    if (touched[name as keyof FormValues]) {
      setFieldTouched(name as keyof FormValues, false, false);
    }
  };

  return (
    <Box className='flex flex-col gap-4'>
      <StyledTextField
        fullWidth
        id='email'
        name='email'
        label={loginLocalization.emailLabel}
        value={values.email}
        onChange={changeHandler}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <Box className='flex flex-col items-end'>
        <StyledTextField
          fullWidth
          id='password'
          name='password'
          label={loginLocalization.passwordLabel}
          type='password'
          value={values.password}
          onChange={changeHandler}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button
          variant='text'
          type='button'
          sx={{
            fontSize: 12,
            color: '#222222',
            fontWeight: 600,
            textTransform: 'none',
          }}
        >
          {loginLocalization.forgetPassword}
        </Button>
      </Box>
    </Box>
  );
}
