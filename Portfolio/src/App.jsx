import './App.css'
import QuoteCard from './QuoteCard';
import CurrencyConvertor from './convertor';
import DavlatlarKetmaKet from './Davlatlar';
import MovieSearch from './MovieSearch';
import Translater from './Translater';
import Book from './Book';

import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import human from './assets/rasm.jpg'
import instagram from './assets/instagram.png'
import telegram from './assets/telegram.jpg'
import github from './assets/github.png'

import black_instagram from './assets/black_instagram.jpg'
import black_telegram from './assets/black_telegram.jpg'
import black_github from './assets/black_github.png'


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
                  <a href="https://instagram.com"> <img className='instagram icon' src={instagram}/> </a>
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
    <div className='contact' style={{backgroundColor:"black", height:"100vh", padding:"10px", borderRadius:"10px"}}>
      <p style={{fontSize:"40px", wordSpacing:"5px", lineHeight:"50px", color:"rgb(56, 189, 248)", boxShadow:"0 0 5px black",
        backgroundColor:" rgb(30, 41, 59)", marginTop:"40px", padding:"20px", width:"1000px", marginLeft:"auto", marginRight:"auto", 
        borderRadius:"20px"
      }}>
        Salom Siz hozir men bilan bog'lanish uchun barcha ijtimoiy tarmoqlarni ko'rishingiz mumkin!
      </p>

      <h1> 
          <a href="https://instagram.com"> <img className='instagram icon' src={black_instagram}/> </a>
          <a href="https://t.me/B3hruzbek"> <img className='tg icon' src={black_telegram}/> </a> 
          <a href="https://github.com/Behruz081"> <img className='github icon' src={black_github}/> </a>
      </h1>
      <h2>Tel raqam: <p> +998 99 432 27 60</p></h2>

    </div>
  )
}
const Quote = () => {
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  const getNewQuote=async()=>{
    setLoading(true)
    setError(null)
    try{
      const res=await fetch('https://dummyjson.com/quotes/random')
      const data=await res.json()

      setQuote({
        content:data.quote,
        author:data.author
      })
    } catch(err) {
      setError("Ma'lumot yuklashda xatolik yuz berdi!")
      console.log('Xato tafsiloti:', err)
    }
    setLoading(false)
  }

  useEffect(()=>{
    getNewQuote()
  },[])
 
  useEffect(()=>{
    if(quote){
      const ranglar=['#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c']
      const tasodifiyRang=ranglar[Math.floor(Math.random()*ranglar.length)]
      document.getElementById("quote").style.backgroundColor=tasodifiyRang;

      document.getElementById("quote").style.transition='0.5s'

      
      const colors=['#2C3E50', '#34495E', '#7F8C8D', '#16A085', '#27AE60']
      const randomcolor=colors[Math.floor(Math.random()*ranglar.length)]
      document.getElementById("container").style.backgroundColor=randomcolor

      document.getElementById("container").style.transition='0.5s'


      const Rcolors = ['#E67E22', '#ECF0F1', '#F1C40F', '#C0392B', '#8E44AD']
      const Rrandomcolor=Rcolors[Math.floor(Math.random()*ranglar.length)]
      
      document.getElementById("text").style.transition='0.5s'
      document.getElementById("text").style.color=Rrandomcolor

    }
  },[quote]);

  return (
    <div id='quote' style={{maxWidth:"600px", margin:"50px auto", textAlign:"center", height:"100vh",
                            padding:"180px", paddingTop:"10px" , borderRadius:"20px"}}>
      <h1>Kun hikmati</h1>
      {loading && <p>Yuklanmoqda...</p>}

      {error && <p style={{color:"red"}}>{error}</p>}

      {!loading && !error && quote && (
        <QuoteCard matn={quote.content} muallif={quote.author} />
      )}

      <button onClick={getNewQuote} style={{marginTop:"20px", padding:"10px"}}>
        Yangi hikmat
      </button>
    </div>
  )
}
const Projects = () => {
  return(
    <div>
      {/* <button> <a href='./convertor'>aa</a> </button> */}
      <button className='projectsbtn'> <Link className='projecttext' to='/convertor' style={{textDecorationLine:"none", color:"white"}}>Convertor</Link> </button>
      <button className='projectsbtn'> <Link className='projecttext' to='/davlatlar' style={{textDecorationLine:"none"}}>Davlatlar</Link> </button>
      <button className='projectsbtn'> <Link className='projecttext' to='/movie' style={{textDecorationLine:"none"}}>Filmlar izlash</Link> </button>
      <button className='projectsbtn'> <Link className='projecttext' to='/translater' style={{textDecorationLine:"none"}}>Tarjimon</Link> </button>
      <button className='projectsbtn'> <Link className='projecttext' to='/book' style={{textDecorationLine:"none"}}>Kitoblarni izlash</Link> </button>

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
        <Link className='navtext' id="navquote" to='/quote' style={{textDecorationLine:"none"}}>Kun hikmati</Link>

        <Link className='navtext' id="navprojects" to='/projects' style={{textDecorationLine:"none"}}>Projects</Link>

      </nav>

      <div style={{padding:"20px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/convertor" element={<CurrencyConvertor />} />
          <Route path="/davlatlar" element={<DavlatlarKetmaKet />} />
          <Route path="/movie" element={<MovieSearch />} />
          <Route path="/translater" element={<Translater />} />
          <Route path="/book" element={<Book />} />

        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App

