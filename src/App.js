import React, { useState, useEffect } from 'react'
import './App.css'
import Headline from './components/Headline/name-position'
import AboutMe from './components/About-Me/about-me'
import Skills from './components/Skills/skills'
import ProjectHeadline from './components/Projects/projects-headline'
import ProjectCarousel from './components/Projects/ProjectCarousel'
import ContactHeadline from './components/Get-In-Touch/contact-headline'
import Contact from './components/Get-In-Touch/contact'
import SkillsHeadline from './components/Skills/skills-headline'
import Menu from './components/Headline/menu'
import MenuToggle from './components/Menu/menu-toggle'
import AboutMeHeadline from './components/About-Me/about-me-headline'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuScreen, setMenuScreen] = useState('')

  useEffect(() => {
    if (isMenuOpen === true) {
      setMenuScreen('Visible')
    } else {
      setMenuScreen('Invisible')
    }
  }, [isMenuOpen])

  const projects = [
    {
      id: 1,
      title: 'Microcore',
      image: '/microcore2.png',
      link: 'https://pcs.byu.edu/',
      description:
        'Microcore is an immersive workplace simulation designed to help students develop their technical writing skills.',
      info: 'I brought a complete and comprehensive redesign to this web based course that is now live at BYU and will service hundreds of students each semester.',
      login: '',
      password: '',
    },
    {
      id: 2,
      title: 'Disaster Discovery Center',
      image: '/DDC.png',
      link: 'https://disasterdiscoverycenter.org/',
      description:
        'An in person workshop to help individuals and families develop awareness around their emergency preparedness.',
      info: 'I worked with a team to create this workshop that is now used on college campuses across the US to help students experience and prepare for the challenges of natural disasters in their area.',
    },
    {
      id: 3,
      title: 'Doko Recycling',
      image: '/doko.jpg',
      link: 'https://dokorecyclers.com/',
      description:
        'A public school curriculum developer for students throughout Kathmandu, Nepal learn all about recycling.',
      info: 'I lead a team of locals and humanitarian volunteers to develop this comprehensive high school curriculum for the NGO Doko Recyclers in Kathmandu, Nepal.',
    },
    {
      id: 4,
      title: '50 Years of Education Research',
      image: '/50years.png',
      link: 'https://open.byu.edu/50_years',
      description:
        'The publication is an open education resource synthesizing the past 50 years of research in the education and technology.',
      info: 'I wrote the chapter on Educational Technology in the 1980 decade and was heavily involved in the reviewing, editing, and writing of the rest of the Educational Technology section.  ',
    },
    {
      id: 5,
      title: 'Handyman Training',
      image: '/Handyman.jpg',
      link: '',
      description:
        'A simple online presentation and course designed to help anyone get their general handyman business started.',
      info: 'I created this course in both adobe captivate and articulate storyline 360. It features audio and vidual presentation, mini-tests, and gamified learning.',
    },
    {
      id: 6,
      title: 'Minesweeper',
      image: '/Minesweeper Preview.jpeg',
      link: 'https://minesweeper-1bfe6.web.app/',
      description: 'My take on the Microsoft classic - Minesweeper.',
      info: 'Built using pure JavaScript, HTML, CSS, and deployed with Firebase. It features recursive cell revealing and an immersive interface. Give it a go!',
    },
  ]

  return (
    <div className="App" id="headline">
      <div
        className={menuScreen}
        onClick={() => {
          setIsMenuOpen(false)
        }}
      />
      <img
        src={require('../src/bg-images/Banff 45 OP.jpg')}
        alt=""
        className="BG-Image"
      />
      {/* <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
      {/* {isMenuOpen ? <MenuToggle menuScreen={menuScreen} /> : <div></div>} */}
      {/* <MenuToggle menuScreen={menuScreen} /> */}
      <div className="App-Headline-Section" id="Headline-BG-Image">
        <a className="Logo" href=""></a>
        <Headline />
      </div>
      <div className="Gradient-Wrapper-AboutMe">
        <div className="App-AboutMe-Section">
          <AboutMeHeadline />
          <AboutMe />
        </div>
      </div>
      <div className="Gradient-Wrapper-Skills">
        <div className="App-Skills-Section">
          <SkillsHeadline />
          <Skills />
        </div>
      </div>
      <div className="Gradient-Wrapper-Projects">
        <div className="App-Projects-Section">
          <ProjectHeadline />
          <div className="App-Projects-Container">
            <ProjectCarousel projects={projects} />
          </div>
        </div>
      </div>
      <div id="Headline-BG-Image">
        <div className="App-Contact-Section">
          <ContactHeadline />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
