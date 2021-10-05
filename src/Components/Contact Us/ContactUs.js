import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';
const ContactUs = () => {
    return (
        <>
        <Header></Header>
        <div className='contact-container'>
        <h1 className= 'contact-header' >Contact Us</h1>
            <h3 className='contact-text'>We Are Always here to Contact With You</h3>

            <h4>Mobile: 017********</h4>
            <h4 className='contact-gmail'>Gmail: example@gmail.com</h4>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ContactUs;