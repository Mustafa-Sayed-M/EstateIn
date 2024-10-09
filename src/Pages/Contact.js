import React from 'react';
import Landing from '../Components/Contact/Landing';
import Features from '../Components/Shared/Features/Features';
import FormContact from '../Components/Contact/FormContact/FormContact';

function Contact() {
    return (
        <div className='contact-page'>
            {/* Landing */}
            <Landing />
            <div className='container'>
                {/* Features */}
                <Features />
                {/* FormContact */}
                <FormContact />
            </div>
        </div>
    )
}

export default Contact;