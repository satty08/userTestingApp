import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './UserProfile.css';

function UserProfile() {
  const[active, setActive] = useState('completedTasks');
  const navigate = useNavigate();

  return (
    <div className='userProfile'>
      <div className='userProfile_sidebar'>
        <img onClick={() => navigate('/tasks')} className='logo' src='' alt='Logo' />
        <div className='userProfile_nav'>
          {/* <p className={active==='profile' ? 'active' : ''} onClick={() => setActive('profile')}>Profile</p> */}
          <p className={active==='completedTasks' ? 'active' : ''} onClick={() => setActive('completedTasks')}>Completed Tasks</p>
          <p className={active=== 'withdrawWindow' ? 'active' : ''} onClick={() => setActive('withdrawWindow')}>Withdraw</p>
        </div>
      </div>
      <div className='userProfile_tiles'>
        {/* {active === 'profile' ? <div><Profile /></div> : ''} */}
        {active === 'completedTasks' ? <div>Completed Tasks</div> : ''}
        {active === 'withdrawWindow' ? <div>Withdraw window</div> : ''}
      </div>
    </div>
  )
}

export default UserProfile