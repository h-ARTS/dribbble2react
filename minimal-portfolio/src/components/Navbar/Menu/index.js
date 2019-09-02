import React from 'react'
import './Menu.css';

const Menu = () => {
  return (
    <div className="Menu">
      <ul className="Menu-list">
        <li className="Menu-list-item"><a href="/">Home</a></li>
        <li className="Menu-list-item"><a href="/about">About</a></li>
        <li className="Menu-list-item"><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Menu
