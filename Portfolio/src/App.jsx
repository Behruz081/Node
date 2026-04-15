import './App.css'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import human from './assets/rasm.jpg'
import instagram from './assets/instagram.png'
import telegram from './assets/telegram.jpg'
import github from './assets/github.png'

const Home = () => {
  return(
    <div className='home' style={{borderRadius:"30px"}}>
        <div className="all">
            <div>
                <img className='human' src={human} style={{width:"220px", height:"220px", borderRadius:"50%"}} />
            </div>
            <div>
                <h1 style={{wordSpacing:"10px", display:"flex", marginLeft:"60px"}}>Hi, I'm 
                  <p style={{marginLeft:"15px", color:"rgb(213, 228, 9)"}}>Behruz🤚</p>
                </h1>
                <h2>I'm programmer</h2>
                <h3>☕fueled by coffee <br />
                  🏴based in the Uzbekistan <br />
                  🏫studies in Al-Kharizme <br />
                  📧  normatov081@gmail.com
                </h3>
                <h1> 
                  <a href=""> <img className='instagram icon' src={instagram}/> </a>
                  <a href="https://t.me/B3hruzbek"> <img className='tg icon' src={telegram}/> </a> 
                  <a href="https://github.com/Behruz081"> <img className='github icon' src={github}/> </a>
                </h1>
            </div>
        </div>
    </div>
  )
}

const About = () => {
  return(
    <div className='about'>
      <h1 className='abouth1'>Salom barchaga!</h1>
      <div className='aboutp'>
        <p className='p1'>Men Nomatov Behruz Xorazmning Yangibozor tumanidagi IT-Parkda o'qiyman.</p>
        <p className='p2'>Mening yoshim 15 da, 2010-yil 2-sentabrda tug'ilganman.</p>
      </div>
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
      <nav style={{padding:"20px", background:"rgb(56, 189, 248)", boxShadow:"0px 0px 30px blue"}}>
        <Link className='navtext' id='navhome' to='/' style={{marginRight:"10px"}}>Home</Link>
        <Link className='navtext' id="navabout" to='/about' style={{marginRight:"10px", textDecorationLine:"none"}}>About me</Link>
        <Link className='navtext' id="navcontact" to='/contact' style={{textDecorationLine:"none"}}>Contact</Link>
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

