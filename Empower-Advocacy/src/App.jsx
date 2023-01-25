import { useState } from 'react'

import Hero from './components/Hero'


import Contact from './components/Contact'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import About from './About'
import Hero2 from './components/Hero2'
function App() {


  return (
    <div className="App">
<Hero2 />
<About /> 
<Services/>
<Testimonials/> 
<Contact />
<Footer /> 

    </div>
  )
}

export default App
