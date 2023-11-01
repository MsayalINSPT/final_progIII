import { useEffect } from 'react'
import swService from '../../../services/swapi'


function AltaMascota() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await swService.getPersonById(1)
      console.log(response)
    }
    fetchData()
  }, [])

  return <h1>Implementar alta mascota</h1>
}

export default AltaMascota
