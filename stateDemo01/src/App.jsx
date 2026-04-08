import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Counter from './Counter'
import Liveinput from './liveinput'

function App() {
  return (
   <div>
    <Counter/>
    <Liveinput/>
   </div>
  )
}

export default App
