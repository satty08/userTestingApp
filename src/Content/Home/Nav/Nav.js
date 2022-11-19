import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
        <div className='nav leftNav'>
            <img className='logo' src='' alt='Logo' />
            <p>About</p>
            <p>Solutions</p>
            <p>Contact Us!</p>
        </div>
        <div className='nav rightNav'>
          <p><Link to='/login' >Log In</Link></p>
          <button className='testLogin'>Get Paid to Test</button>
        </div>
    </div>
  )
}

export default Nav