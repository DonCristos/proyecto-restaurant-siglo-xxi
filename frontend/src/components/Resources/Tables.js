import React, { useState } from 'react';

const Tables = () => {
  const [tables, setTables] = useState([]);
  const [newTable, setNewTable] = useState('');

  const addTable = () => {
    if (newTable.trim()) {
      setTables([...tables, newTable]);
      setNewTable('');
    }
  };

  return (
    <div className="section">
      <h2>Gestión de Mesas</h2>
      <input
        type="text"
        placeholder="Número de mesa"
        value={newTable}
        onChange={(e) => setNewTable(e.target.value)}
      />
      <button onClick={addTable}>Agregar Mesa</button>
      <ul>
        {tables.map((table, index) => (
          <li key={index}>Mesa {table}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tables;
