import { Button } from 'antd'

function Logout() {

  const recargarPagina = () => {

    window.location.reload()
  }

  return (
    <div>
      <Button type="primary" onClick={() => recargarPagina()}>
        Salir del sistema
      </Button>
    </div>
  )
}

export default Logout
