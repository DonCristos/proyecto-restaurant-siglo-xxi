import React, { useState, useEffect } from 'react';

const ClientePage = () => {
  const [menu, setMenu] = useState({
    platosPrincipales: [],
    refrescos: [],
    tragos: [],
    carnes: [],
    agregados: [],
  });
  const [order, setOrder] = useState([]); // Pedido actual del cliente
  const [orderStatus, setOrderStatus] = useState(null); // Estado del pedido

  // Simulación de productos del menú
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

  // Simulación de pedidos en tiempo real (WebSocket)
  useEffect(() => {
    if (order.length > 0) {
      const interval = setInterval(() => {
        const statuses = ['En preparación', 'Listo para entregar', 'Entregado'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        setOrderStatus(randomStatus);
      }, 5000); // Actualización cada 5 segundos
      return () => clearInterval(interval); // Limpieza del intervalo
    }
  }, [order]);

  // Agregar un producto al pedido
  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  // Confirmar el pedido
  const confirmOrder = () => {
    alert('¡Pedido confirmado!');
    setOrderStatus('En preparación');
  };

  return (
    <div>
      <h2>Bienvenido al Restaurante Siglo XXI</h2>

      {/* Menú dinámico por categoría */}
      <div>
        <h3>Platos Principales</h3>
        <ul>
          {menu.platosPrincipales.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addToOrder(item)}>Agregar</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Refrescos</h3>
        <ul>
          {menu.refrescos.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addToOrder(item)}>Agregar</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Tragos</h3>
        <ul>
          {menu.tragos.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addToOrder(item)}>Agregar</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Carnes</h3>
        <ul>
          {menu.carnes.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addToOrder(item)}>Agregar</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Agregados</h3>
        <ul>
          {menu.agregados.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addToOrder(item)}>Agregar</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Pedido del cliente */}
      <h2>Tu Pedido</h2>
      {order.length === 0 ? (
        <p>No has agregado productos a tu pedido.</p>
      ) : (
        <ul>
          {order.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
      {order.length > 0 && <button onClick={confirmOrder}>Confirmar Pedido</button>}

      {/* Estado del pedido */}
      {orderStatus && (
        <div>
          <h3>Estado de tu Pedido</h3>
          <p>{orderStatus}</p>
        </div>
      )}
    </div>
  );
};

export default ClientePage;
