import { Button } from 'antd'

import { useEffect } from 'react';


function Logout() {



  const salir = () => {
    localStorage.clear();
    // Redirige a la ruta predeterminada, por ejemplo, "/login"
    
    window.location.reload();
  }


  return (
    <div>
      <Button type="primary" onClick={() => salir()}>
        Salir del sistema
      </Button>

    </div>
  )
}

export default Logout
