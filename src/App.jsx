import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testmonials from './components/Testmonials'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
      <Testmonials/>
      <Contact />
    </div>
  )
}

export default App
