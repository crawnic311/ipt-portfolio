import React from 'react'

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="Headline-Menu">
      <a
        className="Menu"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
      >
        <span className="Menu-Text">Menu</span>
        <i className="fa-solid fa-bars"></i>
      </a>
    </div>
  )
}

export default Menu
