import { useEffect, useState } from 'react'
import { fetchCharacters } from '../service/characters.service'

export const useData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')

  const [offset, setOffset] = useState(0)

  const getData = async (offset, search) => {
    setLoading(true)
    await fetchCharacters(offset, search).then((data) => {
      setData(data)
      setTimeout(() => {
        setLoading(false)
      }, 300)
    })
  }

  useEffect(() => {
    console.log('ejecudato !!! useData effect valor offset')

    getData(offset, search)
  }, [offset, search])

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  const handlePreview = () => {
    console.log('preview')
    setOffset(offset - 9)
  }

  const handleNext = () => {
    console.log('next')
    setOffset(offset + 9)
  }

  return {
    loading,
    data,
    offset,
    handlePreview,
    handleNext,
    search,
    handleSearch
  }
}
