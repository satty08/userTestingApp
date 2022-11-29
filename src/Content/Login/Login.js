import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';
import { db } from '../../firebase';
import './Login.css';

function Login() {
  const[validate, setValidate] = useState(true);
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPass, setConfirmPass] = useState('');

  const accountStatus = validate ? 'Create Account' : 'Click to login';
  const heading = validate ? 'Log In' : 'Create Account';
  const buttonHeading = validate ? 'Log In' : 'Sign Up';

  const dispatch = useDispatch();

  const submitHandler = () => {
    if(!validate && password === confirmPass){
      db.collections('users').set({
        email: email,
        password: password,
        firstName: '',
        lastName: '',
        phone: '',
        gender: '',
        userType: 'tester',
        currentBalance: 0
      })
    }
    dispatch(login(email));
  }

  return (
    <div className='login'>
      <img className='login_logo' src='' alt='logo' />
      <div className='login_panel'>
        <h2 className='login_heading'>{heading}</h2>
        <div className='login_form'>
          <input className='' type='Email' placeholder='Email' onChange={e => setEmail(e.target.value)} required/>
          <input className='' type='Password' placeholder='Password' onChange={e => setPassword(e.target.value)} required/>
          {!validate ?
            <input className='' type='Password' placeholder='Confirm Password' onChange={e => setConfirmPass(e.target.value)} required/> : <></>
          }
          <button className='login_submitButton' onClick={submitHandler}>{buttonHeading}</button>
        </div>
        <h5 className='login_accountStatus' onClick={() => setValidate(!validate)}>{accountStatus}</h5>
      </div>
      <div className='login_copyright'>
        <p>By clicking "Log in" I hereby acknowledge and accept the UserTesting Privacy 
          Policy and the applicable Customer Terms of Use (for UserTesting Customers) 
          or Contributor Terms of Service (for UserTesting Contributors).
        </p>
      </div>
    </div>
  )
}

export default Login