import { Grid, Paper } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

import MainLayout from '../../layouts/mainLayout';
import DashboardStatics from '../../components/DashboardStatics';

import CampaignTalbe from './CampaignsTable';

const sider = [
  { text: 'Dashboard', url: '/', icon: <TimelineIcon /> },
  { text: 'Robotics', url: '/robotics', icon: <BoltOutlinedIcon /> },
  { text: 'DTC Brand', url: '/dtc_brand', icon: <RequestQuoteOutlinedIcon /> },
  { text: 'PR', url: '/pr' },
];

const MainPage = (props) => {
  return (
    <MainLayout menuItems={sider}>
      <Grid container spacing={3}>
        <Grid item lg={3} md={6} xs={12}>
          <DashboardStatics title='Balance' content='$2,536'/>
        </Grid>
        <Grid item lg={3} md={6} xs={12} mb={0}>
          <DashboardStatics title='PR Campaigns' content='1'/>
        </Grid>
        <Grid item lg={3} md={6} xs={12} mb={0}>
          <DashboardStatics title='DTC brands' content='1'/>
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
    </MainLayout>
  );
};

export default MainPage;