import React from 'react'
import "./footer.css"
import data from "../header/data"

function Footer() {
  return (
   <footer className='footer'>
    <div className="footer__container container">
      <h1 className="footer__title">Jephat</h1>

      <ul className="footer__list">
        <li><a href="#about" className="footer__link">About</a></li>
        <li><a href="#portfolio" className="footer__link">Projects</a></li>
        <li><a href="#testmonials" className="footer__link">Testmonials</a></li>
      </ul>
      <div className="footer__social">
      {
              data.map(item =><a key={item.id} href={item.link} target="_blank"
              rel="noopener noreferrer">{item.icon}</a>)
            }

      </div>

      <span className='footer__copy'>&#169; Jephat M. Maina. All
      right reserved</span>
    </div>

   </footer>
  )
}

export default Footer