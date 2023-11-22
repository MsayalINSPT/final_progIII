import { Form, Input, Button} from 'antd'
import { useState } from 'react'

import clienteService from '../../../services/clienteApi'


function AltaCliente() {
  const [responseText, setResponseText] = useState('')

  const onFinish = (values) => {
    console.log(values)
    const fetchData = async () => {
      const response = await clienteService.createCliente(values)
      //console.log('Respuesta del server', response)
      setResponseText(`Respuesta del servidor: ${JSON.stringify(response)}`)
    }
    fetchData()
  }

  return (
    <div>
      <h2>Nuevo cliente</h2>
      <Form
        name="wrap"
        labelCol={{
          flex: '110px',
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[
            {
              required: true,
              message: 'Por favor, ingresa el nombre',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Apellido"
          name="ape"
          rules={[
            {
              required: true,
              message: 'Por favor, ingresa el apellido',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="DNI"
          name="dni"
          rules={[
            {
              required: true,
              message: 'Por favor, ingresa el DNI',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Teléfono"
          name="telefono"
          rules={[
            {
              required: true,
              message: 'Por favor, ingresa el teléfono',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Alta
          </Button>
        </Form.Item>
      </Form>
      {responseText && <div>{responseText}</div>}
    </div>
  )
}

export default AltaCliente
