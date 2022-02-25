import { TextField, Stack, Button, Typography, Link, Box, InputAdornment, Container } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';

const LoginForm = () => {
  return (
    <Container maxWidth='xs' sx={{m: 'auto', height: 'calc(100vh)'}}>
      <Typography variant='h1' fontWeight='bold' sx={{ py: '50px' }}>X</Typography>
      <Typography variant='h4' fontWeight='bold'>Register for Access</Typography>
      <Typography sx={{ mt: 2, mb: 5 }}>Earth's most results-oriented business hub.</Typography>
      <TextField
        id="input-with-icon-textfield"
        label="Username"
        sx={{my:2, width: '100%'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Instagram />
            </InputAdornment>
          ),
        }}
        required
      />
      <TextField
        id="input-with-icon-textfield"
        label="Email"
        sx={{my:2, width: '100%'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
        required
      />
      <Button variant='outlined' sx={{ my: 2, width: '100%', p: 2 }} color='primary'>Connect Wallet</Button>
      <Box textAlign='center'>
        Already registered? <Link underline='none'>Login</Link>
      </Box>
    </Container>
  );
}

export default LoginForm;