import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import store from './store';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Router from '../src/components/router';

import './styles/styleRoot.scss';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#48a999',
      main: '#00796b',
      dark: '#004c40',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#5f5fc4',
      main: '#283593',
      dark: '#001064',
      contrastText: '#ffffff',
    },
  },
});

export default App;
