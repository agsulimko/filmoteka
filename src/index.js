import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyles/GlobalStyles';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/filmoteka">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
