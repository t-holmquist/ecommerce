import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { motion } from 'motion/react'

const LikedHeart = () => {

    const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.button 
    animate={isLiked ? {y: [5, -5, 0], scale: [1, 1.1, 1]} : {y: 0} }
    transition={{duration: 0.2}}
    onClick={() => setIsLiked(!isLiked)} className='cursor-pointer z-10'>
        {isLiked ? (
            <FontAwesomeIcon color='red' icon={solidHeart}/> 
        ) : (
            <FontAwesomeIcon icon={faHeart}/>
        )}
    </motion.button>
  )
}

export default LikedHeart