import { useEffect, useState } from 'react';

function DavlatlarKetmaKet() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 1. Bayroq ochamiz: agar true bo'lsa, fetch ishlaydi
    let isMounted = true; 

    const fetchCountries = async () => {
      // Dublikatni oldini olish uchun avvalgi ma'lumotni tozalaymiz
      setCountries([]); 
      setLoading(true);

      try {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital');
        const data = await res.json();
        const limitedData = data.slice(0, 225);

        for (const country of limitedData) {
          // Agar komponent o'chib ketgan bo'lsa, siklni to'xtatamiz
          if (!isMounted) break; 

          await new Promise(resolve => setTimeout(resolve, 300));
          
          setCountries(prev => {
            // 2. Tekshiruv: agar bu davlat allaqachon massivda bo'lsa, qo'shma
            const isExist = prev.some(c => c.name.common === country.name.common);
            if (isExist) return prev;
            return [...prev, country];
          });
        }
      } catch (err) {
        console.error("Xato:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCountries();

    // Cleanup: komponent o'chganda isMounted'ni false qilamiz
    return () => { isMounted = false; };
  }, []); // Bo'sh massiv - faqat bir marta ishlaydi

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🌍 Davlatlar Ro'yxati</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
        {countries.map((c, i) => (
          <div key={c.name.common} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '10px', width: '150px' }}>
            <img src={c.flags.png} alt={c.name.common} style={{ width: '100%', height: '80px', objectFit: 'cover' }} />
            <h4>{c.name.common}</h4>
          </div>
        ))}
      </div>
      {loading && <p>⏳ Yuklanmoqda...</p>}
    </div>
  );
}

export default DavlatlarKetmaKet;




