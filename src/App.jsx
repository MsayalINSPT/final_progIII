import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AltaMascota from './modules/Recepcion/Alta_mascota'
import Turnos from './modules/Recepcion/Turnos'
import Layout from './modules/Layout'
import LayoutVete from './modules/LayoutVete'
import NotFound from './modules/Recepcion/NotFound'
import Cobros from './modules/Recepcion/Cobros'
import Logout from './modules/Login/Logout'
import Pagos, { InformePaciente } from './modules/Veterinario/Informe'
import Historial from './modules/Veterinario/Historial'
import Login from './modules/Login'

import { useState, useEffect } from 'react'

//import { Formulario } from './components/Formulario'

import RecaudacionVeterinaria from './modules/Veterinario/Recaudacion'



function recepcion() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="Recepcion/Alta_mascota" element={<AltaMascota />} />
          <Route path="Recepcion/Turnos" element={<Turnos />} />
          <Route path="Recepcion/Cobros" element={<Cobros />} />
          <Route path="Login/Logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function veterinario() {
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
  const [user, setUser] = useState({
    email: '',
    password: '',
    rol: '',
    token: '',
  })

  useEffect(() => {
    console.log(user)
    console.log(user.rol)
  }, [user])


  return (
    <div className="App">
      {user.rol === '' && <Login setUser={setUser} />}

      {user.rol === 'recepcion' && recepcion()}

      {user.rol === 'veterinario' && veterinario()}
    </div>
  )
}

export default App
