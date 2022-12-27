import React from 'react';
import './Nav.css';
import {useNavigate} from 'react-router-dom';
import FadeMenu from './NavComponent';

function Nav() {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem('isLoggedIn');
  console.log(!isLogged);

  const testHandler = () => {
    localStorage.setItem('userType', 'tester');
    navigate('/login');
  }

  const loginHandler = () => {
    localStorage.setItem('userType', 'company');
    navigate('/login');
  }

  return (
    <div className='nav'>
        <div className='nav leftNav'>
            <img className='logo' src='' alt='Logo' />
            <p>About</p>
            <FadeMenu />
            <p onClick={() => {navigate('/contactUs')}}>Contact Us!</p>
        </div>
        {/* <div className='nav rightNav'>
          {!isLogged ? '' : <p onClick={loginHandler}>Login</p>}
          <button onClick={testHandler} className='testLogin'>Get Paid to Test</button>
        </div> */}
    </div>
  )
}

export default Nav