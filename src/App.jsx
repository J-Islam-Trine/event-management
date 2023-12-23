import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import Navbar from './components/header.jsx'
import Hero from './components/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='mx-auto'>
              <Navbar></Navbar>
      <Hero></Hero>
      </div>
  )
}

export default App
