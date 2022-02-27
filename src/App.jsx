// import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import theme from './themes'
import Routes from "./routes";
import Web3Provider from './store/web3Provider';

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
