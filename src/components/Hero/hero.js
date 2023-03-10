import React from "react"
import CTA from "./cta"
import ME from "../assets/bg.png"
import HeroSocial from "./heroSocial"
import './hero.css'

const hero = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello We are</h5>
        <h1>Team Graffix</h1>
        <h5 className='text-light'>UI/UX, Front & Back End Development.</h5>
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
