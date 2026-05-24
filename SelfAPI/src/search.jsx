import React, { useState } from 'react';
import axios from 'axios';

function Search() {
      const [query, setQuery] = useState('');
      const [text, setText] = useState([]);
    //   const [selectedMovie, setSelectedMovie] = useState(null); // Tanlangan kino tafsilotlari
      const [loading, setLoading] = useState(false);

      const API_KEY = ""; 

      const translate = async (e) => {
        e.prevendDefault();
        setLoading(true);
        try{
          const response = await axios.get(`as`)
          setText(response.data.Search || []) 
        } catch(error){
          console.error(error)
        }
        setLoading(false)
      }   

return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{textAlign:"center"}}> Tarjima qilinishi kerak bolgan so'zni kiriting! </h2>

      <form onSubmit={translate} style={{display:"flex", gap:"10px", marginBottom:"30px", justifyContent:""}} >
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="So'zni kiriting ..."
          style={{padding:"10px", width:"300px", borderRadius:"5px", border:"1px solid #ccc", margin:"auto", marginRight:"0"}}
        />
        <button type='submit' style={{padding:"10px 20px", background:"#27ae60", color:"white", border:"none", 
            borderRadius:"5px", cursor:"pointer", marginRight:"auto"
        }}>Tarjima qilish</button>
      </form>


      </div>
  )


}


export default Search
