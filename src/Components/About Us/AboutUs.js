import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const AboutUs = () => {
    return (
        <>
        <Header></Header>
        <div className='about-container'>
           <h1 className='about-header'>About Us</h1>
           <p className='about-text'>Education is a devolved matter in the UK, with separate systems overseen by separate governments. England, Wales, and Northern Ireland, with certain exceptions, follow the National Curriculum of the United Kingdom. Scotland, on the other hand, has its own set of educational standards.
            
            We are always trying to better performance to build good communication and good mind set
           </p>
        </div>
        <Footer></Footer>
        </>
    );
};

export default AboutUs;