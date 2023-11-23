import api from './api'

const mascotaService = {}


mascotaService.createMascota = (mascota) => api.post(`/mascota/`, mascota)
mascotaService.buscarMascotas = (cliente_id) => api.post(`/mascota/buscar`,cliente_id)


export default mascotaService