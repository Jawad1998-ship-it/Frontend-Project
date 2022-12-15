import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../images/logo.svg';
import './navbar.css';

const Navbar = () => {

    const Menu = () => (
        <>
            <p>
                <a href="#home">Home</a>
            </p>
            <p>
                <a href="#gpt3">What is GPT3?</a>
            </p>
            <p>
                <a href="#possibility">Open AI</a>
            </p>
            <p>
                <a href="#features">Case Studies</a>
            </p>
            <p>
                <a href="#blog">Library</a>
            </p>
        </>
    )

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt3_navbar'>
            <div className="gpt3_navbar-links">
                <div className="gpt3_logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="gpt_navbar-mainContainer">
                <div className="gpt3_navbar_container">
                    <Menu />
                </div>
                <div className="gpt3_navbar-sign">
                    <p>Sign In</p>
                    <button type='button'>Sign Up</button>
                </div>
            </div>
            <div className="gpt3_navbar-menu">
                {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> :
                <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3_navbar-menuContainer scale-up-center">
                        <div className="gpt3_navbar-menu-links">
                            <Menu /> 
                            <div className="gpt3_navbar-menu-sign">
                                <p>Sign In</p>
                                <button type='button'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )

}

export default Navbar;