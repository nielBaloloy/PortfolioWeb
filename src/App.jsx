import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import  Home from './pages/home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  

  return (
    <>
     <Home/>
     <Projects/>
     <About/>
     <Contact/>
    </>
  )
}

export default App
