import React from 'react'
import { Link } from 'react-router-dom'

//hooks
import { useTotal } from '../../hooks/useTotal'
import { useQuantity } from '../../hooks/useQuantity'

//assets
import Bucket from '../../assets/bucket.png'

//components
import PageTitle from '../../components/PageTitle'
import SummaryCard from '../../components/SummaryCard'

const OrderSummary = () => {
  const { 
    smallQuantity, 
    mediumQuantity,
    largeQuantity
  } = useQuantity()
  const { total } = useTotal()

  return (
    <div className='page order-summary'>

      <PageTitle title="order summary" linkTo="/products" />

      <div className='order-summary-cards'>
        {smallQuantity > 0 && <SummaryCard
          image={Bucket}
          size="Small"
          price={20.00}
          weight="500g"
          quantity={smallQuantity}
        />}

        {mediumQuantity > 0 && <SummaryCard
          image={Bucket}
          size="Medium"
          price={30.00}
          weight="750g"
          quantity={mediumQuantity}
        />}

        {largeQuantity > 0 && <SummaryCard
          image={Bucket}
          size="Large"
          price={40.00}
          weight="1kg"
          quantity={largeQuantity}
        />}
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