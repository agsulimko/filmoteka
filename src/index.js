// index.css
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';

// Тема для ThemeProvider
const theme = {
  colors: {
    accent: '#ff6b08',
  },
  buttonShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/filmoteka">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
          <Toaster />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
