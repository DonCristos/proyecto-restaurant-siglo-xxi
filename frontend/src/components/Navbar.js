import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaMoneyBill, FaUtensils, FaListAlt, FaChartPie } from 'react-icons/fa';
import { UserContext } from './UserContext'; // Importa el contexto

const Navbar = () => {
  const { role, logout, isAuthenticated } = useContext(UserContext); // Accedemos al contexto

  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>

        {isAuthenticated && role === 'Administrador' && (
          <>
            <li><Link to="/admin/products">Productos</Link></li>
            <li><Link to="/admin/users">Usuarios</Link></li>
            <li><Link to="/admin/tables">Mesas</Link></li>
            <li><Link to="/admin/orders">Pedidos</Link></li>
            <li><Link to="/admin/reports">Reportes</Link></li>

          </>
        )}

        {isAuthenticated && role === 'Bodega' && (
          <>
            <li><Link to="/bodega/stock"><FaBox /> Stock</Link></li>
            <li><Link to="/bodega/products"><FaBox /> Productos</Link></li>
            <li><Link to="/bodega/recipes"><FaBox /> Recetas</Link></li>
          </>
        )}

        {isAuthenticated && role === 'Finanzas' && (
          <>
            <li><Link to="/finanzas/cash"><FaMoneyBill /> Caja</Link></li>
            <li><Link to="/finanzas/reports"><FaChartPie /> Reportes</Link></li>
            <li><Link to="/finanzas/profits"><FaMoneyBill /> Utilidades</Link></li>
          </>
        )}

        {isAuthenticated && role === 'Cocina' && (
          <li><Link to="/cocina/orders"><FaUtensils /> Órdenes</Link></li>
        )}

        {isAuthenticated && role === 'Cliente' && (
          <>
            <li><Link to="/cliente/menu"><FaUtensils /> Carta</Link></li>
            <li><Link to="/cliente/orders"><FaListAlt /> Pedidos</Link></li>
            <li><Link to="/cliente/status"><FaListAlt /> Estado</Link></li>
          </>
        )}

        {isAuthenticated ? (
          <li>
            <button onClick={logout}>Cerrar Sesión</button>
          </li>
        ) : (
          <li><Link to="/login">Iniciar Sesión</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;



