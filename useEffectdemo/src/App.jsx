import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import WelcomeApp from './WelcomeApp'
import Clock from './Clock'

function App() {

  return (
    <div className="container">
      <WelcomeApp/>
      <Clock/>
    </div>
  )
}

export default App
