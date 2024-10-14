import React from 'react'
import './navbar.css'
import { DiCssdeck } from 'react-icons/di'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar'>
      <p><DiCssdeck className='port-icon' /> <span className='port'>Portfolio</span></p>

      <div className="navbar-links">
        <p><a href="#projects">Projects</a></p>
        <p><a href="#technologies">Technologies</a></p>
        <p><a href="#about">About</a></p>
      </div>

      <div className='nav-icons'>
        <p><AiFillGithub size='2rem' color='white' /></p>
        <p><AiFillLinkedin size='2rem' color='white' /></p>
        <p><AiFillInstagram size='2rem' color='white' /></p>
      </div>
    </div>
  )
}

export default Navbar
