import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AltaMascota from './modules/Recepcion/Alta_mascota'
import Turnos from './modules/Recepcion/Turnos'
import Layout from './modules/Layout'
import LayoutVete from './modules/LayoutVete'
import NotFound from './modules/Recepcion/NotFound'
import Cobros from './modules/Recepcion/Cobros'
import Logout from './modules/Login/Logout'
import Pagos from './modules/Veterinario/CargarPago'
import Historial from './modules/Veterinario/Historial'
import Login from './modules/Login'

import { useState } from 'react'


//import { Formulario } from './components/Formulario'
import { validarUsuario } from './components/validacionUsuarios'

function recepcion(rol) {
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
        <Route element={<LayoutVete/>}>
          <Route path="Veterinario/CargarPago" element={<Pagos />} />
          <Route path="Veterinario/Historial" element={<Historial />} />
          <Route path="Login/Logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  const [user, setUser] = useState([''])
  const [rol, setRol] = useState('rece')




  return (
    <div className="App">
      {user == '' && <Login setUser={setUser} />}



      {validarUsuario(user) == 'rece' && recepcion()}

      {validarUsuario(user) == 'vete' && veterinario()}
    </div>
  )
}

export default App
