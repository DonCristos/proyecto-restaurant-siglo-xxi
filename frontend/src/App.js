import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import BodegaPage from './pages/BodegaPage';
import FinanzasPage from './pages/FinanzasPage';
import CocinaPage from './pages/CocinaPage';
import ClientePage from './pages/ClientePage';
import Home from './pages/Home';

function App() {
  const [users, setUsers] = useState([]);
  const [financialData, setFinancialData] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Restaurante Siglo XXI</h1>
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage users={users} addUser={handleAddUser} />} />
          <Route path="/bodega" element={<BodegaPage />} />
          <Route path="/finanzas" element={<FinanzasPage financialData={financialData} />} />
          <Route path="/cocina" element={<CocinaPage />} />
          <Route path="/cliente" element={<ClientePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

