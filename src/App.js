import React from 'react';
import './App.css';
import Home from './Content/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Login from './Content/Login/Login';
import UserPage from './Content/UserPage/UserPage';
import { useSelector } from 'react-redux';
import UserProfile from './Content/UserProfile/UserProfile';
import ContactUs from './Content/ContactUs/ContactUs';

function App() {

  const isLogged = useSelector(state => state.isLoggedIn);

  return (
    <div className="App">
      <Routes>
        <Route path='/contactUs' element={<ContactUs />} /> 
        <Route path='/user/:userId' element={<UserProfile />} />
        <Route path='/tasks' element={<UserPage />} />
        {!isLogged ? <Route path='/login' element={<Login />} /> : <Route path='/' element={<Home />} />}
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
