import React from 'react'
import { Form, Input, DatePicker, Button } from 'antd'
import swService from '../../../services/swapi'





function Turnos() {

  const onFinish = (values) => {
    console.log(JSON.stringify(values))

    const fetchData = async () => {
 
      const response = await swService.createTurno(values)
      console.log('Respuesta del server',response)

    }
    fetchData()

  }



  return (
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
  )
}

export default Turnos
