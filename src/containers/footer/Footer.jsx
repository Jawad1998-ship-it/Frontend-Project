import React from 'react';
import logo from '../../images/logo.svg';
import './footer.css';

const Footer = () => {

    return (
        <div className='footer_container section_padding'>
            <div className="heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div className="btn">
                <p>Request Early Access</p>
            </div>
            <div className="links">
                <div className="logo">
                    <img src={logo} alt="gpt3_logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
                </div>
                <div className="links-container">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="links-container">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="links-container">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <div className="copyright">
                <p>@{new Date().getFullYear()} GPT-3. All rights reserved.</p>
            </div>
        </div>
    )

}

export default Footer;