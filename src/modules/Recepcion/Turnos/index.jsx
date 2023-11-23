import { useState, useEffect } from 'react'
import { Form, Input, DatePicker, Button, AutoComplete, Select } from 'antd'
import dayjs from 'dayjs'
import turnoService from '../../../services/userApi'
import clienteService from '../../../services/clienteApi'
import { Outlet } from 'react-router-dom'
import mascotaService from '../../../services/mascotaApi'

const { Option } = Select

function Turnos() {
  const [responseText, setResponseText] = useState('')
  const [clientes, setClientes] = useState('')
  const [options, setOptions] = useState([])
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('')
  const [mascotas, setMascotas] = useState([])

  const opciones = {
    opcion1: 'Opción 1',
    opcion2: 'Opción 2',
    opcion3: 'Opción 3',
  }


  useEffect(() => {
    listarClientes()
  }, [])
 //----------------------------- FUNCION -----------------------------------
  const listarClientes = () => {
    const fetchData = async () => {
      const response = await clienteService.getAllClientes()
      setClientes(response)
      //console.log(clientes)
    }
    fetchData()
  }

   //----------------------------- FUNCION -----------------------------------
   const buscarMascotas = (_id) =>{
    console.log(_id)
    const idBuscado = {cliente_id: _id}
    const fetchData = async () => {
      const response = await mascotaService.buscarMascotas(idBuscado)
      console.log(response)
      setMascotas(response)
    }
    fetchData()
   }
 //----------------------------- FUNCION -----------------------------------
  const handleSearch = (value) => {
    const filteredData = clientes.filter((item) => item.dni.includes(value))
    const opc = filteredData.map((a) => ({ value: a.dni }))
    setOptions(opc)
  }


  const onSelect = (data) => {
    const clienteSeleccionado = clientes.filter(function (elemento) {
      return elemento.dni === data
    })

    const dueno = clienteSeleccionado[0]
    console.log(dueno)
    buscarMascotas(dueno._id)
    // setDueno(clienteSeleccionado)
    // setNombre(clienteSeleccionado[0].name + ' ' + clienteSeleccionado[0].ape)

  }
 //----------------------------- FUNCION -----------------------------------
  const onFinish = (values) => {
    values.estado = 'pendiente'
    const fechaISO8601 = values.fechaTurno
    values.fechaTurno = dayjs(fechaISO8601).format('YYYY-MM-DD')
    values.horaTurno = dayjs(fechaISO8601).format('HH:mm')
    console.log(values)

    const fetchData = async () => {
      const response = await turnoService.createTurno(values)
      console.log('Respuesta del server', response)
      //setResponseText(`Respuesta del servidor: ${JSON.stringify(response)}`)
      if (response) {
        setResponseText('Turno cargado')
      }
    }
    fetchData()
  }

  return (
    <div>
      <h2>Cargar turno nuevo</h2>
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
        <AutoComplete
          options={options}
          style={{ width: 100 }}
          onSelect={onSelect}
          onSearch={(text) => handleSearch(text)}
          placeholder="DNI cliente"
        />

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

        <div>
      <label>Seleccionar mascota:</label>
      <Select
        value={opcionSeleccionada}
        onChange={(value) => setOpcionSeleccionada(value)}
        style={{ width: 200 }}
      >
        {Object.entries(opciones).map(([name, valor]) => (
          <Option key={name} value={name}>
            {valor}
          </Option>
        ))}
      </Select>

      <p>Opción seleccionada: {opcionSeleccionada}</p>
    </div>

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
      <Outlet />
    </div>
  )
}

export default Turnos
