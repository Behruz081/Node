import { useEffect, useState } from 'react'
import './App.css'
import GetCountry from './getcountry'

function App() {
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleFetch = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,capital')
      const data = await res.json()

      const randomIndex = Math.floor(Math.random() * data.length)
      const randomCountry = data[randomIndex]

      setCountry({
        flag: randomCountry.flags.png,
        name: randomCountry.name.common,
        capital: randomCountry.capital,
        population: randomCountry.population.toLocaleString()
      })
    } catch (err) {
      setError("Ma'lumot yuklashda xatolik!")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleFetch()
  }, [])

  useEffect(() => {
    if (country) {
      const textEl = document.getElementById("text")
      if (textEl) {
        const Rcolors = ['#E67E22', '#FFFFFF', '#F1C40F', '#C0392B']
        textEl.style.color = Rcolors[Math.floor(Math.random() * Rcolors.length)]
      }
    }
  }, [country])

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
      
      {loading && <p>Yuklanmoqda...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && country && (
        <div id="container" style={{ padding: "20px", borderRadius: "10px" }}>
          <GetCountry image={country.flag} name={country.name} population={country.population} capital={country.capital} />
        </div>
      )}

      <button 
        onClick={handleFetch} 
        style={{ marginTop: "20px", padding: "10px 25px", fontSize: "16px", cursor: "pointer" }}
      >
        Yangi davlat
      </button>
    </div>
  )
}

export default App