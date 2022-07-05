import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { TotalProvider } from './contexts/TotalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TotalProvider>
      <App />
    </TotalProvider>
  </React.StrictMode>
);