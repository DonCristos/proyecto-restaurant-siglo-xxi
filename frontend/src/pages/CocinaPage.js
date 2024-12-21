import React, { useState, useEffect } from 'react';

const CocinaPage = () => {
  const [orders, setOrders] = useState([]); // Lista de órdenes
  const [menu, setMenu] = useState({
    platosPrincipales: [],
    refrescos: [],
    tragos: [],
    carnes: [],
    agregados: [],
  });

  // Simulación de menú (similar al ClientePage)
  useEffect(() => {
    setMenu({
      platosPrincipales: [
        { id: 1, name: 'Pizza Margarita', price: 8000 },
        { id: 2, name: 'Hamburguesa Clásica', price: 6000 },
        { id: 3, name: 'Ensalada César', price: 5000 },
        { id: 4, name: 'Pasta Alfredo', price: 7500 },
      ],
      refrescos: [
        { id: 5, name: 'Coca Cola', price: 2000 },
        { id: 6, name: 'Sprite', price: 2000 },
        { id: 7, name: 'Agua Mineral', price: 1500 },
      ],
      tragos: [
        { id: 8, name: 'Pisco Sour', price: 4000 },
        { id: 9, name: 'Mojito', price: 4500 },
        { id: 10, name: 'Caipirinha', price: 4500 },
      ],
      carnes: [
        { id: 11, name: 'Entrecot', price: 12000 },
        { id: 12, name: 'Lomo Vetado', price: 15000 },
        { id: 13, name: 'Pollo Asado', price: 10000 },
      ],
      agregados: [
        { id: 14, name: 'Papas Fritas', price: 3000 },
        { id: 15, name: 'Arroz', price: 2500 },
        { id: 16, name: 'Ensalada Mixta', price: 3500 },
      ],
    });
  }, []);

  // Simulación de recepción de órdenes en tiempo real
  useEffect(() => {
    const mockOrders = [
      {
        id: 1,
        customer: 'Cliente 1',
        items: [
          { name: 'Pizza Margarita', quantity: 1 },
          { name: 'Coca Cola', quantity: 2 },
        ],
        priority: 'Alta',
        status: 'Pendiente',
      },
      {
        id: 2,
        customer: 'Cliente 2',
        items: [
          { name: 'Lomo Vetado', quantity: 1 },
          { name: 'Ensalada Mixta', quantity: 1 },
        ],
        priority: 'Media',
        status: 'Pendiente',
      },
    ];

    // Simulamos recepción de nuevas órdenes cada 10 segundos
    const interval = setInterval(() => {
      const newOrder = {
        id: orders.length + 1,
        customer: `Cliente ${orders.length + 1}`,
        items: [
          { name: 'Pasta Alfredo', quantity: 1 },
          { name: 'Sprite', quantity: 1 },
        ],
        priority: 'Baja',
        status: 'Pendiente',
      };
      setOrders((prevOrders) => [...prevOrders, ...mockOrders, newOrder]);
    }, 10000);

    return () => clearInterval(interval); // Limpiamos el intervalo al desmontar
  }, [orders]);

  // Cambiar el estado de una orden
  const updateOrderStatus = (id, status) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  // Cambiar la prioridad de una orden
  const updateOrderPriority = (id, priority) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, priority } : order
      )
    );
  };

  // Ordenar órdenes por prioridad
  const sortedOrders = orders.sort((a, b) => {
    const priorityOrder = { Alta: 1, Media: 2, Baja: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div>
      <h2>Tablero de Ejecución - Cocina</h2>
      {sortedOrders.length === 0 ? (
        <p>No hay órdenes en este momento.</p>
      ) : (
        <ul>
          {sortedOrders.map((order) => (
            <li key={order.id}>
              <h3>Orden #{order.id} - {order.customer}</h3>
              <p><strong>Prioridad:</strong> {order.priority}</p>
              <p><strong>Estado:</strong> {order.status}</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - Cantidad: {item.quantity}
                  </li>
                ))}
              </ul>
              <div>
                <button onClick={() => updateOrderStatus(order.id, 'En Proceso')}>Marcar como En Proceso</button>
                <button onClick={() => updateOrderStatus(order.id, 'Listo')}>Marcar como Listo</button>
              </div>
              <div>
                <label>Cambiar Prioridad:</label>
                <select
                  value={order.priority}
                  onChange={(e) => updateOrderPriority(order.id, e.target.value)}
                >
                  <option value="Alta">Alta</option>
                  <option value="Media">Media</option>
                  <option value="Baja">Baja</option>
                </select>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CocinaPage;

