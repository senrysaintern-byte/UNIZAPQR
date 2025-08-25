import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import LoginWithOTP from './components/LoginWithOTP';
import LoginComp from './components/LoginComp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login-otp" element={<LoginWithOTP />} />
        <Route path="/login-password" element={<LoginComp />} />
      </Routes>
    </Router>
  );
};

export default App;