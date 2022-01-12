import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Devices from './component/devices'
import Device from './component/device'


function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Devices />} />
            <Route exact path="/device" element={<Device />} />
            <Route exact path="/device/:id" element={<Device />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;