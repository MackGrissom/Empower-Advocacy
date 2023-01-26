
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import About from './components/About'
import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import { Route, Routes } from 'react-router-dom'
import { HashLink as Link} from 'react-router-hash-link'
function App() {


  return (
    <BrowserRouter>
<div className="app">

      <Hero /> <Link to='/'/>
      <Services /> <Link to='#services'/> 
      <About /> <Link to='#about'/>
      <Testimonials /> <Link to='#testimonials'/> 
      <Contact /> <Link to='#contact'/> 
     

      </div>

    </BrowserRouter>


// <Navbar />
//     <App />
    // <Footer />
 



  )
}

export default App
