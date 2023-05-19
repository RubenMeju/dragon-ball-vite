import { useEffect, useState } from 'react'
import { fetchCharacters } from '../service/characters.service'

export const useData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const [offset, setOffset] = useState(0)

  const getData = async (offset, search) => {
    setLoading(true)
    try {
      const newData = await fetchCharacters(offset, search)
      setData(newData)
    } catch (error) {
      setError('Algo ha salido mal!')
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 300)
    }
  }

  useEffect(() => {
    getData(offset, search)
  }, [offset, search])

  const handleSearch = (e) => {
    setOffset(0)
    setSearch(e.target.value)
  }
  const handlePreview = () => {
    setOffset(offset - 9)
  }

  const handleNext = () => {
    setOffset(offset + 9)
  }

  return {
    loading,
    error,
    data,
    offset,
    handlePreview,
    handleNext,
    search,
    handleSearch
  }
}
