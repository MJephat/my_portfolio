import React from 'react'
import data from "./data"
import "./Portfolio.css"

function Portfolio() {
  return (
   <section id='portfolio'>
    
    <h2>Portfolio</h2>
    
    <div className='container portfolio__container'>
     {
      data.map(({id, image, title, github, demo})=>{
        return(
          <article key={id}className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title}/> 
            </div>
            <h3>{title}</h3>
            <div className='portfolio___item-cta'>
              <a href={github} className='btn' target="_blank">Github</a>
              <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
        )

      })
     }

      
    </div>
   </section>
  )
}

export default Portfolio