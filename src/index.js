import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.scss';
import App from './views/App/App';
import { BrowserRouter } from 'react-router-dom';
import { worker } from './mocks/browser';
import { AuthProvider } from './hooks/useAuth';
import { ErrorProvider } from './hooks/useError';

worker.start();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ErrorProvider>
    </BrowserRouter>
  </React.StrictMode>
);
