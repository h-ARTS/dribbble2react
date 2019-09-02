import React from 'react'
import './Menu.css';

const Menu = () => {
  return (
    <div className="Menu">
      <ul className="Menu-list">
        <li className="Menu-list-item"><a href="/" alt="Home | Minimal Portfolio">Home</a></li>
        <li className="Menu-list-item"><a href="/about" alt="About">About</a></li>
        <li className="Menu-list-item"><a href="/contact" alt="Contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Menu
