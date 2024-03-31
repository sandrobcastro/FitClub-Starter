import React from 'react'
import './Join.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zn1a8lu', 'template_5zwlpc9', form.current, {
            publicKey: '2lmSib6XPYg8WPHse',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
                
        </div>
        <div className="right-j">

            <form ref={form} action="" className='email-container'onSubmit={sendEmail} >
                <input type="email" name='user_email' placeholder='Insira o seu email' />
                <button className='btn btn-j' >Junte-se a nós</button>
            </form>

        </div>
    </div>
  )
}

export default Join