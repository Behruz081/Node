import { useState } from "react";

function Liveinput() {
    const [matn,setMatn]=useState('');

    return(
        <div style={{textAlign:"center", marginTop:"30px", padding:"20px", border:"1px solid black"}}>
            <h3>Jonli Matn Yozish: </h3>

            <input type="text"
              placeholder="Ismingizni yozing..."
              value={matn}
              onChange={(e)=> setMatn(e.target.value)}
              style={{padding:"10px", fontSize:"16px", width:"250px"}}
            />

            <h4 style={{color:"green"}}>Siz yozayotgan matn: {matn}</h4>
        </div>
    )

}

export default Liveinput