import { Table, Button } from 'antd'
import { useState, useEffect } from 'react'
import clienteService from '../../../../services/clienteApi'

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Apellido',
    dataIndex: 'ape',
    key: 'ape',
  },
  {
    title: 'DNI',
    dataIndex: 'dni',
    key: 'dni',
  },
  {
    title: 'Telefono',
    dataIndex: 'telefono',
    key: 'telefono',
  },
]

function ListarCliente() {
  const [clientes, setClientes] = useState([''])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    onClick()
    setRefresh(false)

  }, [refresh])

  const onClick = () => {
    const fetchData = async () => {
      const response = await clienteService.getAllClientes()
      setClientes(response)
    }
    fetchData()
  }

  return (
    <div>
      <h1>Clientes</h1>

      <Table
        dataSource={clientes}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
        bordered
      />
    </div>
  )
}

export default ListarCliente
