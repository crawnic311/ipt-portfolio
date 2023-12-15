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
      link: 'https://pcs.byu.edu/PcsInfo/16',
      description:
        'Microcore is an immersive workplace simulation designed to help students develop their technical writing skills.',
      info: 'As an instructional designer leading its redesign, my role was to refine the learning outcomes for Microcore and align every aspect of the simulation with those outcomes. I created engaging and meaningful activities within the simulation to drive students forward with interest and curiosity toward solving a workplace incident through technical writing. I also designed the activities they participate in throughout the simulation to challenge them to think deeply and ethically about their coworkers and the report they produce involving their stories. All of this while being situation in a professional work environment where students can map out potential career paths and get a first hand feel of a professional work environment. ',
      login: '',
      password: '',
    },
    {
      id: 2,
      title: 'Disaster Discovery Center',
      image: '/DDC.png',
      link: 'https://docs.google.com/presentation/d/1pf1v125gWrJbA51xsBJGbjDQeeTKLAs7FX0P4GUObGc/edit?usp=sharing',
      description:
        'An in person workshop to help individuals and families develop awareness around their emergency preparedness.',
      info: 'The Disaster Discovery Center project was one of my favorite projects during my time in graduate school. Our team was tasked with creating an in person training course that would help college students have an immersive and informative experience about how to be prepared for natural disasters that would be likely to occur in their area. Participants would navigate this course using a mobile app on their phones which we created. My primary role in this project was to design the accompanying mobile app, including everything from the entire UI to the instructional videos and materials contained within it. Most of the materials and content we produced for the DDC is not publicly available but I have linked a google slide that documents the mobile app design materials and files I made for this project.',
    },
    {
      id: 3,
      title: 'Doko Recycling',
      image: '/doko.jpg',
      link: 'https://drive.google.com/drive/folders/14uEBsWlS7JexFK2DOzLWzFe2mw_CiSI-?usp=sharing',
      description:
        'A public school curriculum developer for students throughout Kathmandu, Nepal learn all about recycling.',
      info: 'Working with DOKO Recyclers was truly the experience of a lifetime! This was a project I was heavily involved in while on a self funded humanitarian trip in Nepal. DOKO is a local NGO who asked us to create a a curriculum on recycling for them to use in the established school systems throughout Kathmandu, Nepal. I lead a team of volunteers and educators through the process of designing an entire curriculum plan from scratch. We met multiple times a week with DOKO to better understand their vision and the unique cultural needs of the native students. This was a difficult project but ultimately an enriching and exciting experience which ultimately helped me decide to pursue a masters degree in instructional psychology and technology. Doko used our curriculum plan and adapted it more specifically to the plethora of educational institutions they are now partnered with. However, their curriculum is not publicly available. I have linked access to a google folder containing the lesson structure, curriculum plan, curriculum outline, and learning activities which my team and I created for DOKO.',
    },
    {
      id: 4,
      title: '50 Years of Education Research',
      image: '/50years.png',
      link: 'https://open.byu.edu/50_years',
      description:
        'The publication is an open education resource synthesizing the past 50 years of research in the education and technology.',
      info: 'This 50 years of education research book is an open education resource book that one of my graduate school professors initiated. I had  the special opportunity to write the chapter on Educational Technology in the 1980 decade and was heavily involved in the reviewing, editing, and writing of the rest of the Educational Technology section. The image here links directly to the published book.',
    },
    {
      id: 5,
      title: 'Minesweeper',
      image: '/Minesweeper Preview.jpeg',
      link: 'https://minesweeper-1bfe6.web.app/',
      description: 'My take on the Microsoft classic - Minesweeper.',
      info: 'Built using pure JavaScript, HTML, CSS, and deployed with Firebase. It features recursive cell revealing and an immersive interface. This is meant to display my technical skills as well as showcase my abilities as a designer and computer programmer.',
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
