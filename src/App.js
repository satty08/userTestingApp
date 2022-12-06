import React from 'react';
import './App.css';
import Home from './Content/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Login from './Content/Login/Login';
import UserPage from './Content/UserPage/UserPage';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector(state => state.user);

  return (
    <div className="App">
      <Routes>
        <Route path='/user/:userid' element={<UserPage />} />
        {!user ? <Route path='/login' element={<Login />} /> : <Route path='/' element={<Home />} />}
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
