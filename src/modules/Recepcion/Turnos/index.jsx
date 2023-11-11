import { useState } from 'react'
import { Form, Input, DatePicker, Button } from 'antd'
import { Table } from 'antd'
import dayjs from 'dayjs'
import swService from '../../../services/swapi'

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

function Turnos() {
  const [responseText, setResponseText] = useState('')
  const [turnos, setTurnos] = useState([''])

  const onFinish = (values) => {
    values.estado = 'pendiente'
    const fechaISO8601 = values.fechaTurno
    values.fechaTurno = dayjs(fechaISO8601).format('YYYY-MM-DD HH:mm')

    const fetchData = async () => {
      const response = await swService.createTurno(values)
      console.log('Respuesta del server', response)
      setResponseText(`Respuesta del servidor: ${JSON.stringify(response)}`)
    }
    fetchData()
  }

  const onClick = () => {
    const fetchData = async () => {
      const response = await swService.getAllTurnos()
      console.log(response)
      setTurnos(response)
    }
    fetchData()
  }

  return (
    <div>
      <Button type="primary" onClick={() => onClick()}>
        Buscar turnos
      </Button>
      <Table
        dataSource={turnos}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
        bordered
      />

      <Form
        name="nuevoTurnoForm"
        onFinish={onFinish}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <Form.Item
          label="Fecha del turno"
          name="fechaTurno"
          rules={[
            {
              required: true,
              message: 'Por favor, selecciona la fecha del turno',
            },
          ]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" />
        </Form.Item>

        <Form.Item
          label="Paciente"
          name="nombrePaciente"
          rules={[
            {
              required: true,
              message: 'Por favor, ingresa el nombre del paciente',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Descripción"
          name="descripcion"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Cargar Turno
          </Button>
        </Form.Item>
      </Form>

      {responseText && <div>{responseText}</div>}
    </div>
  )
}

export default Turnos
