import React from 'react'
import { Link } from 'react-router-dom'

//hooks
import { useTotal } from '../../hooks/useTotal'

//assets
import Bucket from '../../assets/bucket.png'

//components
import PageTitle from '../../components/PageTitle'

const OrderSummary = () => {
  const { total } = useTotal()

  return (
    <div className='page order-summary'>

      <PageTitle title="order summary" linkTo="/products" />

      <div className='order-summary-cards'>
        <div className='order-summary-card'>
          <div className='order-summary-card-img'>
            <img src={Bucket} alt='' />
          </div>
          <div className='order-summary-card-description'>
            <p>Small <span>(500g)</span></p>
            <p><span>GHC</span> 20.00</p>
          </div>
          <div className='order-summary-card-quantity'>2</div>
        </div>
      </div>

      <div className='order-summary-total'>
        <p>total</p>
        <p>gh₵<span>{total}</span></p>
      </div>

      <div className='delivery-mode'>
        <h2>select mode of transport</h2>
        <Link to="/pickup">pick up</Link>
        <Link to="/delivery">delivery</Link>
      </div>
    </div>
  )
}

export default OrderSummary