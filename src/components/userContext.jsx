

import React, { createContext, useState } from 'react';

// Creamos el contexto
const UserContext = createContext();

// Creamos un componente proveedor para gestionar el rol del usuario
function UserProvider({ children }) {
    const [userRole, setUserRole] = useState('Usuario');
  
    const toggleUserRole = () => {
      setUserRole("admin");
    };
  
    return (
      <UserContext.Provider value={{ userRole, toggleUserRole }}>
        {children}
      </UserContext.Provider>
    );
  }
  
  export { UserContext, UserProvider };