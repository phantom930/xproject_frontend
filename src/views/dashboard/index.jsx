import { Grid, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faShopify, faDochub } from '@fortawesome/free-brands-svg-icons';

import CampaignTalbe from './CampaignsTable';
import DashboardStatics from '../../components/DashboardStatics';

const sider = [
  { text: 'Dashboard', url: '/', icon: <FontAwesomeIcon color='#fff' icon={faChartLine}/> },
  { text: 'Robotics', url: '/robotics', icon: <FontAwesomeIcon color='#fff' icon={faBolt}/> },
  { text: 'DTC Brand', url: '/dtc_brand', icon: <FontAwesomeIcon color='#fff' icon={faShopify}/>},
  { text: 'PR', url: '/pr', icon: <FontAwesomeIcon color='#fff' icon={faDochub}/> },
];

const MainPage = (props) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={3} md={6} xs={12}>
          <DashboardStatics title='Balance' content='$2,536'
            symbolicComponent={
              <Box sx={{
                borderRadius: '5px',
                backgroundColor: '#44d2a8',
                color: '#fff',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                p: '5px 10px'
              }}>
                156+ &nbsp; <FontAwesomeIcon color='#fff' icon={faChartLine}/>
              </Box>
            }
          />
        </Grid>
        <Grid item lg={3} md={6} xs={12} mb={0}>
          <DashboardStatics title='PR Campaigns' content='1'
            symbolicComponent={ <FontAwesomeIcon color='#aaa' fontSize={35} icon={faDochub}/> }
          />
        </Grid>
        <Grid item lg={3} md={6} xs={12} mb={0}>
          <DashboardStatics title='DTC brands' content='1'
            symbolicComponent={
              <FontAwesomeIcon color='#aaa' fontSize={35} icon={faShopify}/>
            }
          />
        </Grid>
        <Grid item lg={3} md={6} xs={12} mb={0}>
          <DashboardStatics title='This Week' content='600,000 DMs'/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} mt={3}>
          <CampaignTalbe />
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;