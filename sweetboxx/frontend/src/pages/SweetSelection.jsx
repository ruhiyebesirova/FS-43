import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { useGlobalContext } from '../context/AppContext';
//import Stepper from '../../components/Stepper';//
//import SweetSelection from '../../components/SweetCard';
import './BoxSelection.css';

const dummySweets = [
  { id: 1, name: 'Macaron', weight: '100 gr', price: 0, image: 'https://lovefoodfeed.com/wp-content/uploads/2023/01/Macarons-px-1200-01-1-1024x1024.jpg' },
  { id: 2, name: 'Dubai Chocolate', weight: '150 gr', price: 4.50, image: 'https://www.tasteofhome.com/wp-content/uploads/2025/02/GettyImages-2181217380-scaled-e1739904698896.jpg?fit=750%2C750' }, 
  { id: 3, name: 'Ekler', weight: '120 gr', price: 0, image: 'https://www.rapata.com.tr/wp-content/uploads/2017/12/ekler-cikolatali-600x600.jpg' },
  { id: 4, name: 'Truffle', weight: '100 gr', price: 3.00, image: 'https://carveyourcraving.com/wp-content/uploads/2022/10/Rose-almond-truffles-1024x1024.jpg' },
  { id: 5, name: 'Çiyələkli Tart', weight: '130 gr', price: 2.80, image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=400' },
  { id: 6, name: 'Brauni', weight: '140 gr', price: 0, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400' },
  { id: 7, name: 'Kruassan', weight: '90 gr', price: 0, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400' },
  { id: 8, name: 'Snickers Ice Cream', weight: '150 gr', price: 0, image: 'https://ecom-su-static-prod.wtrecom.com/images/products/4/LN_464323_BP_4.jpg' }, 
  { id: 9, name: 'Çizkek', weight: '160 gr', price: 0, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400' },
  { id: 10, name: 'Love Chocolate', weight: '100 gr', price: 0, image: 'https://5.imimg.com/data5/RR/AK/GLADMIN-18624878/love-heart-milk-chocolate-500x500.jpg' } 
];

const SweetSelection = () => {
  //const { selectedSweets, toggleSweet, hasPaidSweets } = useGlobalContext();
  const navigate = useNavigate();

  const canProceed = selectedSweets.length >= 2 && selectedSweets.length <= 10;

  const handleNextStep = () => {
    if (hasPaidSweets) {
      navigate('/payment');
    } else {
      navigate('/message');
    }
  };

  return (
    <div>
      <Stepper currentStep={2} />
      <div className="flow-page">
        <h2 className="flow-title">sirniyyat novu secin</h2>
        <p className="flow-subtitle">Min 2, maks 10 ədəd seçə bilərsiniz. 2-3 ədədi pulludur.</p>

        <div className="flow-grid">
          {dummySweets.map(sweet => (
            <SweetCard 
              key={sweet.id}
              sweet={sweet}
              isSelected={selectedSweets.some(s => s.id === sweet.id)}
              onToggle={() => toggleSweet(sweet)}
            />
          ))}
        </div>

        <div className="bottom-bar">
          <span className="notice-txt">Seçilən: {selectedSweets.length} / 10</span>
          <button 
            className="flow-next-btn"
            disabled={!canProceed}
            onClick={handleNextStep}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SweetSelection;