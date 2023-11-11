
import { Form, Input, Button, Select, InputNumber } from 'antd';
import { Spin } from 'antd'
import swService from '../../../services/swapi'

const { Option } = Select;

function AltaMascota() {



  const onFinish = (values) => {
    // Aquí puedes realizar acciones como enviar los datos al backend
    console.log('Datos del formulario:', values);

    const fetchData = async () => {
      //setIsLoading(true)
      const response = await swService.createCliente(values)
      console.log('Respuesta del server',response)
      //setCharacterInfo(response)
      //setIsLoading(false)
    }
    fetchData()

  }


  return (
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
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Por favor, ingresa el email',
          },
          {
            type: 'email',
            message: 'Ingresa un email válido',
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

      <Form.Item
        label="Tipo Mascota"
        name="especie"
        rules={[
          {
            required: true,
            message: 'Tipo mascota',
          },
        ]}
      >
        <Select>
          <Option value="perro">Perro</Option>
          <Option value="gato">Gato</Option>
          {/* Agrega más opciones según tus necesidades */}
        </Select>
      </Form.Item>

      <Form.Item
        label="Nombre Mascota"
        name="nom"
        rules={[
          {
            required: true,
            message: 'Por favor, ingresa el Nombre',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Sexo"
        name="sexo"
        rules={[
          {
            required: true,
            message: 'Por favor, selecciona el sexo',
          },
        ]}
      >
        <Select>
          <Option value="macho">Macho</Option>
          <Option value="hembra">Hembra</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Edad"
        name="edad"
        rules={[
          {
            required: true,
            message: 'Por favor, ingresa la edad',
          },
        ]}
      >
        <InputNumber min={1} />
      </Form.Item>




      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">
          Alta
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AltaMascota;
