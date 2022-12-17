import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/user/userSlice';
import { auth, db } from '../../firebase';
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const[validate, setValidate] = useState(true);
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPass, setConfirmPass] = useState('');

  const accountStatus = validate ? 'Create Account' : 'Click to login';
  const heading = validate ? 'Log In' : 'Create Account';
  const buttonHeading = validate ? 'Log In' : 'Sign Up';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandlerSignUp = async() => {
    if(!validate && password === confirmPass){
      createUserWithEmailAndPassword(auth,email, password).then(
        () => console.log('Signed Up Successfully')
      );
        const data = {
            email: email,
            firstName: '',
            lastName: '',
            phone: '',
            gender: '',
            userType: 'tester',
            currentBalance: 0
          }
      const userDataRef = await addDoc(collection(db, 'userData'), data);
      dispatch(login(data));
      const id = userDataRef.id;
      navigate(`/user/${id}`)
    } else if(validate){
      signInWithEmailAndPassword(auth, email, password).then(() => {
        let userId;
        const q = query(collection(db, 'userData'),where('email', '==', email));
        const userDoc = getDocs(q);
        userDoc
          .then(data => userId = data.docs[0].id)
          .then(() => {
            const docRef = doc(db, 'userData', userId);
            getDoc(docRef)
              .then((doc) => {
                const userData = doc.data();
                const data = {userData, userId}
                console.log(data);
                dispatch(login(data));
                navigate('/tasks');
              }).catch(e => {
                console.error(e);
              })
          })
        // const docRef = doc(db, 'userData', userId);
        // const userData = getDoc(docRef);
        // console.log(userData);
      })
    } else{
      console.error('User Error');
    }
  }

  return (
    <div className='login'>
      <img className='login_logo' src='' alt='logo' />
      <div className='login_panel'>
        <h2 className='login_heading'>{heading}</h2>
        <div>
          <form className='login_form' onSubmit={submitHandlerSignUp}>
            <input className='' type='Email' placeholder='Email' onChange={e => setEmail(e.target.value)} required/>
            <input className='' type='Password' placeholder='Password' onChange={e => setPassword(e.target.value)} required/>
            {!validate ?
              <input className='' type='Password' placeholder='Confirm Password' onChange={e => setConfirmPass(e.target.value)} required/> : <></>
            }
            <button className='login_submitButton' type='submit' onClick={submitHandlerSignUp}>{buttonHeading}</button>
          </form>
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