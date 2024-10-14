import React from 'react'
import './technologies.css'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

const Technologies = () => {
  return (
    <div className='tech-ctn section-padding'>
      <h1>Technologies</h1>
      <div className='tech-p'>
        <p>I've worked with a range a technologies in the web development</p>
        <p>world.From backend to design</p>
      </div>

      <div className='tech-flex'>
        <div className='flex-1 flex'>
          <DiReact size='2rem' color='white' /> 
          <h2>Front-End</h2>
          <p>Expreince with <br/> React.js</p>
        </div>

        <div className='flex-2 flex'>
          <DiFirebase size='2rem' color='white' />
          <h2>Back-End</h2>
          <p>Expreince with <br/> Node and Databasses</p>
        </div>

        <div className='flex-3 flex'>
          <DiZend size='2rem' color='white' />
          <h2>UI/UX</h2>
          <p>Expreince with <br/> tools like figma</p>
        </div>
      </div>
    </div>
  )
}

export default Technologies
