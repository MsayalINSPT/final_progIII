import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  DollarOutlined,
  FileDoneOutlined,
  UserAddOutlined,
  CloseSquareOutlined,
  EditOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'

const { Header, Content, Footer, Sider } = Layout

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}

const items = [
  getItem(
    <Link to="/Recepcion/Cliente"> Alta cliente </Link>,
    '1',
    <UserAddOutlined />,[
      getItem(<Link to="/Recepcion/Cliente/AltaMascota">Alta mascota</Link>, '2', <UserAddOutlined />),
      getItem(<Link to="/Recepcion/Cliente/Listar">Listar clientes</Link>, '3', <UserAddOutlined />)

    ]
  ),

  getItem(
    <Link to="/Recepcion/Turnos"> Asignar turnos </Link>,
    '4',
    <FileDoneOutlined />,
    [
      getItem(
        <Link to="/Recepcion/Turnos/Buscar"> Buscar Turno </Link>,
        '5',
        <SearchOutlined />
      ),
      getItem(
        <Link to="/Recepcion/Turnos/Modificar"> Modificar turno </Link>,
        '6',
        <EditOutlined />
      ),
    ]
  ),

  getItem(
    <Link to="/Recepcion/Cobros"> Cobrar </Link>,
    '7',
    <DollarOutlined />
  ),
  getItem(
    <Link to="/Login/Logout"> Logout </Link>,
    '8',
    <CloseSquareOutlined />
  ),
]

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()


  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        ></Menu>
      </Sider>
      <Layout style={{ width: '100%' }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Recepcion </h1>
        </Header>
        <Content
          style={{
            margin: '20px 16px',
          }}
        >
          <div
            style={{
              height: '100%',
              background: colorBgContainer,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
export default App
