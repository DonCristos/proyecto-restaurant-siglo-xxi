import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Lista de Empleados</h2>
      {employees.length === 0 ? (
        <p>No hay empleados registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>RUN</th>
              <th>Estado Civil</th>
              <th>Comuna</th>
              <th>Empresa</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.fullName}</td>
                <td>{employee.run}</td>
                <td>{employee.maritalStatus}</td>
                <td>{employee.commune}</td>
                <td>{employee.company}</td>
                <td>{employee.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
