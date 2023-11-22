import clienteService from '../../../../services/clienteApi'
import mascotaService from '../../../../services/mascotaApi'

import { Form, Input, Button, Select, InputNumber, AutoComplete } from 'antd'
import { useState, useEffect } from 'react'

const { Option } = Select
//const { Search } = Input

function AltaMascota() {
  const [clientes, setClientes] = useState('')
  const [options, setOptions] = useState([])
  const [dueno, setDueno]  = useState()
  const [nombre, setNombre] = useState()
  const [texto, setTexto] = useState()

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
    const filteredData = clientes.filter((item) => item.dni.includes(value))
    const opc = filteredData.map((a) => ({ value: a.dni }))
    setOptions(opc)
  }
  //----------------------------- FUNCION -----------------------------------

  //----------------------------- FUNCION -----------------------------------
  const onFinish = (values) => {

    values.cliente_id = dueno[0]._id
    //console.log(values)

    const fetchData = async () =>{
      const response = await mascotaService.createMascota(values)
      console.log(response.name)
      setTexto('Mascota: ' + response.name + ' Cargada')
      
    }
    fetchData()

  }

  //----------------------------- FUNCION -----------------------------------
  const onSelect = (data) => {
    const clienteSeleccionado = clientes.filter(function (elemento) {
      return elemento.dni === data
    })

    //console.log(clienteSeleccionado)
    setDueno(clienteSeleccionado)
    setNombre(clienteSeleccionado[0].name + ' ' + clienteSeleccionado[0].ape)

  }

  return (
    <div>
      <h2>Nuevo mascota</h2>

      <label>Cliente {nombre}</label>

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
        <AutoComplete
          options={options}
          style={{ width: 100 }}
          onSelect={onSelect}
          onSearch={(text) => handleSearch(text)}
          placeholder="DNI cliente"
        />

        <Form.Item
          label="Mascota"
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

        <Button type="primary" htmlType="submit" onSubmit={onFinish}>
          Alta
        </Button>

        <label>{texto}</label>
      </Form>
    </div>
  )
}

export default AltaMascota
