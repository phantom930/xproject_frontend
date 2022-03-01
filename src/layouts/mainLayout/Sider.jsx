import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const Sider = (props) => {
  return (
    <>
      <BrowserView>
        <Box 
          width={props.collapsed? '80px' : '250px'} height='100%'
          sx={{ position: 'fixed', zIndex: '1000000', top: 0, left: 0, backgroundColor: '#000' }}
        >
          <Typography variant='h2' textAlign='center' my={3}>X</Typography>
          <List>
            { props.collapsed ? 
              props.menuItems.map((menuItem, index) => {
                return (
                  <ListItem sx={{ px: 0 }} alignItems='center' key={index} component={Link} to={menuItem.url}>
                    <ListItemButton selected={index === 0} sx={{pl: '25px', py: '12px'}}>
                      <ListItemIcon>
                        { menuItem.icon }
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                );
              }) : 
              props.menuItems.map((menuItem, index) => {
                return (
                  <ListItem sx={{ px: 0 }} key={index} component={Link} to={menuItem.url}>
                    <ListItemButton selected={ index === 0 }>
                      <ListItemIcon>
                        { menuItem.icon }
                      </ListItemIcon>
                      <ListItemText primary={ menuItem.text } />
                    </ListItemButton>
                  </ListItem>
                );
              })
            }
          </List>
        </Box>
      </BrowserView>
      <MobileView>
        <Box 
          width='100%' height='100%'
          sx={{ backgroundColor: '#000', mt: '105px' }}
        >
          {/* <Typography variant='h2' textAlign='center' my={3}>X</Typography> */}
          <List>
            { 
              props.menuItems.map((menuItem, index) => {
                return (
                  <ListItem sx={{ px: 0 }} key={index} component={Link} to={menuItem.url}>
                    <ListItemButton selected={ index === 0 }>
                      <ListItemText primary={ menuItem.text } />
                      <ListItemIcon sx={{ minWidth: '0px' }}>
                        { menuItem.icon }
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                );
              })
            }
          </List>
        </Box>
      </MobileView>
    </>
  );
};

export default Sider;