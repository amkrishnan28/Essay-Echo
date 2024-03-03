import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Landing from './components/Landing.js'; // Import the component for the new page

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Landing />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

