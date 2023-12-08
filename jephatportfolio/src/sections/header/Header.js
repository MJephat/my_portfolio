import React from 'react'
import HeaderImage from "../../pic/Myphoto1.png"
import data from './data'
import "./Header.css"

function Header() {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__profile'>
          <img src={HeaderImage} alt='profile'/>
        </div>
        <h3>Jephat M. Maina</h3>
        <p>
        Welcome!
        Hello! My name is Jephat M. Maina and am a frontend developer based in Nairobi, Kenya. I 
        have developed several applications since i started this journey. Some of my project are on my 
        portfolio section and your are free to check them out on live demo.
        </p>
        <p>I am passionate about cutting-edge, perfect, beautiful interfaces and intutively implemented UX.
          I am also pleased by clear and clean code.
        </p>

          <div className="header__cta">
            <a href= "#Contact" className="btn primary">let's talk</a>
            <a href= "#portfolio" className='btn light'>my work</a>
          </div>
          <div className='header__socials'>
            {
              data.map(item =><a key={item.id} href={item.link} target="_blank"
              rel="noopener noreferrer">{item.icon}</a>)
            }

          </div>
      </div>
    </header>
  )
}

export default Header