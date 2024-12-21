import React, { useState } from 'react';

const SupplierOrders = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState('');

  const addOrder = () => {
    if (newOrder.trim()) {
      setOrders([...orders, newOrder]);
      setNewOrder('');
    }
  };

  return (
    <div className="section">
      <h2>Pedidos a Proveedores</h2>
      <input
        type="text"
        placeholder="Descripción del pedido"
        value={newOrder}
        onChange={(e) => setNewOrder(e.target.value)}
      />
      <button onClick={addOrder}>Agregar Pedido</button>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierOrders;
