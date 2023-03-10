import React from "react"
import IMG1 from "../assets/GRAFFIX-1.jpg"
import IMG2 from "../assets/GRAFFIX-3.1.jpg"
import IMG3 from "../assets/GRAFFIX-2.jpg"
import IMG4 from "../assets/qwq.jpg"
import IMG5 from "../assets/GRAFFIX-4.jpg"
import IMG6 from "../assets/GRAFFIX-5.jpg"
import "./protfolio.css"

const protfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Are you frustrated with working out how to grow your business?",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 2,
      image: IMG2,
      title: "Are You Struggling to Come Up With Ideas for Your Business?",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 3,
      image: IMG3,
      title: "Not getting enough reach on your Social Media Posts?",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 4,
      image: IMG4,
      title: "One last time. Can one of 'em win the World Cup?",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 5,
      image: IMG5,
      title: "Is your team taking the world cup home?",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 6,
      image: IMG6,
      title: "your Restaurant while keeping up with current trends",
      github: "https://github.com",
      demo: "https://github.com",
    },
  ]
  return (
    <section id='protfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id,image,title,demo,github})=>{
            return (
              <article className='portfolio_item'>
                <div className='portfolio_item_image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item_cta'>
                  <a href={github} className='btn' target='_blank'>
                    Github
                  </a>
                  <a href={demo} className='btn btn-primary' target='_blank'>
                    Live demo
                  </a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default protfolio
