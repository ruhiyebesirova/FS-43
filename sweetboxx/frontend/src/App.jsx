import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';

import Navbar from './components/Navbar.jsx';
//import Footer from '../components/Footer.jsx';/

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import BoxSelection from './pages/BoxSelection.jsx';
import SweetSelection from './pages/SweetSelection.jsx';
import Payment from './pages/Payment.jsx';
import Message from './pages/Message.jsx';
import Success from './pages/Success.jsx';


const ProtectedRoute = ({ children }) => {
  //const { user } = useGlobalContext();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function AppContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#FFF5F5' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/select-box" element={<ProtectedRoute><BoxSelection /></ProtectedRoute>} />
          <Route path="/select-sweet" element={<ProtectedRoute><SweetSelection /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
          <Route path="/message" element={<ProtectedRoute><Message /></ProtectedRoute>} />
          <Route path="/success" element={<ProtectedRoute><Success /></ProtectedRoute>} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}