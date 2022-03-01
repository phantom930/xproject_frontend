import { BrowserView, MobileView } from 'react-device-detect';

import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button,
  Stack
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faBars, faGear } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';


const Navbar = (props) => {
  const handleToggleSider = () => {
    props.toggleSider(!props.collapsed);
  }

  return (
    <>
      <BrowserView>
        <Box sx={{ flexGrow: 1, ml: props.collapsed ? '80px' : '250px' }}>
          <AppBar position="static" sx={{ pl:0 }}>
            <Toolbar>
              <IconButton size='large' onClick={handleToggleSider} sx={{ mr: 1 }}>
                {props.collapsed ? <FontAwesomeIcon fontSize='0.9rem' color='#fff' icon={faAnglesRight} /> : <FontAwesomeIcon fontSize='0.9rem' color='#fff' icon={faAnglesLeft} /> }
              </IconButton>
              <Typography 
                variant="h5"
                component="div"
              >
                Dashboard
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: 'flex' }}>
                <IconButton size='large'>
                  <FontAwesomeIcon color='#fff' fontSize='1.2rem' width='20px' icon={faBell} />
                </IconButton>
                <IconButton size='large'>
                  <FontAwesomeIcon color='#fff' fontSize='1.2rem' width='20px' icon={faGear} />
                </IconButton>
                <IconButton size='large'>
                  <FontAwesomeIcon color='#fff' fontSize='1.2rem' width='20px' icon={faBars} />
                </IconButton>
                {
                  sessionStorage.account
                  ?
                    <Button variant='text'
                      sx={{ ml: 2, width: '100%', p: 2 }}
                      color='primary'
                    >{ sessionStorage.account }</Button>
                  :
                  <Button variant='text'
                    sx={{ ml: 2, width: '100%', }}
                    color='primary'
                    component={NavLink} 
                    to="/login"
                    size='large'
                  >Sign In</Button>    
                }
                {/*
                <Avatar
                  sx={{ bgcolor: '#adadec' }}
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                >
                  
                </Avatar>
                */
                }
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </BrowserView>
      <MobileView>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography 
                variant="h5"
                component="div"
              >
                Dashboard
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: 'flex' }}>
                <IconButton size='large'>
                  <FontAwesomeIcon color='#fff' fontSize='1.2rem' icon={faBell} />
                </IconButton>
                <IconButton size='large'>
                  <FontAwesomeIcon color='#fff' fontSize='1.2rem' icon={faGear} />
                </IconButton>
                <IconButton size='large'>
                  <FontAwesomeIcon color='#fff' fontSize='1.2rem' icon={faBars} />
                </IconButton>
                {
                  sessionStorage.account
                  ?
                    <Button variant='text'
                      sx={{ ml: 2, width: '100%', p: 2 }}
                      color='primary'
                    >{ sessionStorage.account }</Button>
                  :
                  <Button variant='text'
                    sx={{ ml: 2 }}
                    color='primary'
                    component={NavLink}
                    to="/login">Sign In</Button>    
                }
                {/*
                <Avatar
                  sx={{ bgcolor: '#adadec' }}
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                >
                  
                </Avatar>
                */
                }
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </MobileView>
    </>
  );
};

export default Navbar;