import { useState } from 'react'

//assets
import Bucket from '../assets/bucket.png'

const LargeJar = () => {
  const [largeQuantity, setLargeQuantity] = useState(0)

  const handleLargeQuantityChange = (e) => {
    setLargeQuantity(Number(e.target.value))
  }

  const handleLargeQuantityDecrease = () => {
    setLargeQuantity(prevQuantity => prevQuantity - 1)
  }

  const handleLargeQuantityIncrease = () => {
    setLargeQuantity(prevQuantity => prevQuantity + 1)
  }

  return (
    <div className='products-item'>
      <div className='products-item-image'>
        <img src={Bucket} alt="Large-jar" />
      </div>

      <div className='products-item-details'>
        <div className='products-item-details-description'>
          <p>Large <span>(1kg)</span></p>
          <p><span>GHC</span> 40.00</p>
        </div>

        <div className='products-item-details-quantity'>
          <button 
            onClick={handleLargeQuantityDecrease}>
            -
          </button>
          <input 
            onChange={e => handleLargeQuantityChange(e)} 
            value={largeQuantity} 
          />
          <button 
            onClick={handleLargeQuantityIncrease}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default LargeJar