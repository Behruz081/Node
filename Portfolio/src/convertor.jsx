import React, {useState, useEffect} from "react";
import axios from 'axios';

function CurrencyConvertor() {
    const [rates, setrates] = useState([])
    const [amount, setAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('UZS')
    const [result, setResult] = useState(0)

    useEffect(() => {
        const fetchRates = async () => {
            try{
                const response = await axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/");
                const uzs={Ccy:"UZS", Rate:"1", CcyNm_UZ:"O'zbek so'mi"};
                const btc={Ccy:"BTC", Rate:"989952112", CcyNm_UZ:"Bitcoin"};
                const ton={Ccy:"TON", Rate:"27700", CcyNm_UZ:"Ton coin"};
                
                setrates([uzs, btc, ton, ...response.data])
            } catch(error){
                console.error("Xatolik:", error)
            }
        };
        fetchRates()
    }, []);

    useEffect(() => {
        if(rates.length > 0){
            const fromRate = rates.find(r => r.Ccy === fromCurrency)?.Rate;
            const toRate = rates.find(r => r.Ccy === toCurrency)?.Rate;

            const calc = (amount * fromRate) / toRate;
            setResult(calc.toFixed(2))
        }
    }, [amount, fromCurrency, toCurrency, rates]);

    return (
        <div style={{padding:"30px", maxWidth:"500px", margin:"0", background:"#f4f7f6",
            borderRadius:"15px", boxShadow:"0 4px 8px rgba(0,0,0,0.1)", margin:"auto"
        }}>
            <h2 style={{textAlign:"center"}}>Valyuta konvertori</h2>

            <div style={{marginBottom:"20px"}}>
                <label>Miqdorini kiriting:</label>
                <input type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{width:"100%", padding:"10px", marginTop:"5px", borderRadius:"5px", border:"1px solid #ccc"}} />
            </div>

            <div style={{display:"flex", justifyContent:"space-between", gap:"10px"}}>
                <div style={{ flex:1 }}>
                    <label>Dan:</label>
                    <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} 
                    style={{width:"100%", padding:"10px", borderRadius:"5px"}}>
                        {rates.map(r => <option key={r.Ccy} value={r.Ccy}>{r.Ccy} - {r.CcyNm_UZ}</option>)}
                    </select>
                </div>

                <div style={{ flex: 1}}>
                    <label>Ga:</label>
                    <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}
                        style={{width:"100%", padding:"10px", borderRadius:"5px"}}>
                            {rates.map(r => <option key={r.Ccy} value={r.Ccy}>{r.Ccy} - {r.CcyNm_UZ}</option>)}
                        </select>
                </div>
            </div>

            <div style={{marginTop:"30px", textAlign:"center", padding:"20px", background:"#fff", borderRadius:"10px"}}>
                <h3 style={{margin:0}}>Natija:</h3>
                <p style={{fontSize:"24px", fontWeight:"bold", color:"#2ecc71"}}>
                    {amount} {fromCurrency} = {result} {toCurrency}
                </p>
            </div>
        </div>
    )
}



export default CurrencyConvertor

