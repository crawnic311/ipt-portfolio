import React from 'react'

const Contact = () => {
  return (
    <div>
      <p className="Contact-Quip">
        Let's connect and collaborate to create impactful learning experiences.
        Reach out to discuss how we can design engaging e-learning solutions
        tailored to your needs.{' '}
      </p>
      <div className="Contact-Line" id="Contact-Address">
        Orem, UT 84057
      </div>
      <div className="Contact-Line" id="Contact-Email">
        dillon.craw@gmail.com
      </div>
      <div className="Contact-Buttons-Holder">
        <button className="Contact-Buttons">
          <a
            href="https://docs.google.com/document/d/1E6UPWmel1o5LDudCTl6ecdWPIph7kBgzAJEWmtAK6N4/edit"
            target="_blank"
            className="Contact-Button-Text"
            id="Resume-Button"
          >
            Resume
          </a>
        </button>
        <button className="Contact-Buttons">
          <a
            href="https://www.linkedin.com/in/dillon-craw"
            target="_blank"
            className="Contact-Button-Text"
            id="LinkedIn-Button"
          >
            LinkedIn
          </a>
        </button>
        <button className="Contact-Buttons">
          <a
            href="https://github.com/crawnic311"
            target="_blank"
            className="Contact-Button-Text"
            id="Github-Button"
          >
            Github
          </a>
        </button>
      </div>
    </div>
  )
}

export default Contact
