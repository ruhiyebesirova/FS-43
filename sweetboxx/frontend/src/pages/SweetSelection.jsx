import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/AppContext';
import Stepper from '../../components/Stepper';
import SweetCard from '../../components/SweetCard';
import './BoxSelection.css';

const dummySweets = [
  { id: 1, name: 'Makaron', weight: '100 gr', price: 0, image: 'https://via.placeholder.com/120' },
  { id: 2, name: 'Dubai Şirniyyatı', weight: '150 gr', price: 4.50, image: 'https://via.placeholder.com/120' },
  { id: 3, name: 'Eklend', weight: '120 gr', price: 0, image: 'https://via.placeholder.com/120' },
  { id: 4, name: 'Truffle', weight: '100 gr', price: 3.00, image: 'https://via.placeholder.com/120' },
  { id: 5, name: 'Çiyələkli Tart', weight: '130 gr', price: 2.80, image: 'https://via.placeholder.com/120' },
  { id: 6, name: 'Brauni', weight: '140 gr', price: 0, image: 'https://via.placeholder.com/120' },
  { id: 7, name: 'Kruassan', weight: '90 gr', price: 0, image: 'https://via.placeholder.com/120' },
  { id: 8, name: 'Zəfəranlı Paxlava', weight: '150 gr', price: 0, image: 'https://via.placeholder.com/120' },
  { id: 9, name: 'Çizkeyk', weight: '160 gr', price: 0, image: 'https://via.placeholder.com/120' },
  { id: 10, name: 'Şəkərbura', weight: '100 gr', price: 0, image: 'https://via.placeholder.com/120' },
];

const SweetSelection = () => {
  const { selectedSweets, toggleSweet, hasPaidSweets } = useGlobalContext();
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