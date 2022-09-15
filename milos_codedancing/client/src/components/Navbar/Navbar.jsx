import React, {useState} from 'react'

import {images} from '../../constants'

import './Navbar.scss';

const Navbar = () => {
    const [nav, setNav] = useState([
        'home',
        'about',
        'work',
        'skills',
        'contact',
    ])
    console.log(nav)
  return (
    <nav className='app__navbar'>
         <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
        </div>
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
    </nav>
  )
}

export default Navbar
