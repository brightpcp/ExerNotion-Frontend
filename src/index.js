import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import History from './components/Activity/Activity'
import Navbar from './components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="History" element={<History />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

