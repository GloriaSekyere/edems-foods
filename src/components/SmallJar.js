import { useState } from 'react'
import { useTotal } from '../hooks/useTotal'

//assets
import Bucket from '../assets/bucket.png'

const SmallJar = () => {
  const smallPrice = 20.00
  const [smallQuantity, setSmallQuantity] = useState(0)
  const { setTotal } = useTotal()


  const handleSmallQuantityChange = (e) => {
    let quantity = Number(e.target.value)
    setSmallQuantity(quantity)
    setTotal(prevTotal => prevTotal + (smallPrice * quantity))
  }

  const handleSmallQuantityDecrease = () => {
    setSmallQuantity(prevQuantity => --prevQuantity)
    setTotal(prevTotal => prevTotal - smallPrice)
  }

  const handleSmallQuantityIncrease = () => {
    setSmallQuantity(prevQuantity => ++prevQuantity)
    setTotal(prevTotal => prevTotal + smallPrice)
  }

  return (
    <div className='products-item'>
      <div className='products-item-image'>
        <img src={Bucket} alt="small-jar" />
      </div>

      <div className='products-item-details'>
        <div className='products-item-details-description'>
          <p>Small <span>(500g)</span></p>
          <p><span>GHC</span> 20.00</p>
        </div>

        <div className='products-item-details-quantity'>
          <button 
            onClick={handleSmallQuantityDecrease}>
            -
          </button>
          <input 
            onChange={e => handleSmallQuantityChange(e)} 
            value={smallQuantity} 
          />
          <button 
            onClick={handleSmallQuantityIncrease}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default SmallJar