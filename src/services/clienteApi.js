import api from './api'

const clienteService = {}

clienteService.getAllClientes = () => api.get(`/clients`)

export default clienteService