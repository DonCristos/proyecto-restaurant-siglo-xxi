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
import Products from './components/Resources/Products'; // Importamos Products
import Users from './components/Resources/Users'; // Importamos Users
import Tables from './components/Resources/Tables'; // Importamos Tables
import SupplierOrders from './components/Orders/SupplierOrders'; // Importamos SupplierOrders
import Reports from './components/Reports/Reports'; // Importamos Reports
import { UserProvider } from './components/UserContext'; // Importamos UserProvider

function App() {
  const [users, setUsers] = useState([]); // Estado para usuarios
  const [products, setProducts] = useState([]); // Estado para productos
  const [tables, setTables] = useState([]); // Estado para mesas
  const [orders, setOrders] = useState([]); // Estado para pedidos a proveedores
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

  // Manejar adición de productos
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Manejar adición de mesas
  const handleAddTable = (newTable) => {
    setTables([...tables, newTable]);
  };

  // Manejar adición de pedidos
  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
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

            {/* Ruta principal de administración */}
            <Route
              path="/admin"
              element={
                role === 'Administrador' ? (
                  <AdminPage
                    users={users}
                    addUser={handleAddUser}
                    products={products}
                    addProduct={handleAddProduct}
                    tables={tables}
                    addTable={handleAddTable}
                    orders={orders}
                    addOrder={handleAddOrder}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* Rutas protegidas específicas */}
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

            {/* Rutas para las funcionalidades específicas de administración */}
            <Route
              path="/admin/products"
              element={
                role === 'Administrador' ? (
                  <Products products={products} addProduct={handleAddProduct} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/users"
              element={
                role === 'Administrador' ? (
                  <Users users={users} addUser={handleAddUser} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/tables"
              element={
                role === 'Administrador' ? (
                  <Tables tables={tables} addTable={handleAddTable} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/orders"
              element={
                role === 'Administrador' ? (
                  <SupplierOrders orders={orders} addOrder={handleAddOrder} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/reports"
              element={
                role === 'Administrador' ? (
                  <Reports />
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

