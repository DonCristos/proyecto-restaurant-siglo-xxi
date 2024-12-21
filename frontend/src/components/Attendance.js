import React, { useState, useEffect } from 'react';

const AttendanceForm = ({ employees = [], markAttendance }) => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [action, setAction] = useState('entrada');

  useEffect(() => {
    console.log("Lista de empleados actualizada", employees);
  }, [employees]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedEmployee) {
      alert('Por favor, selecciona un empleado.');
      return;
    }
    const timestamp = new Date().toLocaleString();
    markAttendance(selectedEmployee, action, timestamp);
    setSelectedEmployee('');
    setAction('entrada');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Empleado:</label>
      <select
        value={selectedEmployee}
        onChange={(e) => setSelectedEmployee(e.target.value)}
      >
        <option value="">Selecciona un empleado</option>
        {employees.map((employee, index) => (
          <option key={index} value={employee.fullName}>
            {employee.fullName}
          </option>
        ))}
      </select>

      <label>Acción:</label>
      <select
        value={action}
        onChange={(e) => setAction(e.target.value)}
      >
        <option value="entrada">Entrada</option>
        <option value="salida">Salida</option>
      </select>

      <button type="submit">Registrar</button>
    </form>
  );
};

export default AttendanceForm;
