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
            ></motion.button>

            <div className='cardImage'>
              <img
                src={itemData.image}
                className='image'
                alt='Logo Dragon Ball'
              />
            </div>

            <div className='modalBody'>
              <p className='modalName'>{itemData.name}</p>
              <p className='label'>Descripción</p>
              <p className='info'>{itemData.description}</p>

              {itemData.planet && (
                <div className='cardDetails'>
                  <div className='groupDetails'>
                    <p className='label'>Planeta:</p>
                    <p className='info'>
                      {itemData.planet && itemData.planet.name}
                    </p>
                  </div>
                  <div className='groupDetails'>
                    <p className='label'>Especie:</p>
                    <p className='info'>{itemData.species}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
