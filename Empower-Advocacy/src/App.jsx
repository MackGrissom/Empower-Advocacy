import { useState } from 'react'

import Hero from './components/Hero'


import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import About from './About'
import Hero2 from './components/Hero2'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
function App() {


  return (
    <div className="App">
<Hero2 />
<Pricing />
<About /> 

<Testimonials/> 
<Reviews />
<Contact />
<Footer /> 

    </div>
  )
}

export default App
