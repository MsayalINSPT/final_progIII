import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {


  FileDoneOutlined,
  CloseSquareOutlined,
  HistoryOutlined,
  DollarOutlined

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

<HistoryOutlined />



const items = [
  getItem(<Link to="Veterinario/Historial"> Historial </Link>, '1', <HistoryOutlined />),
  getItem(<Link to="Veterinario/Informe"> Informe </Link>, '2', <FileDoneOutlined />),
  getItem(<Link to="Veterinario/Recaudacion"> Recaudacion </Link>, '3', <DollarOutlined />),
  getItem(<Link to="Login/Logout"> Logout </Link>, '4', <CloseSquareOutlined />),


]

const App = () => {

  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()



  const navigate = useNavigate()
  useEffect(() => {
    navigate('/Veterinario/Historial')
  }, [])

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
          <h1>Veterinario</h1>
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
