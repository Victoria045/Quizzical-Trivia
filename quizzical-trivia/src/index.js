import React from 'react';
import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import QuizComponent from './components/QuizComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <Router>
  //   <Routes>
  //       <Route path="/" element={<App />} />
  //       <Route path="quiz" element={<QuizComponent />} />
  //   </Routes>
  // </Router>
);

reportWebVitals();
