import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'


const Hero = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth <= 768 ? true : false

  return (
    <div className="hero" id='hero'>
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
            {/*             unidos somos invenciveis */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile ? '142px' : '190px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}

                ></motion.div>
                <span>unidoooos somos invenciveis</span>
            </div>
            {/* Hero Heading  */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Sistema </span>
                    <span>Marcial</span>
                </div>
                <div>
                    <span>de Defesa</span>
                </div>
                <div>
                    <span>
                        O SMD é uma academia de artes marciais no Porto. Podes treinar Defesa Pessoal, BJJ, Muay Thai, 
                        Kickboxing, Karaté Shinkyokushin e Treino Funcional de Kali
                    </span>
                </div>
            </div>
            {/* Hero Button */} 
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={9} delay='2' preFix='+' />
                        </span>
                    <span>professores</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={150} start={90} delay='2' preFix='+' /> 
                        </span>
                    <span>membros</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={10} delay='2' preFix='+' />
                        </span>
                    <span>programas</span>
                </div>
            </div>
        {/* Hero Button */}
        <div className="hero-buttons">
            <buttons className="btn">Agendar aula experimental</buttons>
            <buttons className="btn">Faça Parte</buttons>
        </div>
        </div>
        <div className="right-h">
            <button className="btn">916 602 069</button>

            
            <motion.div 
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Batimento </span>
                <span>BPM</span>
            </motion.div>
            {/* Calories */}
            
            <img src={hero_image} alt="" className='hero-image' />
            <motion.img 
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}
            src={hero_image_back} alt="" className='hero-image-back' />
            {/* Calories */}
            
            <motion.div 
            initial={{right: '40rem'}}
            whileInView={{right: '28rem'}}
            transition={transition}
            className="calories">
                <img src={calories} alt="" />
                <div>
                    <span>Calorias Queimadas</span>
                    <span>220 kcal</span>
                </div>
                
            </motion.div>
        </div>
    </div>
  )
}

export default Hero