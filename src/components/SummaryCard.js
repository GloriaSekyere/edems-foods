import React from 'react'

const SummaryCard = ({ 
  image,
  size,
  weight,
  price,
  quantity
}) => {

  return (
    <div className='order-summary-card'>
      <div className='order-summary-card-img'>
        <img src={image} alt='image' />
      </div>
      <div className='order-summary-card-description'>
        <p>{size} <span>({weight})</span></p>
        <p><span>GH₵</span> {price}</p>
      </div>
      <div className='order-summary-card-quantity'>{quantity}</div>
    </div>
  )
}

export default SummaryCard