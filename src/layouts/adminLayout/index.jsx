import { useState } from 'react';
import { Box } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ForumIcon from '@mui/icons-material/Forum';

import Sider from "./Sider";
import Navbar from "./Navbar";
import UserService from "@services/admin/user.service";

const sider = [
  { text: 'User Manage', url: '/', icon: <SupervisorAccountIcon /> },
  { text: 'Campaign Manage', url: '/robotics', icon: <ForumIcon /> },
];
const MainLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box>
      <Sider menuItems={sider} collapsed={collapsed} />
      <Navbar title={props.title} toggleSider={setCollapsed} collapsed={collapsed}/>
      <Box ml={ collapsed ? '80px' : '250px'} p={4}>
        { props.children }  
      </Box>
    </Box>
  )
}

export default MainLayout;