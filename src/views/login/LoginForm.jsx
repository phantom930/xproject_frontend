import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnect from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';
// UI Components
import { TextField, Button, Typography, Box, InputAdornment, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

import Web3Ctx from '@store/web3Context';

import { isValidEmail } from "@utils";
import { registerUser, loginUser } from "@services/auth.service";
import { setCredentials } from "@store/slices/auth.slice";

const LoginForm = () => {
  const web3Ctx = useContext(Web3Ctx);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

  const providerOptions = {
    walletconnect: {
      package: WalletConnect,
      options: {
        infuraId: process.env.REACT_APP_INFURA_ID
      }
    },
    walletlink: {
      package: WalletLink,
      options: {
        infuraId: process.env.REACT_APP_INFURA_ID
      }
    }
  }
  const web3Modal = new Web3Modal({ providerOptions });
  
  const handleConnectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      const account = await web3Ctx.loadAccount(web3);
      web3.eth.sign('ckiden0-=qwiqpeworqwer', account);

      let response = await registerUser({
        username, email,
        wallet_address: account,
      });

      sessionStorage.account = account;
      sessionStorage.token = response.token;
      navigate('/');
    } catch (err) {
      if (err.status == 422)
        setAlert("Already registered!");
      else setAlert("Operation failed!");
    }
  }

  const handleLogin = async () => {
    try {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      const account = await web3Ctx.loadAccount(web3);
      web3.eth.sign('ckiden0-=qwiqpeworqwer', account);

      let response = await loginUser({
        username, email,
        wallet_address: account,
      });

      sessionStorage.account = account;
      sessionStorage.token = response.token;
      navigate('/');
    } catch (err) {
      console.log(err);
      if (err.status == 404)
        setAlert("Credential mismatched!");
      else setAlert("Operation failed!");
    }
  }

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
        label="Email"
        sx={{my:2, width: '100%'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon icon={ faEnvelope } color='white' />
            </InputAdornment>
          ),
        }}
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      {
        alert && <Box textAlign='center' py={2} color='red'>{ alert }</Box>
      }
      <Button variant='outlined'
        sx={{ my: 2, width: '100%', p: 2 }}
        color='primary'
        startIcon={ <FontAwesomeIcon icon={faWallet} /> }
        onClick={handleConnectWallet}
        disabled={!(username && isValidEmail(email))}
      >Connect Wallet</Button>
      <Box textAlign='center' py={2}>
        Already registered? <Typography sx={{ cursor: 'pointer', display: 'inline', color: '#07f' }} underline='none' onClick={ handleLogin }>Login</Typography>
      </Box>
    </Container>
  );
}

export default LoginForm;