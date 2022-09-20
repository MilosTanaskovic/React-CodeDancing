import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import {images} from '../../constants';
import { client, urlFor } from '../../Client'

import './About.scss';

// const aboutsData = [
//   {
//     'title' : 'web dev',
//     'description': 'good',
//     'imgUrl': images.about01,
//   },
//   {
//     'title' : 'web design',
//     'description': 'good',
//     'imgUrl': images.about02,
//   },
//   {
//     'title' : 'ux/ui',
//     'description': 'good',
//     'imgUrl': images.about03,
//   }
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])
  return (
    <>
      <h2 className="head-text">I Know That <span>Good Apps </span><br />means <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration:0.5, type: 'tween'}}
            className='app__profiles-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: '20px'}}>{about.title}</h2>
            <p className="t-text" style={{marginTop: '10px'}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About