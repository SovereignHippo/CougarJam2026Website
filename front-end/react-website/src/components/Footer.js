import React from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faGamepad } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Reach out with any questions
        </p>
        {/* <div className='input-areas'>
            <input type='email' name='email' placeholder='youremail'/>
            <Button buttonStyle='btn--outline'>Subscibe</Button>
        </div> */}
      </section>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='mailto:gamedevgroup@siue.edu'>gamedevgroup@siue.edu</Link>
            {window.innerWidth >= 1024 && <Link to='/terminal'>Save the princess</Link>}
            {/* <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link> */}
          </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to="/" className='social-logo'>
                        Cougar Jam &nbsp; <FontAwesomeIcon icon={faGamepad} />
                    </Link>
                </div>
                <small className='website-rights'>SIUE Game Development Group 2026</small>
            </div>

        </section>
    </div>
  )
}

export default Footer
