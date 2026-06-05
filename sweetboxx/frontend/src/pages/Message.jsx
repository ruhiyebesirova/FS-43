import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper from '../../components/Stepper';
import './Payment.css';

const Message = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', msg: '' });

  const isFormFilled = data.email && data.msg;

  const handleSendBox = (e) => {
    e.preventDefault();
    if (isFormFilled) {
      navigate('/success');
    }
  };

  return (
    <div>
      <Stepper currentStep={4} />
      <div style={{maxWidth:'480px', margin:'40px auto'}} className="form-card">
        <h3 style={{fontWeight:'700', marginBottom:'6px', textAlign:'center'}}>Məlumatları doldurun</h3>
        <p style={{fontSize:'12px', color:'#9CA3AF', textAlign:'center', marginBottom:'24px'}}>Hər iki inputun doldurulması məcburidir.</p>
        
        <form onSubmit={handleSendBox}>
          <div className="input-block">
            <label>Qarşı tərəfin E-maili</label>
            <input 
              type="email" required placeholder="name@domain.com" className="input-field"
              value={data.email} onChange={e => setData({...data, email: e.target.value})}
            />
          </div>
          <div className="input-block">
            <label>Mesajınız</label>
            <textarea 
              required placeholder="Bura mesajınızı yazın..." className="input-field" rows={5}
              value={data.msg} onChange={e => setData({...data, msg: e.target.value})}
            />
          </div>
          <button type="submit" className="pay-action-btn" disabled={!isFormFilled}>Göndər</button>
        </form>
      </div>
    </div>
  );
};

export default Message;