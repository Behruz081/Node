import { useState } from "react";
import './Counter.css'

function Counter() {
    const [son, setSon]=useState(0);
    
    const oshirish=()=>{
        setSon(son+1)
    }

    const kamaytirish=()=>{
        setSon(son-1)
    }

    return(
        <div className="container" style={{textAlign:"center", marginTop:"30px", padding:"20px", border:"1px solid black"}}>
            <h2>Hozirgi sanoq: {son}</h2>

            <button className="btn" onClick={oshirish} style={{padding:"10px 20px", fontSize:"18px", marginRight:"10px"}}>
                Oshirish (+)
            </button>
            
            <button className="btn" onClick={kamaytirish} style={{padding:"10px 20px", fontSize:"18px", marginRight:"10px"}}>
                Kamaytirish (-)
            </button>

            <button className="btn" onClick={()=>setSon(0)} style={{padding:"10px 20px", fontSize:"18px"}}>
                Nollash
            </button>

        </div>
    )
}

export default Counter