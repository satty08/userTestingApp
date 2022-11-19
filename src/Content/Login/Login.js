import React, { useState } from 'react';
import './Login.css';

function Login() {
  const[validate, setValidate] = useState(false);
  const accountStatus = validate ? 'Create Account' : 'Click to login';
  const heading = validate ? 'Login' : 'Create Account'

  return (
    <div className='login'>
      <img className='login_logo' src='' alt='logo' />
      <h2 className='login_heading'>{heading}</h2>
      <div className='login_form'>
        <input className='' type='Email' placeholder='Email' />
        <input className='' type='Password' placeholder='Password' />
        {!validate ?
          <input className='' type='Password' placeholder='Confirm Password' /> : <></>
        }
        <button className='login_submitButton'>Submit</button>
      </div>
      <h5 className='login_accountStatus' onClick={() => setValidate(!validate)}>{accountStatus}</h5>
    </div>
  )
}

export default Login