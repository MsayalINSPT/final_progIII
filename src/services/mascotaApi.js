import api from './api'

const mascotaService = {}


mascotaService.createMascota = (mascota) => api.post(`/mascota/`, mascota)


export default mascotaService