// import './App.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Web3Provider from '@store/web3Provider';
import theme from "@themes";
import Routes from "@routes/index.js";
import store from "@store";

const App = () => {
  
  return (
    <Web3Provider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </Provider>
    </Web3Provider>
  );
}

export default App;
