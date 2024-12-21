import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  const addUser = () => {
    if (newUser.trim()) {
      setUsers([...users, newUser]);
      setNewUser('');
    }
  };

  return (
    <div className="section">
      <h2>Gestión de Usuarios</h2>
      <input
        type="text"
        placeholder="Nombre del usuario"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={addUser}>Agregar Usuario</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
