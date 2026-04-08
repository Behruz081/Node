import { useEffect,useState } from "react";
import "./WelcomeApp.css"

function WelcomeApp() {
    const [name, setname]=useState('Mehmon')

    useEffect(()=>{
        document.title='Xush kelibsiz, '+ name
        console.log('useEffect ishladi!!!!!!!')
    }, [name])

    return(
        <div style={{padding:"20px"}} className="container">
            <h1>Salom, {name} !</h1>
            <input type="text" 
                onChange={(e) => setname(e.target.value)}
                placeholder="Ismingizni Kiriting"
            />
            <p>Brouser tepasidagi tab ga e'tibor bering!!!</p>
        </div>
    );
}

export default WelcomeApp