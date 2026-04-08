import { useEffect, useState } from "react";

function Clock() {
    const [vaqt, setVaqt]=useState(new Date().toLocaleTimeString())
    useEffect(() => {
        const interval = setInterval(() => {
            setVaqt(new Date().toLocaleTimeString());
            console.log("Soat yangilandi!");
        }, 1000);

        return () => clearInterval(interval);
    }, []); 



    const [date, setDate]=useState(new Date().toLocaleDateString())
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date().toLocaleDateString());
        }, 1000);
        return () => clearInterval(interval);
    }, []); 


    function ran() {
        const a=Math.floor(Math.random()*255), b=Math.floor(Math.random()*255), c=Math.floor(Math.random()*255)

        document.getElementById('watch').style.backgroundColor =`rgb(${a},${b},${c})`;
        document.getElementById('watch').style.boxShadow =`0 0 50px rgb(${a},${b},${c})`;
        document.getElementById('h1').style.color =`rgb(${b},${c},${a})`;
        document.getElementById('h2').style.color =`rgb(${b},${c},${a})`;
    }


return( <div>
        
    <div id="watch" style={{
        textAlign:"center",
        marginTop:"50px",
        padding:"20px",
        background:"#282c34",
        color:"white",
        borderRadius:"15px",
        display:"inline-block"    
    }}>
            <h1 id="h1">Hozirgi vaqt: </h1>
            <h2 id="h2" style={{fontSize:"48px", color:"#61dafb"}}>{vaqt}</h2>
            <button onClick={ran}>Random</button>
        </div>

    <div style={{
        textAlign:"ce nter",
        marginTop:"50px",
        padding:"20px",
        background:"#6388d0",
        color:"white",
        borderRadius:"15px",
        width:"400px",
        marginLeft:"340px"
    }}>
        <h1 id="h1" style={{color:"#64eef0"}}>Hozirgi date: </h1>
        <h2 id="h2" style={{fontSize:"48px", color:"#fbe661"}}>{date}</h2>
    </div>


    </div> )
}

export default Clock