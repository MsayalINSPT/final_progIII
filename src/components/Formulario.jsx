import './Formulario.css';
import { useState } from 'react';
import { validarUsuario } from './validacionUsuarios';

export function Formulario({ setUser }) {
  const [nombre, setNombre] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nombre === '' || contrasenia === '') {
      setError(true);
      return;
    }

    setError(false);
    const user = {
      email: nombre,
      password: contrasenia,
      rol: '',
      token: '',
    };

    // Llama a validarUsuario y espera hasta que se complete la función
    await validarUsuario({ user });

    setUser(user);
  };

  return (
    <section>
      <h1 className="tituloLogin">Login</h1>
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
        <button>Iniciar sesión</button>
      </form>
      {error && <p className="msg">Todos los campos son obligatorios</p>}
    </section>
  );
}
