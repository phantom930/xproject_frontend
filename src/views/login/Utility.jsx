import { Grid, Box, Typography } from '@mui/material';

import BorderedPaper from '../../components/BorderedPaper'

const Utility = () => {
  return (
    <Box sx={{ p: 5, backgroundColor: '#000000', color: '#ffffff', height: '100%', boxSizing: 'border-box'}}>
      <Box>
        <Typography variant='h1' fontWeight='bold'>UTILITY</Typography>
        <Typography variant='h4' fontWeight='bold' my={3}>Add Mission</Typography>
        <Typography variant='caption' component='p' mb={3} width='80%'>We will revolutionize the industry by manufacturing Done-For-You Businesses, Providing more efficient marketing and exclusive strategies for X community members</Typography>
      </Box>
      <Grid container spacing={2} mb={2}>
        <Grid item md={7}>
          <BorderedPaper 
            title='Reach up to 12 Million prospects per day'
            content='Reach your ideal client by sending them a warm message about your service or offer.'
          />
        </Grid>
        <Grid item md={5}>
          <BorderedPaper 
            title='Digital Billboard Campaigns'
            content='Spread awareness for your brand, event or product with USA digital billboards.'
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={2}>
        <Grid item md={6}>
          <BorderedPaper 
            title='Reach up to 12 Million prospects per day'
            content='We work with Ecommerce Agencies that specialize in building & optimizing Shopify stores, marketing being our #1 priority.'
          />
        </Grid>
        <Grid item md={6}>
          <BorderedPaper 
            title='Digital Billboard Campaigns'
            content='We work with Ecommerce Agencies that specialize in building & optimizing Shopify stores, marketing being our #1 priority.'
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={2}>
        <Grid item md={12}>
          <BorderedPaper 
            title='A decentralized eCommerce incubator'
            content='X is the first decentralized eCommerce incubator that mentors and funds entrepreneurs.
            We source highly experienced product developers, digital designers, advertisers, content producers and more to guide our members through the realms of digital entrepreneurship.'
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Utility;