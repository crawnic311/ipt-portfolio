import React from 'react'

const Skills = () => {
  return (
    <div className="Skill-Container">
      <div className="Skills-Flex-Item">
        <img
          src={require('../../skills-icons/articulate.webp')}
          alt=""
          className="Skills-Icon"
        />
        <p className="Skills-Text">Storyline 360</p>
      </div>
      <div className="Skills-Flex-Item">
        <img
          src={require('../../skills-icons/Adobe-Captivate.png')}
          alt=""
          className="Skills-Icon"
        />
        <p className="Skills-Text">Captivate</p>
      </div>
      <div className="Skills-Flex-Item">
        <img
          src={require('../../skills-icons/Adobe_Photoshop.png')}
          alt=""
          className="Skills-Icon"
        />
        <p className="Skills-Text">Photoshop</p>
      </div>
      <div className="Skills-Flex-Item">
        <img
          src={require('../../skills-icons/Adobe-Illustrator.png')}
          alt=""
          className="Skills-Icon"
        />
        <p className="Skills-Text">Illustrator</p>
      </div>
      <div className="Skills-Flex-Item">
        <img
          src={require('../../skills-icons/JavaScript Icon.png')}
          alt=""
          className="Skills-Icon"
        />
        <p className="Skills-Text">Javascript</p>
      </div>
      <div className="Skills-Flex-Item">
        <img
          src={require('../../skills-icons/HTML Icon.png')}
          alt=""
          className="Skills-Icon"
        />
        <p className="Skills-Text">HTML</p>
      </div>
      <div className="Skills-Flex-Item">
        <img
          src={require('../../skills-icons/CSS Icon.png')}
          alt=""
          className="Skills-Icon"
        />
        <p className="Skills-Text">CSS</p>
      </div>
    </div>
  )
}

export default Skills
