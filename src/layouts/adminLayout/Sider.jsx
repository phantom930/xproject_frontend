import { Box, Link, Typography } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const Sider = (props) => {
  return (
    <Box
      width={props.collapsed? '80px' : '250px'} height='100%'
      sx={{ position: 'fixed', zIndex: '1000000', top: 0, left: 0, backgroundColor: '#000' }}
    >
      <Typography variant='h2' textAlign='center' my={3}>X</Typography>
      <List>
        { props.collapsed ? 
          props.menuItems.map((menuItem, index) => {
            return (
              <Link href="/admin/users" key={index} underline="none">
                <ListItem sx={{ px: 0 }} alignItems='center'>
                  <ListItemButton selected={index === 0} sx={{pl: '25px', py: '12px'}}>
                    <ListItemIcon>
                      { menuItem.icon }
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          }) : 
          props.menuItems.map((menuItem, index) => {
            return (
              <Link href="/admin/users" key={index} underline="none">
                <ListItem sx={{ px: 0 }}>
                  <ListItemButton selected={ index === 0 }>
                    <ListItemIcon>
                      { menuItem.icon }
                    </ListItemIcon>
                    <ListItemText primary={ menuItem.text } />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })
        }
      </List>
    </Box>
  );
};

export default Sider;