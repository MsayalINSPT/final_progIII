import './Formulario.css'
import { useState } from 'react'

export function Formulario() {
  const [nombre, setNombre] = useState("")
  const [contrasenia, setContrasenia] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(nombre === "" || contrasenia){
        setError(true)
        return
    }

    setError(false)

   

  }

  return (
    <section>
      <h1 className='tituloLogin'>Login</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="password"
          value={contrasenia}
          onChange={(e) => setContrasenia(e.target.value)}
        />
        <button>Iniciar sesion</button>
      </form>
      {error && <p className='msg'>Todos los campos son obligatorios</p>}
    </section>
  )
}
