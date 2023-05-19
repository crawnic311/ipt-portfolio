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
      title: 'Rekishi',
      image: '/Rekishi Preview.jpeg',
      link: 'https://www.rekishi.io/',
      description:
        'An up-and-coming community for all things Anime and Comics!',
      info: `I'm building this web app using react.js node.js and firebase. It's still in production but feel free to take a look around. Login to our test account with these credentials: `,
      login: 'rekishitester@gmail.com',
      password: 'rekishi123',
    },
    {
      id: 2,
      title: 'Minesweeper',
      image: '/Minesweeper Preview.jpeg',
      link: 'https://minesweeper-1bfe6.web.app/',
      description: 'My take on the Microsoft classic - Minesweeper.',
      info: 'Built using pure JavaScript, HTML, CSS, and deployed with Firebase. It features recursive cell revealing and an immersive interface. Give it a go!',
    },
    {
      id: 3,
      title: 'StealthScribe',
      image: '/StealthScribe Preview.jpeg',
      link: 'https://minesweeper-1bfe6.web.app/',
      description:
        'StealthScribe is an anonymous platform for classrooms of all kinds, facilitating confidential sharing of answers and fostering open expression of thoughts and ideas.',
      info: '',
    },
    {
      id: 4,
      title: 'Foody',
      image: '/Foody Preview.jpg',
      link: 'https://foody-authentication.firebaseapp.com/',
      description:
        'Foody is your quick, easy, and convenient place to store all of your favorite recipes!',
      info: '',
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
