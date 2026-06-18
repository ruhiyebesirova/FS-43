import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useGlobalContext } from '../context/AppContext';

const Login = () => {
  const { setUser } = useContext(); 
  const navigate = useNavigate();

 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegisterAndLogin = (e) => {
    e.preventDefault(); 

   
    if (!fullName || !email) {
      alert("Zəhmət olmasa bütün xanaları doldurun!");
      return;
    }

    setUser({
      fullName: fullName,
      email: email,
      address: "Azərbaycan",
    });

    
    navigate('/select-box');
  };

  return (
    <div style={{maxWidth:'360px', margin:'100px auto', padding:'30px', backgroundColor:'#fff', borderRadius:'24px', textAlign:'center', boxShadow:'0 4px 20px rgba(0,0,0,0.05)'}}>
      <h3 style={{fontSize:'20px', fontWeight:'700', marginBottom:'8px'}}>Qeydiyyat / Giriş</h3>
      <p style={{fontSize:'12px', color:'#9CA3AF', marginBottom:'24px'}}>Məlumatlarınızı daxil edərək qutunuzu hazırlamağa başlayın.</p>
      
      <form onSubmit={handleRegisterAndLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        <input 
          type="text" 
          placeholder="Ad və Soyadınız" 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #E5E7EB', fontSize: '14px', outline: 'none' }}
        />

        <input 
          type="email" 
          placeholder="Email ünvanınız" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #E5E7EB', fontSize: '14px', outline: 'none' }}
        />

        <button 
          type="submit"
          style={{width:'100%', backgroundColor:'#DE3B6A', color:'#fff', padding:'12px', borderRadius:'12px', border:'none', fontWeight:'600', cursor:'pointer', marginTop: '12px'}}
        >
          Qeydiyyatdan keç və Daxil ol
        </button>

      </form>
    </div>
  );
};

export default Login;