import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav>
            <span>
                logo
            </span>
            <ul >
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li>Contact</li>
                
            </ul>

        </nav>
    </header>
  )
}

export default Navbar