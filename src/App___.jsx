//------------------------ MODULOS ---------------------------------------
import AltaMascota from './modules/Recepcion/Alta_mascota'
import Turnos from './modules/Recepcion/Turnos'
import BuscarTurno from './modules/Recepcion/Turnos/Buscar'
import ModificarTurno from './modules/Recepcion/Turnos/Modificar'
import Historial from './modules/Veterinario/Historial'
import Login from './modules/Login'
import Layout from './modules/Layout'
import LayoutVete from './modules/LayoutVete'
import NotFound from './modules/NotFound'
import Cobros from './modules/Recepcion/Cobros'
import Logout from './modules/Login/Logout'
import RecaudacionVeterinaria from './modules/Veterinario/Recaudacion'
//------------------------ IMPORT ---------------------------------------
import { InformePaciente } from './modules/Veterinario/Informe'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
//import { Formulario } from './components/Formulario'



//------------------------------- APP -----------------------------------
function App() {
    
  const miRol = localStorage.getItem('rol')
  const miToken = localStorage.getItem('miToken')
  const [user, setUser] = useState({
    email: '',
    password: '',
    rol: miRol,
    token: miToken,
  })

  useEffect(() => {
    localStorage.setItem('miToken', user.token)
    localStorage.setItem('rol', user.rol)
  }, [user])

  return (
    <div className="App">
      {(user.rol === 'null' || user.rol === null) && (
        <Login setUser={setUser} />
      )}

      {user.rol === 'recepcion'  && (
        <BrowserRouter>
          <Routes>
            <Route  element={<Layout />}>
              <Route path="Recepcion/Alta_mascota" element={<AltaMascota />} />
              <Route path="Recepcion/Turnos" element={<Turnos />} />
              <Route path="Recepcion/Turnos/Buscar" element={<BuscarTurno />} />
              <Route
                path="Recepcion/Turnos/Modificar"
                element={<ModificarTurno />}
              />

              <Route path="Recepcion/Cobros" element={<Cobros />} />
              <Route path="Login/Logout" element={<Logout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}

      {user.rol === 'veterinario' && (
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutVete />}>
              <Route path="Veterinario/Historial" element={<Historial />} />
              <Route path="Veterinario/Informe" element={<InformePaciente />} />
              <Route
                path="Veterinario/Recaudacion"
                element={<RecaudacionVeterinaria />}
              />
              <Route path="Login/Logout" element={<Logout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
