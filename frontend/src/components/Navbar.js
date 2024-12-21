import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/admin">Administrador</Link></li>
        <li><Link to="/bodega">Bodega</Link></li>
        <li><Link to="/finanzas">Finanzas</Link></li>
        <li><Link to="/cocina">Cocina</Link></li>
        <li><Link to="/cliente">Cliente</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
