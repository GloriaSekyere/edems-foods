import { useState, useEffect } from 'react'
import { useTotal } from '../hooks/useTotal'

//assets
import Bucket from '../assets/bucket.png'

const SmallJar = ({ handleTotal }) => {
  const [smallQuantity, setSmallQuantity] = useState(0)
  const { setTotal } = useTotal()

  useEffect(() => {
    setTotal(prevTotal => prevTotal + (smallQuantity * 20))
  }, [smallQuantity])


  const handleSmallQuantityChange = (e) => {
    setSmallQuantity(Number(e.target.value))
  }

  const handleSmallQuantityDecrease = () => {
    setSmallQuantity(prevQuantity => prevQuantity - 1)
  }

  const handleSmallQuantityIncrease = () => {
    setSmallQuantity(prevQuantity => prevQuantity + 1)
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