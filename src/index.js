import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext'; 

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AuthProvider>
    <>
      <App />
      <ToastContainer />
    </>
  </AuthProvider>
);
