import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const contacts = () => {
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:dummyegator@gmail.com">Sead a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option__icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://www.facebook.com">Sead a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option__icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://www.whatsapp.com">Sead a message</a>
          </article>
        </div>
        <form>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Sead Message</button>
        </form>
      </div>
    </section>
  )
}

export default contacts