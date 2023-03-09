import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthContextProvider } from './context/AuthContext';
import { BreakpointProvider } from "react-socks";

import 'react-tooltip/dist/react-tooltip.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <AuthContextProvider>
      <BreakpointProvider>
        <App />
      </BreakpointProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
