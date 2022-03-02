import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Avatar, Button, Menu, MenuItem } from '@mui/material';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { destoryCredentials } from "@store/slices/auth.slice";

const Navbar = (props) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleToggleSider = () => {
    props.toggleSider(!props.collapsed);
  }

  const signOut = () => {
    sessionStorage.clear();
    dispatch(destoryCredentials());
    navigate('/admin/auth');
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
              user && user.username
                ?
                  <>
                    <PopupState variant='popover' popupId='demo-popup-menu'>
                      {(popupState) => (
                        <>
                          <Button variant='outlined' {...bindTrigger(popupState)}>
                            { user.username }
                          </Button>
                          <Menu {...bindMenu(popupState)} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <MenuItem onClick={signOut}><LogoutSharpIcon />Sign Out</MenuItem>
                          </Menu>
                        </>
                      )}
                    </PopupState>
                  </>
                :
                  <Button variant='text'
                    sx={{ ml: 2, width: '100%', }}
                    color='primary'
                    component={NavLink} 
                    to="/admin/auth"
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
  );
};

export default Navbar;