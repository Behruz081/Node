import { useState } from 'react'
import './App.css'
import axios from 'axios'


function Library() {
 
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
    <div style={{width:"700px", margin:"auto" }}>
      <div style={{display:"flex"}}>
        
        <div style={{ marginBottom: '20px', margin:"0 20px 20px auto", display:"inline" }}>
          <h1 style={{marginLeft:"90px"}}>Kitoblarni izlang!</h1>
          <textarea
            rows="5"
            value={book}
            onChange={(e) => setBook(e.target.value)}
            placeholder="Nomini kiriting..."
            style={{ width: '96%', height:"60px" , padding: '12px', paddingBottom:"0" , borderRadius: '8px', border: '1px solid #ccc',
               fontSize: '16px', resize: 'none', fontSize:"40px", justifyContent:"center", alignItems:"center" }}
          />
        </div>
            
        <button 
          onClick={searchbooks}
          disabled={loading || !book}
          style={{
            height: '75px', marginTop:"90px" , padding: '12px', background: '#9b59b6', color: 'white',
            border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px',
            fontWeight: 'bold', transition: '0.2s', opacity: (!book || loading) ? 0.6 : 1,
            display:"inline"
          }}
        >
          {loading ? "Qidirilmoqda..." : "Izlash"}
        </button>

      </div>



      <div style={{display:"grid", gridTemplateColumns:"repeat"}}>
        {result.map((item, index) => (
            <div style={{display:"flex", width:"auto", height:"400px"}}>

              <img style={{marginBottom:"20px", height:"370px", width:"250px", marginRight:"10px"}} src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}  />

                <p key={index}> 
                    <p style={{color:"yellow", marginLeft:"10px"}}>Kitob nomi: {item.title} </p>   
                    <p style={{color:"white"}}>Yozuvchisi: {item.author_name}</p>
                    <p style={{color:"white"}}>Birinchi marotaba nashr qilingan yili: {item.first_publish_year} </p>
                </p>
                
                {/* <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} */}

            </div>
        ))}
      </div>

    </div>
  )} 

export default Library
