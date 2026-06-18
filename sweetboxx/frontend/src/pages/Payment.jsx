import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useGlobalContext } from '../context/AppContext';
//import Stepper from '../../components/Stepper';//
import './Payment.css';

const Payment = () => {
  //const { totalPrice } = useGlobalContext();
  const navigate = useNavigate();

  const [card, setCard] = useState({ code: '', expiry: '', cvv: '' });

  const isValid = card.code.length === 16 && card.expiry.length >= 4 && card.cvv.length === 3;

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Ödəniş simulyasiyası baş tutduqda növbəti mesaja keçir
      navigate('/message');
    }
  };

  return (
    <div>
      //import Stepper from '../../components/Stepper';//
      <div className="payment-grid">
        <form className="form-card" onSubmit={handlePaymentSubmit}>
          <h3 style={{marginBottom:'20px', fontWeight:'700'}}>Kart Məlumatları</h3>
          <div className="input-block">
            <label>Kartın 16 rəqəmli kodu</label>
            <input 
              type="text" maxLength={16} className="input-field" placeholder="0000000000000000"
              value={card.code} onChange={e => setCard({...card, code: e.target.value.replace(/\D/g,'')})}
            />
          </div>
          <div className="split-inputs">
            <div className="input-block">
              <label>Ay / İl</label>
              <input 
                type="text" placeholder="MM/YY" className="input-field"
                value={card.expiry} onChange={e => setCard({...card, expiry: e.target.value})}
              />
            </div>
            <div className="input-block">
              <label>CVV</label>
              <input 
                type="password" maxLength={3} className="input-field" placeholder="123"
                value={card.cvv} onChange={e => setCard({...card, cvv: e.target.value.replace(/\D/g,'')})}
              />
            </div>
          </div>
          <button type="submit" className="pay-action-btn" disabled={!isValid}>
            Ödə (₼{totalPrice.toFixed(2)})
          </button>
        </form>

        <div className="form-card" style={{backgroundColor:'#FFFDFD'}}>
          <h4 style={{fontWeight:'700', marginBottom:'12px'}}>Hesablanacaq məbləğ</h4>
          <p style={{fontSize:'28px', fontWeight:'800', color:'#DE3B6A'}}>₼{totalPrice.toFixed(2)}</p>
          <p style={{fontSize:'12px', color:'#9CA3AF', marginTop:'10px'}}>Kartınızdan bu məbləğ çıxılacaq və son mərhələyə keçəcəksiniz.</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;