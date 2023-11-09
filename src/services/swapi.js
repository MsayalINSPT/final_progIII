import api from './api'

const swService = {}

swService.getRoot = () => api.get('/')
swService.getPeople = () => api.get(`/people`)
swService.getPersonById = (id) => api.get(`/people/${id}`)
swService.authUsuario = (usr) => api.post(`/auth/`,usr)

export default swService
