import { createContext, useState } from 'react'
import MyCard from './components/Card/MyCard'
import { CardModal } from './components/CardModal/CardModal'
import './App.css'
import SearchInput from './components/Search/SearchInput'
import { useData } from './hooks/useData'

export const ItemContext = createContext()

export default function App() {
  const [itemData, setItemData] = useState()
  const { loading, data, handleSearch } = useData()
  return (
    <>
      <header>
        <h1>Dragon Ball</h1>
      </header>
      <div className='content'>
        <SearchInput handleSearch={handleSearch} />
        <ItemContext.Provider value={{ itemData, setItemData }}>
          <MyCard loading={loading} data={data} />
          <CardModal />
        </ItemContext.Provider>
      </div>
    </>
  )
}
