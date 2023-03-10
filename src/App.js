import "./index.css"
import Hero from "./components/Hero/hero"
import Nav from "./components/Nav/Nav"
import About from "./components/About/about"
import Experience from "./components/Experience/experience"
import Services from "./components/Services/Services"
import Portfolio from "./components/Protfolio/protfolio"
import Testimoials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Review from './components/Review/Review';

function App() {
  return (
    <div className='pp'>
      <Hero />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimoials />
      <Contact />
    
      <Footer />
    </div>
  )
}

export default App
