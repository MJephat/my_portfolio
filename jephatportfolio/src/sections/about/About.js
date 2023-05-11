import React from 'react'
import passport from "../../pic/passport.png"
import cv from "../../doc/cv.docx"
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
        <p>
        My name is Jephat, and I’m a career writer. My job is to provide 
        and deliver whatever specification my client ask for in their request.
        </p>
        <p> I am a junior frontend software Engineer. I write codes using these
          tecnologies Reactjs,HTML,CSS,JavaScript,json.</p>
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