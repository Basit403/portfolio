import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about-ctn section-padding'>
      <h1>About Me</h1>
      <div className='about-p'>
        <p>The purpose of this Portfolio is to help aspiring and</p>
        <p>established developers to take thier development skills to</p>
        <p>the next level and build awesome apps.</p>
      </div>

      <div className='about-flex'>
        <div className='flex-one'>
          <h3>2017</h3>
          <p>Started my journey</p>
        </div>

        <div className='flex-two'>
          <h3>2018</h3>
          <p>Worked as a freelance <br/>developer</p>
        </div>

        <div className='flex-three'>
          <h3>2019</h3>
          <p>Founded javascript <br/> mastery</p>
        </div>

        <div className='flex-four'>
          <h3>2020</h3>
          <p>Shared my projects with <br/> the world</p>
        </div>

        <div className='flex-five'>
          <h3>2021</h3>
          <p>Started my own platforms</p>
        </div>
      </div>

      <div className='home-dash' />
    </div>
  )
}

export default About
