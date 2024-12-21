import React, { useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  const addProduct = () => {
    if (newProduct.trim()) {
      setProducts([...products, newProduct]);
      setNewProduct('');
    }
  };

  return (
    <div className="section">
      <h2>Gestión de Productos</h2>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <button onClick={addProduct}>Agregar Producto</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
