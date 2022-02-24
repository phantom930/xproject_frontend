import { TextField, Stack, Button, Typography, Link, Box } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';

const LoginForm = () => {
  return (
    <Box sx={{ px: '200px', height: 'calc(100vh)' }}>
      <Typography variant='h1' fontWeight='bold' sx={{ py: '50px' }}>X</Typography>
      <Typography variant='h4' fontWeight='bold'>Register for Access</Typography>
      <Typography sx={{ mt: 2, mb: 5 }}>Earth's most results-oriented business hub.</Typography>
      <Stack alignItems='flex-end' direction='row' sx={{ mb:2, width: '100%' }}>
        <Instagram sx={{ mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Instagram" variant="standard" required/>
      </Stack>
      <Stack alignItems='flex-end' direction='row' sx={{ mb:4, width: '100%' }}>
        <Email sx={{ mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" required/>
      </Stack>
      <Button variant='outlined' sx={{ mb: 2 }}>Connect Wallet</Button>
      <Box textAlign='center'>
        Already registered? <Link underline='none'>Login</Link>
      </Box>
    </Box>
  );
}

export default LoginForm;