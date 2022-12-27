import React, { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './UserPage.css';
import UserPageCard from './UserPageCard/UserPageCard';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
function UserPage() {
  const navigate = useNavigate();
  const[isActive, setIsActive] = useState('pending');
  const[tasks, setTasks] = useState([]);

  const logoutHandler = () => {
    localStorage.clear();
    localStorage.setItem('isLoggedIn', false);
    navigate('/');
  }

  useEffect(() => {
    const fetchData = async() => {
      
    }

    fetchData();
    console.log(tasks);
  }, []);

  return (
    <div className='userPage'>
      <div className='userPage_Logo'>
        <img src='' alt='Logo' />
      </div>
      <div className='userPage_Nav'>
        <div className='userPage_NavLeft'>
          <p className={isActive==='pending' ? 'active' : ''} onClick={() => setIsActive('pending')}>Pending Tasks</p>
          <p className={isActive==='completed' ? 'active' : ''} onClick={() => setIsActive('completed')}>Completed Tasks</p>
          <p className={isActive==='withdraw' ? 'active' : ''} onClick={() => setIsActive('withdraw')}>Withdraw</p>
        </div>
        <div className='userPage_NavRight'>
          <p>Balance: $0</p>
          <p onClick={logoutHandler}>Log Out</p>
          <AccountCircleIcon onClick={''} fontSize='large' />
        </div>
      </div>
      <div className='userPage_Main'>
        {/* {tasks.map(
          <UserPageCard props={tasks.data} />
        )}        */}
      </div>
    </div>
  )
}

export default UserPage