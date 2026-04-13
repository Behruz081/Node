import './App.css'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const Home = () => <h2>Bosh sahifa</h2>
const About = () => <h2>Biz haqimizda</h2>
const Contact = () => <h2>Aloqa bo'limi</h2>

function App() {
  return (
    <BrowserRouter>
      <nav style={{padding:"20px", background:"#eee"}}>
        <Link to='/' style={{marginRight:"10px"}}>Bosh sahifa</Link>
        <Link to='/about' style={{marginRight:"10px"}}>Biz haqimizda</Link>
        <Link to='/contact'>Aloqa</Link>
      </nav>

      <div style={{padding:"20px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
