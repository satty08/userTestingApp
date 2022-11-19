import React from 'react';
import './App.css';
import Home from './Content/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Login from './Content/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
