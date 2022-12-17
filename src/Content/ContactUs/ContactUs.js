import React from 'react';
import './ContactUs.css';
import svg from '../../assets/svgFiles';
import ContactForm from './ContactForm/ContactForm';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/');
    }

  return (
    <div className='contactUs'>
        <img className='logo' onClick={clickHandler} src='' alt='logo' />
        <h1>Contact Us!</h1>
        <div className='contactForm'>
            <div>{svg}</div>
            <ContactForm />
        </div>
    </div>
  )
}

export default ContactUs