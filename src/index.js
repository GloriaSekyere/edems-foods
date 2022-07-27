import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

//context
import { TotalProvider } from './contexts/TotalContext';
import { QuantityProvider } from './contexts/QuantityContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TotalProvider><QuantityProvider>
      <App />
    </QuantityProvider></TotalProvider>
  </React.StrictMode>
);