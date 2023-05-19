import React from 'react'
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
import AboutMeHeadline from './components/About-Me/about-me-headline'

function App() {
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
      title: 'Handyman Training',
      image: '/Handyman.jpg',
      link: '',
      description:
        'A simple online presentation and course designed to help anyone get their general handyman business started.',
      info: 'I created this course in both adobe captivate and articulate storyline 360. It features audio and vidual presentation, mini-tests, and gamified learning.',
    },
  ]

  return (
    <div className="App">
      <img
        src={require('../src/bg-images/Banff 45 OP.jpg')}
        alt=""
        className="BG-Image"
      />
      <Menu />
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
            {/* <ProjectCarousel projects={projects} /> */}
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
