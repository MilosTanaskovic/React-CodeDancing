import React, {useState} from 'react';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';

import {images} from '../../constants'

import './Navbar.scss';

const Navbar = () => {
    const [nav, setNav] = useState([
        'home',
        'about',
        'work',
        'skills',
        'contact',
    ]);
    const [toggle, setToggle] = useState(false);
    
  return (
    <nav className='app__navbar'>
         <div className='app__navbar-logo'>
            {/*<img src={images.logo} alt="logo" />*/}
            {/* <p>CodeDancing with</p>*/}
            <h1 className="head-text"> Milos</h1>
        </div>
        {/* desk nav bar */}
        <ul className='app__navbar-links'>
            {nav.map((item) => {
                return (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div/>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                )
            })}
        </ul>
        {/* mobile navigation bar */}
        <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {toggle && (
                <motion.div
                    whileInView={{ x: [300, 0]}}
                    transition={{duration: 0.85, ease: 'easeOut'}}
                >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                    {nav.map((item) => (
                        <li  key={item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                        </li>
                    ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
