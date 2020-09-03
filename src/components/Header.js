import React from 'react'
import './style.css'

const Header = (props) => {
  return (
    <header>
      <h1>ANDREW'S MUSIC EMPORIUM</h1>
      <nav className="nav-list">
        <ul>
          <li>Home</li>

          <li>About</li>

          <li>Albums</li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
