import api from './api'

const swService = {}

swService.getRoot = () => api.get('/')
swService.getPeople = () => api.get(`/people`)
swService.getPersonById = (id) => api.get(`/people/${id}`)
swService.authUsuario = (usr) => api.post(`/auth/`,usr)
swService.createCliente = (cliente) => api.post(`/clients/`,cliente)



swService.createTurno = (turno) => api.post(`/turno/`, turno)
swService.getAllTurnos = () => api.get(`/turno`)
swService.buscarTurnoPorFecha = (fecha) => api.post(`/turno/buscar`, fecha)
swService.editarTurno = (id,datos) => api.put(`/turno/${id}`,datos)
swService.borraTurno = (id) => api.delete(`/turno/${id}`)

export default swService
