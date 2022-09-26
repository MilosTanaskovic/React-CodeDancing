import React, {useState, useEffect} from 'react';

import {motion} from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import {AppWrap} from '../../wrapper';
import {urlFor, client} from '../../Client';

import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        console.log(data);
        setExperiences(data);
      })
    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
  }, [])

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        {/* Skills */}
        <motion.div 
          className="app__skills-list"
        >
          {skills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Experiences */}
        <div className="app__skills-exp">
            {console.log('exp', experiences)}
            {experiences?.map((exp) => (
              <motion.div
                className="app__skills-exp-item"
                key={exp.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{exp.year}</p>
                </div>

                <motion.div
                  className="app__skills-exp-works"
                >
                  {console.log('work', exp.works)}
                  {exp?.works?.map((work) => (
                    <>
                      <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration: 0.5}}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}       
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills')