import { Table, Button, DatePicker } from 'antd'
import { useState } from 'react'
import swService from '../../../../services/swapi'

const columns = [
  {
    title: 'Fecha del Turno',
    dataIndex: 'fechaTurno',
    key: 'fechaTurno',
  },
  {
    title: 'Nombre del Paciente',
    dataIndex: 'nombrePaciente',
    key: 'nombrePaciente',
  },
  {
    title: 'Descripción',
    dataIndex: 'descripcion',
    key: 'descripcion',
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
  },
]

function BuscarTurno() {
  const [turnos, setTurnos] = useState([''])
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  const onClick = () => {
    const fetchData = async () => {
      const response = await swService.getAllTurnos()
      console.log(response)
      setTurnos(response)
    }
    fetchData()
  }

  const handleFechaChange = (date, dateString) => {

    //setFechaSeleccionada(dateString);
    //console.log(dateString)

    const fetchData = async () => {
      const fecha = {fechaTurno: dateString}
      const response = await swService.buscarTurnoPorFecha(fecha)
      console.log(response)
      setTurnos(response)
    }
    fetchData()
  }

  return (
    <div>
      <Button type="primary" onClick={() => onClick()}>
        Todos
      </Button>

     <DatePicker showTime format="YYYY-MM-DD" onChange={handleFechaChange} /> 
      <Table
        dataSource={turnos}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
        bordered
      />
    </div>
  )
}

export default BuscarTurno
