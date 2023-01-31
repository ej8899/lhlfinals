import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

import Application from "./components/Application";

import './config.js'; // for global configuration variables
import './helpers/zlog.js';   // console log replacement

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Application />
    </Router>
  </React.StrictMode>
);