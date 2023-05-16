import { createContext, useState } from 'react'
import MyCard from './components/Card/MyCard'
import { CardModal } from './components/CardModal/CardModal'
import './App.css'

export const ItemContext = createContext()

export default function App() {
  const [itemData, setItemData] = useState()
  return (
    <div>
      <ItemContext.Provider value={{ itemData, setItemData }}>
        <header>
          <h1>Dragon Ball</h1>
        </header>
        <MyCard />

        <CardModal />
      </ItemContext.Provider>
    </div>
  )
}
