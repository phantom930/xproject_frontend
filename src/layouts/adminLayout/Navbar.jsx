import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button
} from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const Navbar = (props) => {
  const handleToggleSider = () => {
    props.toggleSider(!props.collapsed);
  }

  return (
    <Box sx={{ flexGrow: 1, ml: props.collapsed ? '80px' : '250px' }}>
      <AppBar position="static" sx={{ pl:0 }}>
        <Toolbar>
          <IconButton size='large' onClick={handleToggleSider}>
            {props.collapsed ? <ArrowRight /> : <ArrowLeft /> }
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
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton size='large'>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton size='large'>
              <MenuIcon />
            </IconButton>
            {
              sessionStorage.account
              ?
                <Button variant='outlined'
                  sx={{ my: 2, width: '100%', p: 2 }}
                  color='primary'
                >{ sessionStorage.account }</Button>
              :
              <Button variant='outlined'
                sx={{ my: 2, width: '100%', p: 2 }}
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
  );
};

export default Navbar;