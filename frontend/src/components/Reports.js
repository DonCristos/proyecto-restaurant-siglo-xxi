import React from 'react';

const Report = ({ attendanceData }) => {
  if (attendanceData.length === 0) {
    return <p>No hay registros de asistencia para mostrar.</p>;
  }

  return (
    <div>
      <h2>Reporte de Asistencia</h2>
      <table className="report-table">
        <thead>
          <tr>
            <th>Empleado</th>
            <th>Acción</th>
            <th>Fecha y Hora</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td>{record.employee}</td>
              <td>{record.action}</td>
              <td>{record.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
