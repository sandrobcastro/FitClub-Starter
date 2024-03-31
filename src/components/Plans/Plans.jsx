import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
   <div className="plans-container" id='plans'>
    <div className="blur plans-blur-1"></div>
    <div className="blur plans-blur-2"></div>
    <div className="programs-header" style={{gap: '2rem'}}>
        <span className='stroke-text'>Conheça</span>
        <span>os nosso</span>
        <span className='stroke-text'>planos</span>
    </div>

    { /* Planos */ }
    <div className="plans">
        {plansData.map((plan,i) => (
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>{plan.price}</span>

                <div className="features">
                    {plan.features.map((feature,i) => (
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={1}>{feature}</span>
                        </div>
                    ))}
                </div>
                <div><span>Veja mais beneficios  </span></div>
                <button className='btn'>Junte-se já</button>
            </div>
            ))}
    </div>

   </div>
  )
}

export default Plans