import React from 'react'
import HeaderImage from "../../pic/Myphoto.png"
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book.
          </p>

          <div className="header__cta">
            <a href= "#contact" className="btn primary">let's talk</a>
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