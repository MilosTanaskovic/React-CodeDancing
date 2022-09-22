import React, { useState } from 'react';

import {motion} from 'framer-motion';
import { AppWrap} from '../../wrapper';

import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  const [techStack, setTechStack] = useState([
    images.sass,
    images.react,
    images.redux,
  ]);

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className="p-text">
                Hello, I am
              </p>
              <h1 className="head-text">Milos</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer &nbsp;</p>
            <p className="p-text">Consultant at Salt</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__header-img'
      >
        <img src={images.milos} alt="milos tanaskovic codedancingstudio profile" />
        <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt='profile codedancingstudio'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {techStack.map((stack) => (
          <div className="circle-cmp app__flex">
            <img src={stack} alt="tech stack of Milos codedancing" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');