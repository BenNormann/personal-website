import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/icons/css/ionicons.css';
import './assets/font-awesome/css/font-awesome.css';
import './style.css';

import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
