import React from 'react'
import { Navbar, Home, Projects, Technologies, About, Personal, Footer } from './components'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Projects />
      <Technologies />
      <About />
      <Personal />
      <Footer />
    </div>
  )
}

export default App
