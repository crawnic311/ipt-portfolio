import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ProjectCarousel = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isForward, setIsForward] = useState(true)

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length)
    setIsForward(true)
  }

  const prevProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length)
    setIsForward(false)
  }

  const getCircles = () => {
    let circles = []
    for (let i = 0; i < projects.length; i++) {
      circles.push(
        <div
          className="Circle"
          id={i == projects[currentProject].id - 1 ? 'Current' : 'not'}
        ></div>
      )
    }
    return circles
  }

  return (
    <div>
      <div className="Project">
        <TransitionGroup>
          <CSSTransition
            key={projects[currentProject].id}
            timeout={500}
            classNames={
              isForward ? 'project-transition' : 'project-transition-reverse'
            }
          >
            <div className="Project">
              <a
                className="Link"
                href={projects[currentProject].link}
                target="blank"
              >
                <img
                  className="Project-Preview"
                  src={process.env.PUBLIC_URL + projects[currentProject].image}
                  alt="preview"
                />
              </a>
              <div className="Project-Title">
                {projects[currentProject].title}
              </div>
              <p className="Project-Description">
                {projects[currentProject].description}
                <br />
                <br />
                {projects[currentProject].info}
                {projects[currentProject].title === 'Rekishi' ? (
                  <div>
                    {projects[currentProject].login}
                    <br />
                    {projects[currentProject].password}
                  </div>
                ) : (
                  <div></div>
                )}
              </p>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="Nav-Container">
        <div className="Nav-Circles">{getCircles()}</div>
        <div className="Nav-Buttons">
          <div className="Nav" onClick={prevProject}>
            <span className="Nav-Text">Previous</span>
          </div>
          <div className="Nav" onClick={nextProject}>
            <span className="Nav-Text">Next</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel
