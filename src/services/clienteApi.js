import api from './api'

const clienteService = {}

clienteService.getAllClientes = () => api.get(`/clients`)
clienteService.createCliente = (cliente) => api.post(`/clients/`,cliente)

export default clienteService