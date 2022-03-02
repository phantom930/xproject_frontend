import { useState } from 'react'
import { Grid, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faShopify, faDochub } from '@fortawesome/free-brands-svg-icons';

import UserRoutes from '@routes/userRoutes';
import MainLayout from '@layouts/mainLayout';

const sider = [
  { text: 'Dashboard', url: '/', icon: <FontAwesomeIcon color='#fff' icon={faChartLine}/> },
  { text: 'Robotics', url: '/robotics', icon: <FontAwesomeIcon color='#fff' icon={faBolt}/> },
  { text: 'DTC Brand', url: '/dtc_brand', icon: <FontAwesomeIcon color='#fff' icon={faShopify}/>},
  { text: 'PR', url: '/pr', icon: <FontAwesomeIcon color='#fff' icon={faDochub}/> },
];

const MainPage = (props) => {
  const [activeSider, setActiveSider] = useState(0);

  return (
    <MainLayout menuItems={sider} active={activeSider}>
      <UserRoutes />
    </MainLayout>
  );
};

export default MainPage;