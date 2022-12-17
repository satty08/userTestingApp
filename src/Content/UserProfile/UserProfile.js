import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import './UserProfile.css';

function UserProfile() {
  const[active, setActive] = useState('profile');

  return (
    <div className='userProfile'>
      <div className='userProfile_sidebar'>
        <img className='logo' src='' alt='Logo' />
        <div className='userProfile_nav'>
          <p onClick={() => setActive('profile')}>Profile</p>
          <p onClick={() => setActive('completedTasks')}>Completed Tasks</p>
          <p onClick={() => setActive('withdrawWindow')}>Withdraw</p>
        </div>
      </div>
      <div className='userProfile_tiles'>
        {active === 'profile' ? <div>Profile Data</div> : ''}
        {active === 'completedTasks' ? <div>Completed Tasks</div> : ''}
        {active === 'withdrawWindow' ? <div>Withdraw window</div> : ''}
      </div>
    </div>
  )
}

export default UserProfile