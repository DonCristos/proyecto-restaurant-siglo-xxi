import React from 'react';
import Products from './Resources/Products';
import Users from './Resources/Users';
import Tables from './Resources/Tables';
import SupplierOrders from './Orders/SupplierOrders';
import Reports from './Reports/Reports';

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Panel de Administración - Restaurante Siglo XX</h1>
      <Products />
      <Users />
      <Tables />
      <SupplierOrders />
      <Reports />
    </div>
  );
};

export default AdminDashboard;
