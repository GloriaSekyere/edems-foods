import { useState } from 'react'

//assets
import Bucket from '../assets/bucket.png'

const MediumJar = () => {
  const [mediumQuantity, setMediumQuantity] = useState(0)

  const handleMediumQuantityChange = (e) => {
    setMediumQuantity(Number(e.target.value))
  }

  const handleMediumQuantityDecrease = () => {
    setMediumQuantity(prevQuantity => prevQuantity - 1)
  }

  const handleMediumQuantityIncrease = () => {
    setMediumQuantity(prevQuantity => prevQuantity + 1)
  }

  return (
    <div className='products-item'>
      <div className='products-item-image'>
        <img src={Bucket} alt="Medium-jar" />
      </div>

      <div className='products-item-details'>
        <div className='products-item-details-description'>
          <p>Medium <span>(750g)</span></p>
          <p><span>GHC</span> 30.00</p>
        </div>

        <div className='products-item-details-quantity'>
          <button 
            onClick={handleMediumQuantityDecrease}>
            -
          </button>
          <input 
            onChange={e => handleMediumQuantityChange(e)} 
            value={mediumQuantity} 
          />
          <button 
            onClick={handleMediumQuantityIncrease}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default MediumJar