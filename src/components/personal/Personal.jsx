import React from 'react'
import './personal.css'

const Personal = () => {
  return (
    <div className='personal-ctn section-padding'>
      <h1>Personal Acomplishments</h1>
        <div className='personal-btn'>
            <div className='box'>
                <h2>20+</h2> 
                <p>Open Source <br/>Projects</p>
            </div>

            <div className='box'>
                <h2>1000+</h2> 
                <p>Students</p>
            </div>

            <div className='box'>
                <h2>1900+</h2> 
                <p>Github Followers</p>
            </div>

            <div className='box'>
                <h2>5000+</h2> 
                <p>Github Stars</p>
            </div>
        </div>  
    </div>
  )
}

export default Personal
