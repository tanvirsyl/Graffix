import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { FiDribbble } from "react-icons/fi"
import "./hero.css"

const heroSocial = () => {
  return (
    <div className='header_socials'>
      <a href='https://github.com' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://github.com' target='_blank'>
        <FiDribbble />
      </a>
    </div>
  )
}

export default heroSocial
