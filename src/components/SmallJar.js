import { useState } from 'react'
import { useTotal } from '../hooks/useTotal'

//assets
import Bucket from '../assets/bucket.png'

const SmallJar = () => {
  const smallPrice = 20.00
  const [smallQuantity, setSmallQuantity] = useState(0)
  const [prevSmallQuantity, setPrevSmallQuantity] = useState(0)
  const { setTotal } = useTotal()


  const handleSmallQuantityChange = (e) => {
    setSmallQuantity(e.target.value)
    if (e.target.value == 0) {
      setTotal(0)
    }
  }

  const handleSmallQuantityDecrease = () => {
    setSmallQuantity(prevQuantity => --prevQuantity)
    setTotal(prevTotal => prevTotal - smallPrice)
  }

  const handleSmallQuantityIncrease = () => {
    setSmallQuantity(prevQuantity => ++prevQuantity)
    setTotal(prevTotal => prevTotal + smallPrice)
  }

  const handleBlur = (e) => {

    if (prevSmallQuantity != smallQuantity) {
      setTotal(0)
      setTotal(prevTotal => prevTotal + (smallPrice * e.target.value))
      setPrevSmallQuantity(smallQuantity)
    }
    
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
            onBlur={e => handleBlur(e)}
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