import React from 'react';
//import { useGlobalContext } from '../context/AppContext';

const Profile = () => {
  //const { user } = useGlobalContext();

  return (
    <div style={{maxWidth:'600px', margin:'60px auto', padding:'30px', backgroundColor:'#fff', borderRadius:'24px'}}>
      <h2 style={{fontSize:'22px', fontWeight:'700', marginBottom:'20px', borderBottom:'1px solid #F3F4F6', paddingBottom:'10px'}}>Profil Bölməsi</h2>
      {user ? (
        <div style={{textAlign:'left', display:'flex', flexDirection:'column', gap:'12px'}}>
          <p><strong>İstifadəçi:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Telefon:</strong> {user.phone}</p>
          <p><strong>Ünvan:</strong> {user.address}</p>
        </div>
      ) : (
        <p>İstifadəçi məlumatları tapılmadı.</p>
      )}
    </div>
  );
};

export default Profile;