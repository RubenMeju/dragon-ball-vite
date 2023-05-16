import { createContext, useState } from 'react'
import MyCard from './components/Card/MyCard'
import { CardModal } from './components/CardModal/CardModal'

export const ItemContext = createContext()

export default function App() {
  const [itemData, setItemData] = useState()
  return (
    <div style={{ background: 'blueviolet' }}>
      <ItemContext.Provider value={{ itemData, setItemData }}>
        <MyCard />

        <CardModal />
      </ItemContext.Provider>
    </div>
  )
}
