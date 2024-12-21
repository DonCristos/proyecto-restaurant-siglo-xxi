import React from 'react';
import CreateEmployee from '../components/CreateEmployee'; // Reutilizado como Crear Usuarios
import EmployeeList from '../components/EmployeeList';
import Products from '../components/Resources/Products';
import Tables from '../components/Resources/Tables';
import SupplierOrders from '../components/Orders/SupplierOrders';
import Reports from '../components/Reports/Reports';

const AdminPage = ({ users, addUser, products, addProduct, tables, addTable, orders, addOrder }) => {
  return (
    <div>
      <h2>Panel de Administración</h2>

      {/* Gestión de Usuarios */}
      <section className="resources-section">
        <h3>Gestión de Usuarios</h3>
        <CreateEmployee addEmployee={addUser} />
        <EmployeeList employees={users} />
      </section>

      {/* Gestión de Productos */}
      <section className="resources-section">
        <h3>Gestión de Productos</h3>
        <Products products={products} addProduct={addProduct} />
      </section>

      {/* Gestión de Mesas */}
      <section className="resources-section">
        <h3>Gestión de Mesas</h3>
        <Tables tables={tables} addTable={addTable} />
      </section>

      {/* Pedidos a Proveedores */}
      <section className="orders-section">
        <h3>Pedidos a Proveedores</h3>
        <SupplierOrders orders={orders} addOrder={addOrder} />
      </section>

      {/* Reportes */}
      <section className="reports-section">
        <h3>Reportes</h3>
        <Reports />
      </section>
    </div>
  );
};

export default AdminPage;
