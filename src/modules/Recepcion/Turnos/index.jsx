
import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';


function Turnos() {

  const onFinish = (values) => {
    // Aquí puedes manejar la lógica para enviar los datos del formulario al backend
    console.log('Formulario enviado:', values);
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
        label="Fecha del turno"
        name="fechaTurno"
        rules={[
          {
            required: true,
            message: 'Por favor, selecciona la fecha del turno',
          },
        ]}
      >
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>

      <Form.Item
        label="Descripción"
        name="descripcion"
        rules={[
          {
            required: true,
            message: 'Por favor, ingresa una descripción del turno',
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