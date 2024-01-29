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
    // js
    images.javascript,                 // 1
    images.node,                       // 2
    // react with addons
    images.react,                      // 3
    images.redux,                      // 4
    // ts
    images.typescript,                 // 5
    // style
    images.tailwindcss,                // 6 
    images.sass,                       // 7
    //images.mu5                         // 8
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
            <p className="p-text">Senior Frontend | React Web Engineer 👨‍💻 &nbsp;</p>
            <p className="p-text">Basketeer at AIK Basket 🏀</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__header-img'
      >
        <img 
          src={images.milos}
          //srcSet={`${images.milos}, ${images.about01}`} 
          loading="lazy" 
          alt="Milos Tanaskovic - CodeDancingwithMilos profile" 
        />
        <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt='CodeDancing with Milos'
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
            <img src={stack} alt="tech stack of Milos Tanaskovic - CodeDancingwithMilos" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');