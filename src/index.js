import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.scss';
import App from './views/App/App';
import { BrowserRouter } from 'react-router-dom';
import UsersProvider from './providers/UsersProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <App />
      </UsersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
