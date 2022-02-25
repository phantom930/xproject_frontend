import { Box } from '@mui/material';

import Sider from './Sider';
import Navbar from './Navbar';
import { useState } from 'react';

const MainLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box>
      <Sider menuItems={props.menuItems} collapsed={collapsed} />
      <Navbar toggleSider={setCollapsed} collapsed={collapsed}/>
      <Box ml={ collapsed ? '80px' : '250px'} p={4}>
        { props.children }  
      </Box>
    </Box>
  )
}

export default MainLayout;