import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='home-ctn section-padding'>
      <h1 className='welcome-txt'>Welcome To <br/> My Personal Portfolio</h1>
      <div className='home-p'>
        <p>The purpose of this Portfolio is to help aspiring and</p>
        <p>established developers to take thier development skills to</p>
        <p>the next level and build awesome apps.</p>
      </div>
      <p className='home-btn'>Learn More</p>
      <div className='home-dash' />
    </div>
  )
}

export default Home
