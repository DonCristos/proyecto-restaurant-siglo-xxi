import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar el hook useNavigate

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para redirigir a otras rutas

  // Validación de formato de correo electrónico
  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(username);
  };

  // Validación de contraseñas (mínimo 6 caracteres, al menos un número)
  const validatePassword = (password) => {
    return password.length >= 6 && /\d/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validaciones de campos
    if (!username || !password) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (!validateUsername(username)) {
      setError('El usuario debe ser un correo electrónico válido.');
      return;
    }

    if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 6 caracteres e incluir un número.');
      return;
    }

    setLoading(true);

    // Simulación de autenticación con roles
    setTimeout(() => {
      setLoading(false);

      // Simulación de roles según credenciales
      if (username === 'admin@correo.com' && password === '123456') {
        onLogin('Administrador');
        navigate('/admin'); // Redirige a la página de administrador
      } else if (username === 'bodega@correo.com' && password === '123456') {
        onLogin('Bodega');
        navigate('/bodega'); // Redirige a la página de bodega
      } else if (username === 'finanzas@correo.com' && password === '123456') {
        onLogin('Finanzas');
        navigate('/finanzas'); // Redirige a la página de finanzas
      } else if (username === 'cocina@correo.com' && password === '123456') {
        onLogin('Cocina');
        navigate('/cocina'); // Redirige a la página de cocina
      } else if (username === 'cliente@correo.com' && password === '123456') {
        onLogin('Cliente');
        navigate('/cliente'); // Redirige a la página de cliente
      } else {
        setError('Usuario o contraseña incorrectos.');
      }
    }, 2000);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Botón estilizado con retroalimentación visual */}
        <button 
          type="submit" 
          className={loading ? 'loading' : error ? 'error' : ''} 
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: loading ? 'grey' : 'blue',
            color: 'white',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Cargando...' : 'Ingresar'}
        </button>

        {/* Mensaje de error */}
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;


