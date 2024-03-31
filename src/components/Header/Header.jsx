import React from 'react'
import './Header.css'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
import logosmd from '../../assets/logosmd.svg'

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
   <div className="header">
        <img src={logosmd} alt="" className='logo'/>

       {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
            color: 'white'
          }}

          onClick={() => setMenuOpen(true)}
        >
          <img src={bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
        </div>
       ) : (
        <ul className='header-menu'>
            <li>
            <Link
            onClick={() => setMenuOpen(false)}
            activeClass='active'
            to='hero'
            span={true}
            smooth={true}
            style={{color: 'white'}}
            >Home
            </Link>
            </li>

            <li>
            <Link
            onClick={() => setMenuOpen(false)}
            activeClass='active'
            to='programs'
            span={true}
            smooth={true}
            style={{color: 'white'}}
            >Programs
            </Link>
            </li>

            <li>
            <Link
            onClick={() => setMenuOpen(false)}
            activeClass='active'
            to='reasons'
            span={true}
            smooth={true}
            style={{color: 'white'}}
            >Why us
            </Link>
            </li>


            <li>
            <Link
            onClick={() => setMenuOpen(false)}
            activeClass='active'
            to='plans'
            span={true}
            smooth={true}
            style={{color: 'white'}}
            >Plans
            </Link>
            </li>

            <li>
            <Link
            onClick={() => setMenuOpen(false)}
            activeClass='active'
            to='testimonials'
            span={true}
            smooth={true}
            style={{color: 'white'}}
            >Testimonials
            </Link>
            </li>

        </ul>
       )}

        
   </div>
  )
}

export default Header