import api from './api'

const userService = {}

userService.getRoot = () => api.get('/')
userService.getPeople = () => api.get(`/people`)
userService.getPersonById = (id) => api.get(`/people/${id}`)
userService.authUsuario = (usr) => api.post(`/auth/`,usr)
userService.createCliente = (cliente) => api.post(`/clients/`,cliente)



export default userService
