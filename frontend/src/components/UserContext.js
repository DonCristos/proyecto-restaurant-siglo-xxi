import React, { createContext, useState } from 'react';

// Crear el contexto para el usuario
export const UserContext = createContext();

// Proveedor del contexto del usuario
export const UserProvider = ({ children }) => {
  const [role, setRole] = useState(null); // Estado global para manejar el rol del usuario

  // Función para iniciar sesión y asignar un rol
  const login = (userRole) => {
    console.log(`Iniciando sesión con rol: ${userRole}`); // Mensaje de depuración
    setRole(userRole); // Actualiza el rol después del inicio de sesión
  };

  // Función para cerrar sesión y limpiar el rol
  const logout = () => {
    console.log('Cerrando sesión'); // Mensaje de depuración
    setRole(null); // Limpia el rol
  };

  // Propiedad derivada: Verifica si el usuario está autenticado
  const isAuthenticated = !!role; // Si role tiene un valor, está autenticado

  return (
    <UserContext.Provider value={{ role, login, logout, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

