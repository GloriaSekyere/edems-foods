//hooks
import { useTotal } from '../hooks/useTotal'

const Jar = ({
  image,
  size,
  weight,
  price,
  quantity,
  setQuantity,
  prevQuantity,
  setPrevQuantity
}) => {
  
  const { setTotal } = useTotal()

  const handleChange = (e) => {
    setQuantity(e.target.value)
    if (e.target.value == 0) {
      setTotal(0)
    }
  }

  const handleDecrease = () => {
    setQuantity(prevQuantity => --prevQuantity)
    setTotal(prevTotal => prevTotal - price)
  }

  const handleIncrease = () => {
    setQuantity(prevQuantity => ++prevQuantity)
    setTotal(prevTotal => prevTotal + price)
  }

  const handleBlur = (e) => {
    if (prevQuantity != quantity) {
      setTotal(0)
      setTotal(prevTotal => prevTotal + (price * e.target.value))
      setPrevQuantity(quantity)
    }
  }

  return (
    <div className='products-item'>
      <div className='products-item-image'>
        <img src={image} alt={`${size}-jar`} />
      </div>

      <div className='products-item-details'>
        <div className='products-item-details-description'>
          <p>{size} <span>({weight})</span></p>
          <p><span>GH₵</span> {price}</p>
        </div>

        <div className='products-item-details-quantity'>
          <button 
            onClick={handleDecrease}>
            -
          </button>
          <input 
            onChange={e => handleChange(e)} 
            onBlur={e => handleBlur(e)}
            value={quantity} 
          />
          <button 
            onClick={handleIncrease}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Jar