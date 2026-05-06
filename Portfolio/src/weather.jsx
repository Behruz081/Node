import React, {useState, useEffect} from "react";
import axios from 'axios';

function weather() {
    const [name, setName] = useState([])
    const [weather, setWeather] = useState([])

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const apiKey = '9f41e63fa97810957bd818fa45407f5c'; 
                const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
                
                const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
                const data = await response.json();

                setWeather

            } catch (error) {
                console.error("Ma'lumot olishda xatolik:", error);
            }
        };
    fetchRates()
}, []);

    return(
        <div>
            <h1>{name}</h1>
        </div>
    )




}