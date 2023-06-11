import React from 'react'

const MenuToggle = () => {
  return (
    <div className="Menu-Is-Visilbe">
      <nav className="Menu-Modal">
        <div className="Inner-Pop-Menu">
          <h2></h2>
          <ul className="Links">
            <li>
              <a href="#headline">About Me</a>
            </li>
            <li>
              <a href="#aboutMe">About Me</a>
            </li>
            <li>
              <a href="#skills">About Me</a>
            </li>
            <li>
              <a href="#contact">About Me</a>
            </li>
          </ul>
          <a className="Close"></a>
        </div>
      </nav>
    </div>
  )
}

export default MenuToggle
