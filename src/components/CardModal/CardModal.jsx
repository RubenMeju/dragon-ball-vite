import { AnimatePresence, motion } from 'framer-motion'
import './cardModal.css'
import { useContext } from 'react'
import { ItemContext } from '../../App'

export function CardModal() {
  const { itemData, setItemData } = useContext(ItemContext)
  console.log(itemData)

  return (
    <AnimatePresence>
      {itemData?.id && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='background'
        >
          <motion.div
            layoutId={itemData?.id}
            initial={{}}
            animate={{}}
            exit={{ opacity: 0 }}
            className='contModal'
          >
            <motion.button
              type='button'
              className='btnExit'
              whileHover={{
                scale: 1.1
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setItemData(null)}
            >
              X
            </motion.button>
            <div className='body'>
              <div className='cardImage'>
                <img
                  src={itemData.image}
                  className='image'
                  alt='Logo Dragon Ball'
                />
              </div>

              <div className='modalDescription'>
                <p className='character'>{itemData.name}</p>
                <ul>
                  <li>
                    <p>{itemData.species}</p>
                  </li>
                  <li>
                    <p>{itemData.gender}</p>
                  </li>
                </ul>
                <p className='description'>{itemData.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
