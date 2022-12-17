import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {db} from '../../../firebase';
import './ContactForm.css';

function ContactForm() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');
    const navigate = useNavigate();

    const submitHandler = async() => {
        const data = {
            name: name,
            email: email,
            message: message
        }

        await addDoc(collection(db,'userQueries'), data);
        navigate('/contactUs');
    }

  return (
    <div className="wrapper">
        <div className="header">
            {/* <p className='formPara'>Do you have a question? Send us a message and we will respond as soon as possible.</p> */}
        </div>
        <div className='form'>
            <h4 className='formLabel'>Name</h4>
            <input className='formInput' type="text" name="name" onChange={e => setName(e.target.value)} />
            <h4 className='formLabel'>Email</h4>
            <input className='formInput' type="text" name="email" onChange={e => setEmail(e.target.value)} />
            <h4 className='formLabel'>Message</h4>
            <textarea className='formTextArea' onChange={e => setMessage(e.target.value)}></textarea>
            <button className='formButton' onClick={submitHandler}>Send</button>
        </div>
    </div>
  )
}

export default ContactForm