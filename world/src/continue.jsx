import { useEffect, useState } from 'react';

function Continue() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        const CountryOneByOne = () => {
            setLoading(true);
            setCountries([]); 
            
            try {
                const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,capital')
                const data = await res.json() 

                for(let i=0; i<=data.length; i++){
                    console.log(i)
                }
            } catch (err) {
              setError("Ma'lumot yuklashda xatolik!")
              console.error(err)
            } finally {
              setLoading(false)
            }
        }
    })

    return(
        <div>

        </div>
    )
}
