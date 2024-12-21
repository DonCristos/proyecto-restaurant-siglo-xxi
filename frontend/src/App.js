import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import BodegaPage from './pages/BodegaPage';
import FinanzasPage from './pages/FinanzasPage';
import CocinaPage from './pages/CocinaPage';
import ClientePage from './pages/ClientePage';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import { UserProvider } from './components/UserContext'; // Importamos UserProvider

function App() {
  const [users, setUsers] = useState([]); // Estado para usuarios
  const [financialData, setFinancialData] = useState([]); // Estado para datos financieros
  const [role, setRole] = useState(null); // Estado para el rol del usuario autenticado

  // Manejar inicio de sesión y asignación de rol
  const handleLogin = (userRole) => {
    setRole(userRole); // Asigna el rol una vez autenticado
    console.log(`Usuario autenticado con el rol: ${userRole}`);
  };

  // Manejar adición de usuarios
  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <UserProvider> {/* Envolvemos toda la aplicación con el UserProvider */}
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Restaurante Siglo XXI</h1>
            <Navbar />
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />

            {/* Rutas protegidas según el rol */}
            <Route
              path="/admin"
              element={
                role === 'Administrador' ? (
                  <AdminPage users={users} addUser={handleAddUser} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/bodega"
              element={
                role === 'Bodega' ? (
                  <BodegaPage />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/finanzas"
              element={
                role === 'Finanzas' ? (
                  <FinanzasPage financialData={financialData} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/cocina"
              element={
                role === 'Cocina' ? (
                  <CocinaPage />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/cliente"
              element={
                role === 'Cliente' ? (
                  <ClientePage />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

