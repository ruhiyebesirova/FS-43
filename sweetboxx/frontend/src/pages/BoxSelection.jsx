import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { useGlobalContext } from '../context/AppContext';
//import Stepper from '../../components/Stepper';//
//import BoxCard from '../../components/BoxCard';
import './BoxSelection.css';

const dummyBoxes = [
  { id: 1, name: 'Klassik Qutu', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500' },
  { id: 2, name: 'Romantik Qutu', image: 'https://via.placeholder.com/150/FFFDFD/DE3B6A?text=Box2' },
  { id: 3, name: 'Lüks Qutu', image: 'https://via.placeholder.com/150/FFFDFD/DE3B6A?text=Box3' },
  { id: 4, name: 'Minimal Qutu', image: 'https://via.placeholder.com/150/FFFDFD/DE3B6A?text=Box4' },
  { id: 5, name: 'Premium Qutu', image: 'https://via.placeholder.com/150/FFFDFD/DE3B6A?text=Box5' },
  { id: 6, name: 'Kids Qutu', image: 'https://via.placeholder.com/150/FFFDFD/DE3B6A?text=Box6' },
  { id: 7, name: 'Exclusive Qutu', image: 'https://via.placeholder.com/150/FFFDFD/DE3B6A?text=Box7' },
];

const BoxSelection = () => {
  //const { selectedBox, setSelectedBox } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div>
      //import Stepper from '../../components/Stepper';//
      <div className="flow-page">
        <h2 className="flow-title">Qutu secin</h2>
        <p className="flow-subtitle">Hansi qutunun uzerine gelirsinizse o hover olacaq</p>

        <div className="flow-grid">
          {dummyBoxes.map(box => (
            <BoxCard 
              key={box.id}
              box={box}
              isSelected={selectedBox?.id === box.id}
              onSelect={() => setSelectedBox(box)}
            />
          ))}
        </div>

        <div className="bottom-bar">
          <span className="notice-txt">Yalnız 1 qutu seçmək hüququnuz var.</span>
          <button 
            className="flow-next-btn"
            disabled={!selectedBox}
            onClick={() => navigate('/select-sweet')}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxSelection;