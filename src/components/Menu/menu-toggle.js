import React from 'react'

const MenuToggle = ({ menuScreen }) => {
  return (
    <div className="Menu-Is-Visilbe">
      <nav className="Menu-Modal" id={menuScreen}>
        <div className="Inner-Pop-Menu">
          <h2 className="Menu-Title">Menu</h2>
          <ul className="Links">
            <li>
              <a href="#headline">Dillon Craw</a>
            </li>
            <li>
              <a href="#aboutMe">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#getInTouch">Get In Touch</a>
            </li>
          </ul>
          <a className="Close"></a>
        </div>
      </nav>
    </div>
  )
}

export default MenuToggle
