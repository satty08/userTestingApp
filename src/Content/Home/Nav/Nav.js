import React from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {

  const user = useSelector(state => state.user);

  return (
    <div className='nav'>
        <div className='nav leftNav'>
            <img className='logo' src='' alt='Logo' />
            <p>About</p>
            <p>Solutions</p>
            <p>Contact Us!</p>
        </div>
        <div className='nav rightNav'>
          <NavLink to='/login'><p>Login</p></NavLink>
          <button className='testLogin'>Get Paid to Test</button>
        </div>
    </div>
  )
}

export default Nav