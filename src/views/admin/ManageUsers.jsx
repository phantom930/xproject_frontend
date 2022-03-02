import { Grid } from '@mui/material';

import UsersTable from "@components/admin/UsersTable";
import CampaignTalbe from "./CampaignsTable";

const MainPage = (props) => {
  return (
    <>
        <Grid container>
            <Grid item xs={12} mt={3}>
                <UsersTable />
            </Grid>
        </Grid>
    </>
  );
};

export default MainPage;