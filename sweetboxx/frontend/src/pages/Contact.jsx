import React, { useState } from 'react';

export default function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Zəhmət olmasa bütün xanaları doldurun!");
      return;
    }
    
  
    alert(`Təşəkkür edirik, ${name}! Mesajınız uğurla göndərildi. Sizinlə tezliklə əlaqə saxlayacağıq.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={{ 
      maxWidth: '950px', 
      margin: '50px auto', 
      padding: '0 20px', 
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      
      {/* Üst Başlıq */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1F2937', marginBottom: '8px' }}>Əlaqə</h2>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#DE3B6A', margin: '0 auto', borderRadius: '2px' }}></div>
        <p style={{ marginTop: '12px', color: '#6B7280', fontSize: '15px' }}>Hər hansı bir sualınız və ya təklifiniz var? Bizə yazın!</p>
      </div>

      {/*  Sol tərəfdə məlumatlar, Sağ tərəfdə Forma */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '30px', 
        backgroundColor: '#FFF5F7', // Çox açıq soft pink fon
        padding: '40px', 
        borderRadius: '30px',
        boxShadow: '0 10px 25px rgba(222, 59, 106, 0.05)'
      }}>
        
        {/* Əlaqə məlumatları */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
          <div>
            <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#DE3B6A', marginBottom: '15px' }}>Bizimlə Əlaqə</h4>
            <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.6' }}>
              Şirniyyat qutuları, sifarişin vəziyyəti və ya korporativ əməkdaşlıq barədə suallarınız üçün bizə hər zaman yaza bilərsiniz.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: '#4B5563' }}>
            <div>📍 <strong>Ünvan:</strong> Bakı şəhəri, Azərbaycan</div>
            <div>📞 <strong>Telefon:</strong> +994 (55) 999 88 77</div>
            <div>✉️ <strong>Email:</strong> info@sweetbox.az</div>
            <div>⏰ <strong>İş saatları:</strong> Hər gün: 09:00 - 21:00</div>
          </div>
        </div>

        {/*  Mesaj Forması */}
        <div style={{ 
          flex: '1 1 400px', 
          backgroundColor: '#ffffff', 
          padding: '30px', 
          borderRadius: '20px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#4B5563', marginBottom: '6px' }}>Adınız və Soyadınız</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nihad Əliyev" 
                style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #FFE4E9', fontSize: '14px', outline: 'none', backgroundColor: '#FFFDFE' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#4B5563', marginBottom: '6px' }}>Email ünvanınız</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nihad@sweetbox.az" 
                style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #FFE4E9', fontSize: '14px', outline: 'none', backgroundColor: '#FFFDFE' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#4B5563', marginBottom: '6px' }}>Mesajınız</label>
              <textarea 
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Sual və ya təklifinizi bura qeyd edin..." 
                style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #FFE4E9', fontSize: '14px', outline: 'none', resize: 'none', backgroundColor: '#FFFDFE' }}
              ></textarea>
            </div>

            <button 
              type="submit"
              style={{
                width: '100%', 
                backgroundColor: '#DE3B6A', 
                color: '#fff', 
                padding: '14px', 
                borderRadius: '12px', 
                border: 'none', 
                fontWeight: '600', 
                cursor: 'pointer',
                fontSize: '15px',
                transition: 'background-color 0.2s',
                marginTop: '8px'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#C22F59'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#DE3B6A'}
            >
              Mesajı Göndər
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}