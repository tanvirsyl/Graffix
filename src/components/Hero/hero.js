import React from "react"
import CTA from "./cta"
import ME from "../assets/bg.png"
import HeroSocial from "./heroSocial"
import './hero.css'

const hero = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Tanvir Hussain</h1>
        <h5 className='text-light'>Front-end developer</h5>
        <CTA />
        <HeroSocial/>

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='' className='scroll_down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default hero
