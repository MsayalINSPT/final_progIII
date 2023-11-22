import api from './api'

const mascotaService = {}


mascotaService.getAllTurnos = () => api.get(`/mascota`)


export default mascotaService