import React from 'react';
import './Footer.css';

function Footer() {
    
  return (
    <div className='footer'>
        <div className='company col'>
            <h2>Viewer's Choice</h2>
            <div className='info'>
                <p>About</p>
                <p>Contact Us!</p>
            </div>
        </div>
        {/* <div className='solutions col'>
            <h2>Solutions</h2>
            <div className='info'>
                
            </div>
            
        </div> */}
        <div className='contact col'>
            <h2>Contact!</h2>
            <div className='info'>
                <p>Phone:8178275115</p>
                <p>Email: viewerchoice@gmail.com</p>
                <p>Blog:</p>
            </div>
        </div>
    </div>
  )
}

export default Footer