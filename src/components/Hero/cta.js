import React from "react"
import CV from "../assets/cv.pdf"
import './hero.css'

const cta = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>
        Terms and Conditions
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's a Talk
      </a>
    </div>
  )
}

export default cta
