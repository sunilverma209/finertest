import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.scss';
import Multiform from './Components/Multiform';
import Users from './Components/Users';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Multiform />}/>
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>

  );
}

export default App;
