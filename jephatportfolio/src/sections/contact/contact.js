import React from 'react'
import {MdEmail} from "react-icons/md"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillMessage} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
import { useRef } from 'react';
import emailjs from "emailjs-com"

import "./contact.css"

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yholch9', 'template_cpu4sij', form.current, 'P5mR7AVgMLSigOV8E')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='Contact' >
       <h5>Get in Touch</h5>
       <h2>Contact Me</h2>
       <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h4>mukundijephat22@gmail.com</h4>
            <a href='mailto:mukundijephat22@gmail.com' target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <AiFillMessage className='contact__option-icon' />
            <h4>Messanger</h4>
            <h4>Jery Maina</h4>
            <a href='https://m.me/profile.php?id=100076938646018' target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h4>+254713805349</h4>
            <a href='https://api.whatsapp.com/send?phone+254713805349' target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name='message' rowr="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn primary'>Send message</button>

        </form>
       </div>
       </section>
  )
}

export default Contact