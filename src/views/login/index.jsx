import { Grid } from '@mui/material';

import LoginForm from "./LoginForm";
import Utility from "./Utility";

const Login = () => {
  return (
    <Grid container spacing={0}>
      <Grid item md={6} sm={12}>
        <LoginForm />
      </Grid>
      <Grid item md={6} sm={12}>
        <Utility />
      </Grid>
    </Grid>
  )
}

export default Login;