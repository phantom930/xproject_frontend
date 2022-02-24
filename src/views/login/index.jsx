import { Container, Grid } from '@mui/material';

import LoginForm from "./LoginForm";
import Utility from "./Utility";

const Login = () => {
  return (
    <Grid container spacing={0}>
      <Grid item sm={6}>
        <LoginForm />
      </Grid>
      <Grid item sm={6}>
        <Utility />
      </Grid>
    </Grid>
  )
}

export default Login;