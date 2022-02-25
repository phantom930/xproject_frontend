import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar
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
            <Avatar
              sx={{ bgcolor: '#adadec' }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              B
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;