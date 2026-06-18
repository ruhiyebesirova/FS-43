import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { useGlobalContext } from '../context/AppContext';

const Success = () => {
  const navigate = useNavigate();
  const { setSelectedBox, setSelectedSweets } = useContext(); // useGlobalContext() əvəzinə useContext() istifadə edin

  const handleCleanUp = () => {
    setSelectedBox(null);
    setSelectedSweets([]);
    navigate('/');
  };

  return (
    <div style={{textAlign:'center', padding:'80px 20px', maxWidth:'450px', margin:'0 auto'}}>
      <div style={{fontSize:'64px', marginBottom:'16px'}}>🎉</div>
      <h2 style={{fontSize:'24px', fontWeight:'700', marginBottom:'12px'}}>Sizin qutunuz uğurla göndərildi!</h2>
      <p style={{color:'#6B7280', fontSize:'14px', marginBottom:'32px'}}>Qarşı tərəfin email ünvanına animasiyalı açılış linki göndərildi.</p>
      <button 
        onClick={handleCleanUp}
        style={{backgroundColor:'#DE3B6A', color:'#fff', padding:'12px 28px', borderRadius:'12px', border:'none', fontWeight:'600', cursor:'pointer'}}
      >
        Ana Səhifəyə Qayıt
      </button>
    </div>
  );
};

export default Success;