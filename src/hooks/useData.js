import { useEffect, useState } from 'react'

const BASE_URL = 'http://127.0.0.1:8000/api/character/?search='

export const useData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')

  const getData = async (search = '') => {
    setLoading(true)
    const response = await fetch(BASE_URL + search)
    const data = await response.json()
    console.log(data)
    setData(data)
    setLoading(false)
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
