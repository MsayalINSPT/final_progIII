import axios from 'axios'
// import localStorage from './localStorage'

const api = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 1000 * 15, // 15 sec
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    // const data = localStorage.get() // Before request is sent
    // if (data) {
    //   // eslint-disable-next-line no-param-reassign
    //   config.headers.common.Authorization = `${data.token}`
    // }

    const tokenUsuario = localStorage.getItem('miToken')
    //console.log(tokenUsuario)
    if (tokenUsuario) {
      
      //config.headers.common.Authorization = `${tokenUsuario}`
      config.headers['Authorization'] = `Bearer ${tokenUsuario}`
    }
    return config
  },
  (error) => Promise.reject(error) // Do something with request error
)

api.interceptors.response.use(
  (response) => response.data, // Do something with response data
  (error) => {
    if (error.response.status === 401) {
      console.log('error usuario invalido')
    }

    // Do something with response error
    //return Promise.reject(console.log('error'))
    return error.response.status
  }
)

export default api
