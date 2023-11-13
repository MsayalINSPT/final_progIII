import { useState, useEffect } from 'react'
import { Button } from 'antd'
import swService from '../../../../services/swapi'
import { Space, Table, Modal, TimePicker, DatePicker, Select } from 'antd'

function ModificarTurno() {
  const [turnos, setTurnos] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hora, setHora] = useState('')
  const [fecha, setFecha] = useState('')

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Fecha',
      dataIndex: 'fechaTurno',
      key: 'fechaTurno',
    },
    {
      title: 'Hora',
      dataIndex: 'horaTueno',
      key: 'horaTueno',
    },
    {
      title: 'Nombre',
      key: 'nombrePaciente',
      dataIndex: 'nombrePaciente',
    },
    {
      title: 'Estado',
      key: 'estado',
      dataIndex: 'estado',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => showModal()}> Editar </a>
          <a onClick={() => borrar(record._id)}>Borrar</a>
        </Space>
      ),
    },
  ]

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    traerTurnos()
    setRefresh(false)
    //console.log(turnos)
  }, [refresh])

  const traerTurnos = () => {
    const fetchData = async () => {
      const response = await swService.getAllTurnos()
      console.log(response)
      setTurnos(response)
    }
    fetchData()
  }

  const editar = () => {
    const fetchData = async () => {
      const response = await swService.editarTurno()
      console.log('Respuesta del server', response)
    }
    fetchData()
  }

  const borrar = (id) => {
    const fetchData = async () => {
      const response = await swService.borraTurno(id)
      console.log('Respuesta del server', response)
      setRefresh(true)
    }
    fetchData()
  }

  const fechaChange = (dateString) => {
    
    setFecha(dateString)
    console.log('Hola',dateString);
  }
  const horaChange = (value) => {

    setHora(value)
    console.log(value);
  }

  return (
    <div>
      <Button type="primary" onClick={() => traerTurnos()}>
        Traer todos
      </Button>
      <Table columns={columns} dataSource={turnos} />

      <>

        <Modal
          title="Editar Turno"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Fecha</p>
          <DatePicker showTime format="YYYY-MM-DD" 
          onChange={fechaChange}/>

          <p>Hora</p>
          <TimePicker format="HH:mm" 
          onChange={horaChange}
          />

{/*           <p>Estado</p>
          <Select
            defaultValue="pendiente"
            onChange={estadoChange}
            style={{ width: 120 }}
            options={[
              { value: 'pendiente', label: 'pendiente' },
              { value: 'terminado', label: 'terminado' },
            ]}
          /> */}
        </Modal>
      </>
    </div>
  )
}
export default ModificarTurno
