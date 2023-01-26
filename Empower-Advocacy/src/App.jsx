
import ReactDOM from 'react-dom/client';



import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import About from './components/About'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import {Route, Routes} from 'react-router-dom'
function App() {


  return (
    <Routes>
        <Route path='/' element={ <Hero /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/pricing' element={ <Pricing /> }/>
        <Route path='/services' element={ <Pricing /> }/>
        <Route path='/testimonials' element={ <Testimonials /> }/>
        <Route path='/reviews' element={ <Reviews /> }/>
        <Route path='/contact' element={ <Contact /> }/>

      </Routes>



      
      // <Hero />
      // <About />
      // <Pricing />
      // <Testimonials />
      // <Reviews />
      // <Contact />
      // <Footer />


    
  )
}

export default App
