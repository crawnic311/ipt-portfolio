import React from 'react'

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className="Headline-Menu"
      onClick={() => {
        setIsMenuOpen(!isMenuOpen)
      }}
    >
      <a className="Menu">
        <span className="Menu-Text">Menu</span>
        <i className="fa-solid fa-bars"></i>
      </a>
    </div>
  )
}

export default Menu
