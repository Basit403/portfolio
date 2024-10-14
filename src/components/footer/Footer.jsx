import React from 'react'
import './footer.css'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-ctn section-padding'>
      <div className='footer-dash' />

      <div className='flex-footer'>
        <div className='footer-flex'>
          <div className='footer-left'>
            <div className='call'>
              <h3>CALL</h3>
              <p>111-111-111</p>
            </div>

            <div className='email'>
              <h3>EMAIL</h3>
              <p>contact@jsmastery.net</p>
            </div>
          </div>
          <h2>Innovating one project at a time</h2>
        </div>

        <div className='footer-icons'>
          <p><AiFillGithub size='2rem' color='white' /></p>
          <p><AiFillLinkedin size='2rem' color='white' /></p>
          <p><AiFillInstagram size='2rem' color='white' /></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
