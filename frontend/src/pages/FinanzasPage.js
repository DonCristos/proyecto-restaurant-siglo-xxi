import React from 'react';
import Report from '../components/Reports';

const FinanzasPage = ({ financialData }) => {
  return (
    <div>
      <h2>Finanzas - Reportes</h2>
      <Report attendanceData={financialData} />
    </div>
  );
};

export default FinanzasPage;
