import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
// UI Components
import { TextField, Button, Typography, Box, InputAdornment, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

import { loginAdmin } from "@services/admin/auth.service";
import { setCredentials } from "@store/slices/auth.slice";

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    try {
      let response = await loginAdmin({
        username, password
      });

      let decoded = jwt_decode(response.token);
      sessionStorage.jwtToken = response.token;
      dispatch(setCredentials({ user: decoded, token: response.token }));
      navigate('/admin/users');
    } catch (err) {
      if (err.status == 422)
        setAlert("Already registered!");
      else if (err.status == 500)
        setAlert("Server Error!");
      else if (err.status == 400)
        setAlert("Incorrect Password!");
      else if (err.status == 404)
        setAlert("Not Registered!");
      else setAlert("Operation failed!");
    }
  }

  return (
    <Container maxWidth='xs' sx={{m: 'auto', height: 'calc(100vh)'}}>
      <Typography variant='h1' fontWeight='bold' sx={{ py: '50px' }}>X</Typography>
      <Typography variant='h4' fontWeight='bold'>Login for Administrator</Typography>
      <Typography sx={{ mt: 2, mb: 5 }}>Earth's most results-oriented business hub.</Typography>
        <>
            <TextField
                id="input-with-icon-textfield"
                label="Username or Email"
                sx={{my:2, width: '100%'}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FontAwesomeIcon icon={faInstagram} color='white'/>
                        </InputAdornment>
                    ),
                }}
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
            />
            <TextField
                id="input-with-icon-textfield"
                label="Password"
                sx={{my:2, width: '100%'}}
                type="password"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FontAwesomeIcon icon={ faEnvelope } color='white' />
                        </InputAdornment>
                    ),
                }}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
        </>
      {
        alert && <Box textAlign='center' py={2} color='red'>{ alert }</Box>
      }
      <Button variant='outlined'
        sx={{ my: 2, width: '100%', p: 2 }}
        color='primary'
        startIcon={ <FontAwesomeIcon icon={faWallet} /> }
        onClick={handleConnectWallet}
      >Sign In</Button>
    </Container>
  );
}

export default Auth;