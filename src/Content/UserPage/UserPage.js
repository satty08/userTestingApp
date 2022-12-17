import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './UserPage.css';
import UserPageCard from './UserPageCard/UserPageCard';
import { logout } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const data = useSelector(state => state.user);
  const userId = useSelector(state => state.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[isActive, setIsActive] = useState(false);
  console.log(data);

  const activeClassHandler = () => {
    setIsActive(isActive => !isActive);
  }

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  }

  const profileHandler = () => {
    navigate(`/user/${userId}`);
  }

  return (
    <div className='userPage'>
      <div className='userPage_Logo'>
        <img src='' alt='Logo' />
      </div>
      <div className='userPage_Nav'>
        <div className='userPage_NavLeft'>
          <p className={isActive ? 'active' : ''} onClick={activeClassHandler}>Review Tasks</p>
          <p>Survey Tasks</p>
          <p>Marketing Tasks</p>
        </div>
        <div className='userPage_NavRight'>
          <p>Balance: $0</p>
          <p onClick={logoutHandler}>Log Out</p>
          <AccountCircleIcon onClick={profileHandler} fontSize='large' />
          <p>{data.email}</p>
        </div>
      </div>
      <p>{data.email}</p>
      <div className='userPage_Main'>
        <UserPageCard />
        <UserPageCard />
        <UserPageCard />
      </div>
    </div>
  )
}

export default UserPage