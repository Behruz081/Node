import React, { useState } from 'react';

function TranslationApp() {
  // State-lar: kiritilgan matn, tarjima natijasi va yuklanish holati uchun
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return; // Agar matn bo'sh bo'lsa, funksiyani to'xtatish

    setLoading(true);
    const apiKey = "SIZNING_API_KALITINGIZ"; // Bu yerga Google API kalitingizni qo'ying
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,        // Inputdan kelayotgan matn
          target: "uz"    // O'zbek tiliga tarjima
        })
      });

      const data = await response.json();
      // Natijani saqlash
      setTranslatedText(data.data.translations[0].translatedText);
    } catch (error) {
      console.error("Tarjimada xatolik yuz berdi:", error);
      setTranslatedText("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    } finally {
      setLoading(false); // Yuklanishni tugatish
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Tarjimon (English  O'zbekcha)</h2>
      
      {/* Matn kiritish maydoni */}
      <textarea
        rows="4"
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}
        placeholder="Inglizcha matn kiriting..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Tarjima qilish tugmasi */}
      <button 
        onClick={handleTranslate} 
        disabled={loading}
        style={{ 
          width: '100%', 
          padding: '10px', 
          backgroundColor: '#007BFF', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Tarjima qilinmoqda...' : 'Tarjima qilish'}
      </button>

      {/* Natijani ko'rsatish */}
      {translatedText && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
          <strong>Natija:</strong>
          <p style={{ margin: '5px 0 0 0' }}>{translatedText}</p>
        </div>
      )}
    </div>
  );
}

export default TranslationApp;