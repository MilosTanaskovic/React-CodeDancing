import React, {useState, useEffect} from 'react';

import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';

import {AppWrap} from '../../wrapper';
import {urlFor, client} from '../../Client';

import './Work.scss';

const Work = () => {
  const [filters, setFilters] = useState(['UX/UI', 'Web App', 'React JS', 'All']);
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([])
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});

  useEffect(() => {
   const query = '*[_type == "works"]';

   client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWorks(data);
      })
  }, [])

  const handleWorkFilter = (item) => {
    console.log(item)
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      if(item === 'All') {
        console.log('all')
        setFilterWorks(works)
      } else {
        console.log('not all')
        setFilterWorks(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }

  return (
    <>
    {/* Section Title */}
     <h2 className='head-text'>My Creative <span>Portfolio </span>section!</h2>
    {/* Work Filter */}
     <div className="app__work-filter">
      {filters.map((item, index) => (
        <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        >
          {item}
        </div>
      ))}
     </div>
    {/* Work Projects */}
    <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__work-portfolio'
    >
        {filterWorks.map((work, index) => (
          <div  className="app__work-item app__flex" key={index}>
            <div  className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{opacity: [0 ,1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer nofollow">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className="app__flex"    
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer nofollow">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className="app__flex"    
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10}}>{work.title}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
    </motion.div>

    </>
  )
}

export default AppWrap(Work, 'work')
