import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './FormComponent';
import DisplayComponent from './DisplayComponent';
import './App.css'; // Import App.css

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/display" element={<DisplayComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
