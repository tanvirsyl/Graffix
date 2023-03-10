import React from "react"
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from "react"
import emailjs from "emailjs-com"
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_wyjcfnp",
      "template_yuj64dl",
      form.current,
      "RLIA2lzWhgoScEKuX"
    )
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>Graffix.innovation@gmail.com</h5>
            <a href='mailto:Graffix.innovation@gmail.com' target='_blank'>
              Send A Mail
            </a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option_icon' />
            <h4>Messenger</h4>
            <h5>Graffix</h5>
            <a href='https://m.me/graffix.innovation' target='_blank'>
              Send A Message
            </a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon' />
            <h4>Whatsapp</h4>
            <h5>+8801791565639</h5>
            <a
              href='https://api.whatsapp.com/send?phone+8801791565639'
              target='_blank'
            >
              Send A Text
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            id=''
            rows='7'
            placeholder='Yoyr Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
