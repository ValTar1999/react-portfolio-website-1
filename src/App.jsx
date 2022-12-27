import React from 'react'
import Header from './components/header/header'
import Nav from './components/Nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonial'
import Contacts from './components/contacts/contacts'
import Footer from './components/footer/footer'

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  )
}

export default App

