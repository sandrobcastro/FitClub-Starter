import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram.png'

import linkedin from '../../assets/linkedin.png'
import logosmd from '../../assets/logosmd.svg'

const Footer = () => {
  return (
    <div className="Footer-container">
      
        <hr />
        <div className="footer">  
            <div className="social-links">
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
        </div>
        <div className="logo-f">
             <img src={logosmd} alt="" />  
        </div>
        <div className="adress">
             <span>R. da Escola Normal 100, 4000-244 Porto</span> 
        </div>
        
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer