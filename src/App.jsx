import { createContext, useEffect, useState } from 'react'
import MyCard from './components/Card/MyCard'
import { CardModal } from './components/CardModal/CardModal'
import './App.css'

const BASE_URL = 'http://127.0.0.1:8000/api/character/?search='

export const ItemContext = createContext()

export default function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')

  const [itemData, setItemData] = useState()

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

  return (
    <div>
      <header>
        <h1>Dragon Ball</h1>
      </header>
      <form>
        <input type='text' name='search' onChange={handleSearch} />
        <button type='submit'>Buscar</button>
      </form>
      <ItemContext.Provider value={{ itemData, setItemData }}>
        <MyCard loading={loading} data={data} />
        <CardModal />
      </ItemContext.Provider>
    </div>
  )
}
