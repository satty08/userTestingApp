import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const[validate, setValidate] = useState(true);
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPass, setConfirmPass] = useState('');
  const[name, setName] = useState('');

  const accountStatus = validate ? 'Create Account' : 'Click to login';
  const heading = validate ? 'Log In' : 'Create Account';
  const buttonHeading = validate ? 'Log In' : 'Sign Up';
  const navigate = useNavigate();

  const submitHandlerSignUp = async() => {
    if(!validate && password === confirmPass){
      createUserWithEmailAndPassword(auth,email, password).then(
        () => localStorage.setItem('isLoggedIn', true)
      );
        const data = {
            email: email,
            name: name,
            userType: localStorage.getItem('userType'),
            currentBalance: 0
          }
      const userDataRef = await addDoc(collection(db, 'userData'), data);
      localStorage.setItem('user', data);
      const id = userDataRef.id;
      localStorage.setItem('userId', id);
      navigate(`/tasks`)
    } else if(validate){
      signInWithEmailAndPassword(auth, email, password).then(() => {
        localStorage.setItem('isLoggedIn', true);
        let userId;
        const q = query(collection(db, 'userData'),where('email', '==', email));
        const userDoc = getDocs(q);
        userDoc
          .then(data => {
            userId = data.docs[0].id;
            localStorage.setItem('userId', userId);
          })
          .then(() => {
            const docRef = doc(db, 'userData', userId);
            getDoc(docRef)
              .then((doc) => {
                const userData = doc.data();
                if(userData.userType === localStorage.getItem('userType')){
                  const data = JSON.stringify(userData);
                  localStorage.setItem('user', data);
                  navigate('/tasks');
                } else{
                  navigate('/error');
                }                
              }).catch(e => {
                console.error(e);
              });
          });
      });
    } else{
      console.error('User Error');
    };
  };

  return (
    <div className='login'>
      <img className='login_logo' src='' alt='logo' />
      <div className='login_panel'>
        <h2 className='login_heading'>{heading}</h2>
        <div>
          <div className='login_form' onSubmit={submitHandlerSignUp}>
            {!validate ? <input className='' placeholder='Name' onChange={e => setName(e.target.value)} /> : <></>}
            <input className='' type='Email' placeholder='Email' onChange={e => setEmail(e.target.value)} required/>
            <input className='' type='Password' placeholder='Password' onChange={e => setPassword(e.target.value)} required/>
            {!validate ?
              <input className='' type='Password' placeholder='Confirm Password' onChange={e => setConfirmPass(e.target.value)} required/> : <></>
            }
            <button className='login_submitButton' type='submit' onClick={submitHandlerSignUp}>{buttonHeading}</button>
          </div>
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