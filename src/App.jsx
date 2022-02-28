// import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Web3Provider from '@store/web3Provider';
import theme from "@themes";
import Routes from "@routes";
import store from "@store";

const App = () => {
  
  return (
    <Web3Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Web3Provider>
  );
}

export default App;
