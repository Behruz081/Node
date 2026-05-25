import { useState } from 'react'
import './App.css'
import axios from 'axios'


function Book() {
 
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState([])
  const [result, setResult] = useState([])


  const searchbooks = async () => {

    if(!book) return
    setLoading(true)

    try{
      const response = await axios.get('https://openlibrary.org/search.json', {
        params: {
          q: book // axios buni avtomatik url'ga ?q=kitob_nomi qilib ulaydi
        }
      });

      if(response.data){
        setResult(response.data.docs)
      } else{
        alert("Malumot topilmadi")
      }
    } catch (error) {
        console.error("Xatolik tafsiloti", error)
      }
      setLoading(false)
}


  return(
    <div style={{width:"500px", margin:"auto" }}>
      <div style={{ marginBottom: '20px', margin:"0 auto 20px auto" }}>
        <h1>Kitoblarni izlang!</h1>
        <textarea
          rows="5"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          placeholder="Nomini kiriting..."
          style={{ width: '96%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px',
             resize: 'none' }}
        />
      </div>

      <button 
        onClick={searchbooks}
        disabled={loading || !book}
        style={{
          width: '100%', padding: '12px', background: '#9b59b6', color: 'white',
          border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px',
          fontWeight: 'bold', transition: '0.2s', opacity: (!book || loading) ? 0.6 : 1
        }}
      >
        {loading ? "Qidirilmoqda..." : "Izlash"}
      </button>

      <div>
        {result.map((item, index) => (
            <div>
                <p key={index}>{item.title}</p>
                <p key={index}>{item.author_name}</p>
            </div>
        ))}

        {/* {result.map((item, index) => (
          <p key={index}>{item.author_name}</p>
        ))} */}

      </div>
    </div>
  )} 

export default Book
