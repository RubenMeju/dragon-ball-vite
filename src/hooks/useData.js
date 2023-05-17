import { useEffect, useState } from 'react'
import { fetchCharacters } from '../service/characters.service'

export const useData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')

  const getData = async (search = '') => {
    setLoading(true)
    await fetchCharacters(search).then((data) => {
      setData(data)
      setLoading(false)
    })
  }

  useEffect(() => {
    getData(search)
  }, [search])

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  return { loading, data, search, handleSearch }
}
