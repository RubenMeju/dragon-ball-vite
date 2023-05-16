import { useEffect, useState } from 'react'
import { fetchCharacters } from '../service/characters.service'

export const useData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCharacters().then((character) => {
      setData(character)
      setLoading(false)
    })
  }, [])

  return { loading, data }
}
