/* import { useEffect, useState } from 'react'
import { Spin } from 'antd'
import swService from '../../services/swapi'
import Character from '../../components/Character' */

function Cobros() {
/*   const [isLoading, setIsLoading] = useState(false)
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await swService.getPeople()
      console.log(response)
      setCharacters(response.results)
      setIsLoading(false)
    }
    fetchData()
  }, []) */
  return (
    <>
      <h1>Implementar cobros</h1>
{/*       {isLoading ? (
        <Spin tip="Cargando listado..." size="large">
          <div className="content" />
        </Spin>
      ) : (
        characters.map((x) => <Character key={x.url} {...x} />)
      )} */}
    </>
  )
}

export default Cobros
