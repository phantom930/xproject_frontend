import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import CodeButton from './CodeButton';
import Logo from '@assets/img/logo.png';

const InviteCode = () => {
  const [codes, setCodes] = useState([null, null, null, null, null, null]);
  const [curIndx, setCurIndx] = useState(0);
  const navigate = useNavigate();
  
  const handleInputCode = (number) => {
    if (curIndx > 5) return;
    setCodes(codes.map((code, index) => {
      return index === curIndx ? number : code;
    }));
    setCurIndx(curIndx + 1);
  }

  const handleClear = () => {
    if (curIndx === 0) return;
    setCodes(codes.map((code, index) => {
      return index === curIndx - 1 ? null : code;
    }));
    setCurIndx(curIndx - 1);
  }

  const handleGo = () => {
    const isValid = codes.every(code => code != null);
    if (isValid)
      navigate('/auth');

    return;
  }

  return (
    <Box width={400} sx={{ m: 'auto', textAlign: 'center' }}>
      <img src={ Logo } alt='logo' width={180}/>
      <Typography variant='h5'>Enter your invite code below</Typography>
      <Typography component='p' mt={4} fontWeight='bold' color='#ddd'>Unlucky?</Typography>
      <Typography component='p' my={1} fontWeight='bold' color='#ddd'>You can still get in by minting an X</Typography>
      <Card sx={{ mt: 2, p: 1 }}>
        <CardContent>
          <Box sx={{ backgroundColor: '#ddd', flexGrow: 1, p: 2, borderRadius: '5px' }}>
            <Grid container spacing={4}>
              {
                codes.map((item, index) => {
                  return (
                    <Grid item xs={2} textAlign='center' fontSize={40} fontWeight='bold' color='#000' key={index}>
                      { item === null ? '-' : item }
                    </Grid>
                  );
                })
              }
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={4}>
                <CodeButton number={1} onClick={ e => handleInputCode(1) }/>
              </Grid>
              <Grid item xs={4}>
                <CodeButton number={2} sub={'ABC'} onClick={ e => handleInputCode(2) }/>
              </Grid>
              <Grid item xs={4}>
                <CodeButton number={3} sub={'DEF'} onClick={ e => handleInputCode(3) }/>
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={4}>
                <CodeButton number={4} sub={'GHI'} onClick={ e => handleInputCode(4) }/>
              </Grid>
              <Grid item xs={4}>
                <CodeButton number={5} sub={'JKL'} onClick={ e => handleInputCode(5) }/>
              </Grid>
              <Grid item xs={4}>
                <CodeButton number={6} sub={'MNO'} onClick={ e => handleInputCode(6) }/>
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={4}>
                <CodeButton number={7} sub={'PQRS'} onClick={ e => handleInputCode(7) }/>
              </Grid>
              <Grid item xs={4}>
                <CodeButton number={8} sub={'TUV'} onClick={ e => handleInputCode(8) }/>
              </Grid>
              <Grid item xs={4}>
                <CodeButton number={9} sub={'WXYZ'} onClick={ e => handleInputCode(9) }/>
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={4}>
                <CodeButton number={'X'} sub={'CLEAR'} onClick={ handleClear } />
              </Grid>
              <Grid item xs={4}>
                <CodeButton number={0} sub={'.'} onClick={ e => handleInputCode(0) }/>
              </Grid>
              <Grid item xs={4}>
                <CodeButton number={<FontAwesomeIcon icon={faKey}/>} sub={'GO!'} onClick={ handleGo } />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InviteCode;