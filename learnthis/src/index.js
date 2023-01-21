import React from "react";
import ReactDOM from 'react-dom/client';

import "./index.css";

import Application from "./components/Application";

import './config.js'; // for global configuration variables (EJ added)
import './zlog.js';   // console log replacement

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);