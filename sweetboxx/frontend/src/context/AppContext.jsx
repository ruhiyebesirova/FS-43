// src/context/AppContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedSweets, setSelectedSweets] = useState([]);

  const toggleSweet = (sweet) => {
    setSelectedSweets((prev) => {
      const exists = prev.find((s) => s.id === sweet.id);
      if (exists) return prev.filter((s) => s.id !== sweet.id);
      if (prev.length >= 10) return prev;
      return [...prev, sweet];
    });
  };

  const hasPaidSweets = selectedSweets.some(sweet => sweet.price && sweet.price > 0);
  const totalPrice = selectedSweets.reduce((sum, sweet) => sum + (sweet.price || 0), 0);

  return (
    <AppContext.Provider value={{
      user, setUser,
      selectedBox, setSelectedBox,
      selectedSweets, setSelectedSweets, toggleSweet,
      hasPaidSweets, totalPrice
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);