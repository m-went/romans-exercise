import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.scss';
import App from './views/App/App';
import { BrowserRouter } from 'react-router-dom';
import { worker } from './mocks/browser';
import { AuthProvider } from './hooks/useAuth';

worker.start();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
