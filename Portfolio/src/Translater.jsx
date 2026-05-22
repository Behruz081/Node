import { useState } from 'react'
import axios from 'axios'

function Translater() {
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [matches, setMatches] = useState('')
  const [matches1, setMatches1] = useState('')
  const [matches2, setMatches2] = useState('')
  const [sourceLang, setSourceLang] = useState('en')
  const [targetLang, setTargetLang] = useState('uz')
  const [loading, setLoading] = useState(false)

  const handleTranslate = async () => {
    if(!text) return
    setLoading(true)
    setTranslatedText('')

    try{
      const response = await axios.get(`https://api.mymemory.translated.net/get`, {
        params: {
          q:text, 
          langpair: `${sourceLang}|${targetLang}`
        }
      });
      // https://api.mymemory.translated.net/get?q=Hello&langpair=en|ru
      if(response.data && response.data.responseData) {
        setTranslatedText(response.data.responseData.translatedText) 

        setMatches(response.data.matches[0].translation)
        setMatches1(response.data.matches[1].translation)
        setMatches2(response.data.matches[2].translation)

        setStatus(response.data.responseStatus) 

      } else {
        alert("Tarjima topilmadi!")
      } 


      // if(response.data && response.data.matches){
      //   setMatches(response.data.matches[0].translation)
      //   setMatches1(response.data.matches[1].translation)
      //   setMatches2(response.data.matches[2].translation)
      // } else {
      //   alert("Sinonimlari yoq")
      // } 


      // if(response.data && response.data.responseStatus) {
      //   setStatus(response.data.responseStatus) 
      // } else {
      //   alert("Status yoq")
      // }  


    } catch (error) {
        console.error("Xatolik tafsiloti", error)
      }
      setLoading(false)
  } 

const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(translatedText);
    setTranslatedText(text);
  };

  return (
    <div style={{
      padding: '30px', maxWidth: '600px', margin: '50px auto', 
      fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', 
      borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', color: '#333'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>🌐 Kafolatlanmagan Tarjimon</h2>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '20px' }}>
        <select 
          value={sourceLang} 
          onChange={(e) => setSourceLang(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '15px' }}
        >
          <option value="en">Ingliz tili (EN)</option>
          <option value="ru">Rus tili (RU)</option>
          <option value="uz">O'zbek tili (UZ)</option>
          <option value="it">Italyan tili (IT)</option>
          <option value="tr">Turk tili (TR)</option>
        </select>

        <button 
          onClick={handleSwap}
          type="button"
          style={{ padding: '10px 15px', background: '#f1f1f1', border: '1px solid #ccc', borderRadius: '6px', 
            cursor: 'pointer', fontSize: '16px' }}
          title="Tillarni almashtirish"
        >
          🔄
        </button>

        <select 
          value={targetLang} 
          onChange={(e) => setTargetLang(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '15px' }}
        >
          <option value="uz">O'zbek tili (UZ)</option>
          <option value="en">Ingliz tili (EN)</option>
          <option value="ru">Rus tili (RU)</option>
          <option value="it">Italvyan tili (IT)</option>
          <option value="tr">Turk tili (TR)</option>
        </select>

      </div>

      <div style={{ marginBottom: '20px' }}>
        <textarea
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Matnni kiriting..."
          style={{ width: '96%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px',
             resize: 'none' }}
        />
      </div>

      <button 
        onClick={handleTranslate}
        disabled={loading || !text}
        style={{
          width: '100%', padding: '12px', background: '#9b59b6', color: 'white',
          border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px',
          fontWeight: 'bold', transition: '0.2s', opacity: (!text || loading) ? 0.6 : 1
        }}
      >
        {loading ? "Tarjima qilinmoqda..." : "Tarjima qilish"}
      </button>

      {translatedText && (
        <div style={{ 
          marginTop: '25px', padding: '15px', backgroundColor: '#f8f9fa', 
          borderRadius: '8px', borderLeft: '5px solid #9b59b6'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#34495e' }}>Tarjimasi:</h4>
          <p style={{ fontSize: '18px', margin: 0, whiteSpace: 'pre-wrap', lineHeight: '1.5', marginBottom:"10px" }}>{translatedText}</p>
          <h4 style={{ margin: '0 0 10px 0', color: '#34495e' }}>Sinonimlari:</h4>

          <p>{matches} , {matches1} , {matches2}</p> 

        </div>
      )}
    </div>
  );
}

export default Translater;