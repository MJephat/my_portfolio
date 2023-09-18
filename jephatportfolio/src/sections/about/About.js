import React from 'react'
import passport from "../../pic/passport.png"
import cv from "../../doc/cv.pdf"
import {AiOutlineDownload} from "react-icons/ai"
import Card from "../../components/card"
import data from "./data"
import "./about.css"

const About = () => {
  return (
    <section id='About'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={passport} alt="about image"/>
          </div>
          </div>
        <div className="about__right"> 
        <h2>About Me</h2>
        <div className="about__cards">
          {
            data.map(item=>(
              <Card key={item.id} className="about__card">
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))
          }
        </div>
       
        <p> I am a highly motivated and detail-oriented Junior Software Developer with a strong foundation
in programming and a passion for building robust and scalable applications. Proficient in
Python, JavaScript, React, HTML, CSS, with experience in database management, API
development, and server-side scripting. Committed to continuous learning and growth, seeking
an opportunity to contribute to dynamic development teams and expand my expertise in back-
end development.</p>
        {/* <p>
        “My name is Jane Smith. I’m a software engineer currently based 
        in Berlin but originally from Tokyo. I have six years of experience
         with Java and Kotlin, and I hold a Blue Card to work across the EU.
          Previously, I worked for three years at X corp with a backend focus 
          where I worked primarily with Java. Presently, I work as a Backend Engineer 
          at Y corp in Berlin with Kotlin and Dart for testing. I’m a big fan of the MCU, 
          and I’m looking for my next Java opportunity in Berlin.”
        </p> */}
        <a href={cv} download className='btn primary'>Download cv<AiOutlineDownload/></a>
        </div>
       </div>
    </section> 
  )
}

export default About