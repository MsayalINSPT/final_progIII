//------------------------ MODULOS ---------------------------------------
import AltaCliente from './modules/Recepcion/Cliente'
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
import AltaMascota from './modules/Recepcion/Cliente/AltaMascota'
import ListarCliente from './modules/Recepcion/Cliente/Listar'

//------------------------ IMPORT ---------------------------------------
import { InformePaciente } from './modules/Veterinario/Informe'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'




const Recepcion = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="Recepcion/Cliente" element={<AltaCliente />} />
          <Route path="Recepcion/Cliente/AltaMascota" element={<AltaMascota />} />
          <Route path="Recepcion/Cliente/Listar" element={<ListarCliente />} />
          <Route path="Recepcion/Turnos" element={<Turnos />} />
          <Route path="Recepcion/Turnos/Buscar" element={<BuscarTurno />} />
          <Route path="Recepcion/Turnos/Modificar" element={<ModificarTurno />}/>

          <Route path="Recepcion/Cobros" element={<Cobros />} />
          <Route path="Login/Logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const Veterinario = () => {
  return (
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
  )
}
//------------------------------- APP -----------------------------------
function App() {
  //const MiContexto = React.createContext(null)
  const miRol = localStorage.getItem('rol')
  const miToken = localStorage.getItem('miToken')
  const [user, setUser] = useState({
    email: '',
    password: '',
    rol: miRol,
    token: miToken,
  })


  //const valorContexto = useContext(MiContexto);

  useEffect(() => {
    localStorage.setItem('miToken', user.token)
    localStorage.setItem('rol', user.rol)
    
  }, [user])

  return (
    <div className="App">
      {(user.rol === 'null' || user.rol === null) && (
        <Login setUser={setUser} />
      )}

      {user.rol === 'recepcion' && Recepcion()}

      {user.rol === 'veterinario' && Veterinario()}
    </div>
  )
}

export default App
