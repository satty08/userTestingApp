import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
        <div className='nav leftNav'>
            <img className='logo' src='' alt='Logo' />
            <p>About</p>
            <Link to='#solutions'><p>Solutions</p></Link>
            <p>Contact Us!</p>
        </div>
        <div className='nav rightNav'>
          <Link to='/login'><p>Log In</p></Link>
          <button className='testLogin'>Get Paid to Test</button>
        </div>
    </div>
  )
}

export default Nav