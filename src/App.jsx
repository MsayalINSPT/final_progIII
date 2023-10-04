import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Alta_mascota from './modules/Recepcion/Alta_mascota'
import Turnos from './modules/Recepcion/Turnos'
import Layout from './modules/Layout'
import NotFound from './modules/Recepcion/NotFound'
import Cobros from './modules/Recepcion/Cobros'
import Logout from './modules/Recepcion/Logout'

function App() {
  return (
    <div className="App">
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
    </div>
  )
}

export default App
