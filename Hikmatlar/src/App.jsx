import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import QuoteCard from './QuoteCard'


function App() {
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
      document.body.style.backgroundColor=tasodifiyRang;

      document.body.style.transition='0.5s'


    }
  },[quote]);

  return (
    <div style={{maxWidth:"600px", margin:"50px auto", textAlign:"center"}}>
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

export default App
