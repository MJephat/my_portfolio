import { useState } from 'react'
import React from 'react'
import "./theme.css"

function Theme() {
    const [darkmode, setDarkMode]= useState(true)
  return (
    <theme className={darkmode ? 'dark-mode': 'light-mode'}>
        <div className='container'>
            <span style={{color:'yellow'}}> * </span>
            <div className='switch-checkbox'>

                <input type="checkbox"/>
                </div>
                <span style={{color:"gray"}}>Q</span>
        </div>


    </theme>
  )
}

export default Theme