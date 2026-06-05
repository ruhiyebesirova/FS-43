import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/AppContext';

const Login = () => {
  const { setUser } = useGlobalContext();
  const navigate = useNavigate();

  const handleMockRegisterAndLogin = () => {
    setUser({
      fullName: "Nihad Əliyev",
      email: "nihad@sweetbox.az",
      phone: "+994 55 999 88 77",
      address: "Bakı, Azərbaycan",
    });
    navigate('/select-box');
  };

  return (
    <div style={{maxWidth:'360px', margin:'100px auto', padding:'30px', backgroundColor:'#fff', borderRadius:'24px', textAlign:'center', boxShadow:'0 4px 20px rgba(0,0,0,0.01)'}}>
      <h3 style={{fontSize:'20px', fontWeight:'700', marginBottom:'8px'}}>Qeydiyyat / Giriş</h3>
      <p style={{fontSize:'12px', color:'#9CA3AF', marginBottom:'24px'}}>Sistemə daxil olaraq qutunuzu hazırlamağa başlayın.</p>
      <button 
        onClick={handleMockRegisterAndLogin}
        style={{width:'100%', backgroundColor:'#DE3B6A', color:'#fff', padding:'12px', borderRadius:'12px', border:'none', fontWeight:'600', cursor:'pointer'}}
      >
        Qeydiyyatdan keç və Daxil ol
      </button>
    </div>
  );
};

export default Login;