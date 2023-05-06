import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { AuthContexProvider } from './context/authContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Render the web application
root.render(
  <React.StrictMode>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </React.StrictMode>
);
