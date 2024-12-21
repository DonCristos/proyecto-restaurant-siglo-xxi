import React, { useState } from 'react';

const CreateEmployee = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    fullName: '',
    run: '',
    maritalStatus: '',
    commune: '',
    company: '',
    status: 'activo',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee({
      fullName: '',
      run: '',
      maritalStatus: '',
      commune: '',
      company: '',
      status: 'activo',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre Completo:</label>
      <input
        type="text"
        name="fullName"
        value={employee.fullName}
        onChange={handleChange}
        required
      />
      <label>RUN:</label>
      <input
        type="text"
        name="run"
        value={employee.run}
        onChange={handleChange}
        required
      />
      <label>Estado Civil:</label>
      <input
        type="text"
        name="maritalStatus"
        value={employee.maritalStatus}
        onChange={handleChange}
        required
      />
      <label>Comuna:</label>
      <input
        type="text"
        name="commune"
        value={employee.commune}
        onChange={handleChange}
        required
      />
      <label>Empresa:</label>
      <select name="company" onChange={handleChange} required>
        <option value="">Selecciona una empresa</option>
        <option value="Austral Corp">Austral Corp</option>
        <option value="American Tur">American Tur</option>
        <option value="Astral Trip">Astral Trip</option>
      </select>
      <label>Estado:</label>
      <input
        type="checkbox"
        name="status"
        checked={employee.status === 'activo'}
        onChange={() => setEmployee({ ...employee, status: employee.status === 'activo' ? 'inactivo' : 'activo' })}
      />
      <button type="submit">Crear Empleado</button>
    </form>
  );
};

export default CreateEmployee;
