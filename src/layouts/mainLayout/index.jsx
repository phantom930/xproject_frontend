import { BrowserView, MobileView } from 'react-device-detect';
import { Box } from '@mui/material';

import Sider from './Sider';
import Navbar from './Navbar';
import { useState } from 'react';

const MainLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <BrowserView>
        <Box>
          <Sider menuItems={props.menuItems} collapsed={collapsed} />
          <Navbar title={props.title} toggleSider={setCollapsed} collapsed={collapsed}/>
          <Box ml={ collapsed ? '80px' : '250px'} p={4}>
            { props.children }  
          </Box>
        </Box>
      </BrowserView>
      <MobileView>
        <Box>
          <Navbar title={props.title} toggleSider={setCollapsed} collapsed={collapsed}/>
          <Sider menuItems={props.menuItems} />
          <Box  p={4}>
            { props.children }  
          </Box>
        </Box>

      </MobileView>
    </>
  )
}

export default MainLayout;