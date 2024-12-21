import React from 'react';
import CreateEmployee from '../components/CreateEmployee'; // Reutiliza como Crear Usuarios
import EmployeeList from '../components/EmployeeList';

const AdminPage = ({ users, addUser }) => {
  return (
    <div>
      <h2>Administrador</h2>
      <CreateEmployee addEmployee={addUser} />
      <EmployeeList employees={users} />
    </div>
  );
};

export default AdminPage;
