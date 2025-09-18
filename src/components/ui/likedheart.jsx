import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const LikedHeart = () => {

    const [isLiked, setIsLiked] = useState(false)

  return (
    <button onClick={() => setIsLiked(!isLiked)} className='cursor-pointer z-10'>
        {isLiked ? (
            <FontAwesomeIcon color='red' icon={solidHeart}/> 
        ) : (
            <FontAwesomeIcon icon={faHeart}/>
        )}
    </button>
  )
}

export default LikedHeart