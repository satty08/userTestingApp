import React from 'react';
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
        <div className='nav leftNav'>
            <img className='logo' src='' alt='Logo' />
            <p>About</p>
            <p>Pricing</p>
            <p>Contact Us!</p>
        </div>
        <div className='nav rightNav'>
            <button className='testLogin'>Get Paid to Test</button>
        </div>
    </div>
  )
}

export default Nav