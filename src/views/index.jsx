import { Grid, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faShopify, faDochub } from '@fortawesome/free-brands-svg-icons';

import MainRoutes from '@routes/mainRoutes';
import MainLayout from '@layouts/mainLayout';

const sider = [
  { text: 'Dashboard', url: '/', icon: <FontAwesomeIcon color='#fff' icon={faChartLine}/> },
  { text: 'Robotics', url: '/robotics', icon: <FontAwesomeIcon color='#fff' icon={faBolt}/> },
  { text: 'DTC Brand', url: '/dtc_brand', icon: <FontAwesomeIcon color='#fff' icon={faShopify}/>},
  { text: 'PR', url: '/pr', icon: <FontAwesomeIcon color='#fff' icon={faDochub}/> },
];

const MainPage = (props) => {
  return (
    <MainLayout menuItems={sider}>
      <MainRoutes />
    </MainLayout>
  );
};

export default MainPage;