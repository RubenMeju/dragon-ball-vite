import { createContext, useState } from 'react'
import MyCard from './components/Card/MyCard'
import { CardModal } from './components/CardModal/CardModal'
import './App.css'
import SearchInput from './components/Search/SearchInput'
import { useData } from './hooks/useData'
import Paginator from './components/Paginator/Paginator'
import Loader from './components/Loader/Loader'
import Logo from './assets/dragonball.png'

export const ItemContext = createContext()

export default function App() {
  const [itemData, setItemData] = useState()
  const { loading, data, handleSearch, handlePreview, handleNext, offset } =
    useData()
  return (
    <>
      <header>
        <img src={Logo} className='logo' alt='Dragon Ball' />
      </header>
      <div className='content'>
        <SearchInput handleSearch={handleSearch} />
        <ItemContext.Provider value={{ itemData, setItemData }}>
          {loading ? <Loader /> : <MyCard loading={loading} data={data} />}
          <CardModal />
        </ItemContext.Provider>
        <Paginator
          next={data.next}
          offset={offset}
          handlePreview={handlePreview}
          handleNext={handleNext}
        />
      </div>
    </>
  )
}
