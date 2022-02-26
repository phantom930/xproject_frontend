import { useEffect, useState, useContext } from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnect from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';
// UI Components
import { TextField, Button, Typography, Link, Box, InputAdornment, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

import Web3Ctx from '../../store/web3Context';

const LoginForm = () => {
  const web3Ctx = useContext(Web3Ctx);

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
  
  const handleConnectWallet = async (e) => {
    try {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      const account = await web3Ctx.loadAccount(web3);
      const sign = web3.eth.sign('ckiden0-=qwiqpeworqwer', account);
    } catch (err) {
      console.log(err);
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
        required
      />
      <Button variant='outlined'
        sx={{ my: 2, width: '100%', p: 2 }}
        color='primary'
        startIcon={ <FontAwesomeIcon icon={faWallet} /> }
        onClick={handleConnectWallet}
      >Connect Wallet</Button>
      <Box textAlign='center' py={2}>
        Already registered? <Link underline='none' href='/'>Login</Link>
      </Box>
    </Container>
  );
}

export default LoginForm;