import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Alta_mascota from './modules/Recepcion/Alta_mascota'
import Turnos from './modules/Recepcion/Turnos'
import Layout from './modules/Layout'
import NotFound from './modules/Recepcion/NotFound'
import Cobros from './modules/Recepcion/Cobros'
import Logout from './modules/Recepcion/Logout'
import Login from './modules/Login'
import { useState } from 'react'

import Pagos from './modules/Veterinario/CargarPago'
//import { Formulario } from './components/Formulario'
import { validarUsuario } from './components/validacionUsuarios'

function recepcion() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="Recepcion/Alta_mascota" element={<Alta_mascota />} />
          <Route path="Recepcion/Turnos" element={<Turnos />} />
          <Route path="Recepcion/Cobros" element={<Cobros />} />
          <Route path="Recepcion/Logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function veterinario(){
  return(
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="Veterinario/CargarPago" element={<Pagos />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

function App() {
  const [user, setUser] = useState([''])

  return (
    <div className="App">
     {/*  {user == '' && <Login setUser={setUser} /> } */}
     {user == '' && <Login setUser={setUser} />}

      {validarUsuario(user) == 'rece' &&  recepcion()}

      {validarUsuario(user) == 'vete' &&  veterinario()}
    </div>
  )
}

export default App
