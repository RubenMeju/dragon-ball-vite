import { motion } from 'framer-motion'
import './card.css'
import { useContext } from 'react'
import { ItemContext } from '../../App'
import Loader from '../Loader/Loader'

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export default function MyCard({ loading, data }) {
  const { setItemData } = useContext(ItemContext)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='containerCards'>
          {data?.results.map(
            ({ id, name, image, description, species, gender }) => (
              <motion.div
                key={id}
                layoutId={id}
                initial='offscreen'
                animate={{}}
                exit={{ opacity: 0 }}
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div
                  className='card'
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '-1px 5px 5px -1px rgba(0,0,0,0.3)',
                    transition: { duration: 0.4 }
                  }}
                  onClick={() =>
                    setItemData({
                      id,
                      name,
                      image,
                      description,
                      species,
                      gender
                    })
                  }
                >
                  <div className='contImage'>
                    <img src={image} className='image' alt='Logo Dragon Ball' />
                  </div>

                  <div className='cardBody'>
                    <p className='name'>{name}</p>
                  </div>
                </motion.div>
              </motion.div>
            )
          )}
        </div>
      )}
    </>
  )
}
