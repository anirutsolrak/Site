import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer/Footer/Index';

import Home from './pages/Home'; // Crie a página Home

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
