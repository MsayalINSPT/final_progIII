import clienteService from '../../../../services/clienteApi'

import { Form, Input, Button, Select, InputNumber, List } from 'antd'
import { useState, useEffect } from 'react'

const { Option } = Select
//const { Search } = Input

function AltaMascota() {
  const [clientes, setClientes] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
//----------------------------- FUNCION -----------------------------------
  useEffect(() => {
    listarClientes()
  }, [])
//----------------------------- FUNCION -----------------------------------
  const listarClientes = () => {
    const fetchData = async () => {
      const response = await clienteService.getAllClientes()
      setClientes(response)
      console.log(clientes)
    }
    fetchData()
  }
  //----------------------------- FUNCION -----------------------------------
  const handleSearch = (value) => {
    console.log(value)
    
    const filteredData = clientes.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
    setSearchTerm(filteredData);
    console.log(filteredData)
  }
//----------------------------- FUNCION -----------------------------------

  //----------------------------- FUNCION -----------------------------------
  const onFinish = (values) => {
    console.log(values)
  }
//----------------------------- FUNCION -----------------------------------
  const cambio = (values) => {
    console.log(values)
  }


  return (
    <div>
      <Input
        placeholder="Buscar"
        onChange={(e) => handleSearch(e.target.value)}

      />
      <List
        dataSource={searchTerm}
        renderItem={(item) => (
          <List.Item key={item.id}>
            {item.name} {'  '} {item.ape} {'Dni: '} {item.dni}
            
            
          </List.Item>
        )}
      />
    </div>
  )




/*   return (
    <div>
      <h2>Nuevo mascota</h2>
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
          maxWidth: 400,
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
          <Input placeholder="Ingrese nombre" />
        </Form.Item>

        <Form.Item label="Animal" name="clase">
          <Select placeholder="Seleccione animal">
            <Option value="gato">Gato</Option>
            <Option value="perro">Perro</Option>
            <Option value="otro">Otro bicho</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Sexo" name="sexo">
          <Select placeholder="Seleccione sexo">
            <Option value="macho">Macho</Option>
            <Option value="hembra">Hembra</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Edad" name="edad">
          <InputNumber min={1} max={20} placeholder="Indique edad" />
        </Form.Item>

        <Form.Item label="Dueño" name="cliente_id">
          <Input onChange={cambio} placeholder="DNI cliente" />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Alta
          </Button>
        </Form.Item>
      </Form>
    </div>
  ) */
}

export default AltaMascota
