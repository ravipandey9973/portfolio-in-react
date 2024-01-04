import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'


function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <a href="mailto:ravipandey9973@gmail.com"><span>ravipandey9973@gmail.com</span></a>
            <div className="f-icons">
              <a href="https://www.instagram.com/__ravi_pandey__/" ><Insta color='white' size='3rem' /> </a>
               <Facebook color='white' size='3rem' />
               <a href="https://github.com/ravipandey9973" ><Github color='white' size='3rem' /></a>  
            </div>
        </div>
    </div>
  )
}

export default Footer