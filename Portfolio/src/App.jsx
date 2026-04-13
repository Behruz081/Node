import './App.css'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import human from './assets/rasm.jpg'
import instagram from './assets/instagram.png'
import telegram from './assets/telegram.jpg'
import github from './assets/github.png'

const Home = () => {
  return(
    <div className='home'>
        <div className="all">
            <div>
                <img className='human' src={human} style={{width:"160px", height:"160px", borderRadius:"50%"}} />
            </div>
            <div>
                <h1 style={{wordSpacing:"10px", display:"flex", marginLeft:"60px"}}>Hi, I'm 
                  <p style={{marginLeft:"15px", color:"rgb(103, 160, 209)"}}>Behruz🤚</p>
                </h1>
                <h2>I'm programmer</h2>
                <h3>fueled by coffee <br />
                  based in the Uzbekistan <br />
                  studies in Al-Kharizme <br />
                  normatov081@gmail.com
                </h3>
                <h1> 
                  <a href=""> <img src={instagram}/> </a>
                  <a href="https://t.me/B3hruzbek"> <img className='tg' src={telegram}/> </a> 
                  <a href="https://github.com/Behruz081"> <img src={github}/> </a>
                </h1>
            </div>
        </div>
    </div>
  )
}

const About = () => {
  return(
    <div className='about'>

    </div>
  )
}
const Contact = () => {
  return(
    <div className='contact'>

    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{padding:"20px", background:"#eee"}}>
        <Link className='navtext' id='home' to='/' style={{marginRight:"10px"}}>Bosh sahifa</Link>
        <Link className='navtext' id="about" to='/about' style={{marginRight:"10px", textDecorationLine:"none"}}>Biz haqimizda</Link>
        <Link className='navtext' id="contact" to='/contact' style={{textDecorationLine:"none"}}>Aloqa</Link>
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

