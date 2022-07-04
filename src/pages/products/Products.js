import { useState } from 'react'
import { Link } from 'react-router-dom'

//components
import LargeJar from '../../components/LargeJar'
import MediumJar from '../../components/MediumJar'
import PageTitle from '../../components/PageTitle'
import SmallJar from '../../components/SmallJar'


const Products = () => {
  const [total, setTotal] = useState(0)
  
  return (
    <div className='page products'>
      
      <PageTitle title="products" linkTo="/" />

      <SmallJar />
      <MediumJar />
      <LargeJar />

      <div className='products-order'>
        <Link to="/order-summary">
          <p className='products-order-total'>gh₵<span>{total}</span></p>
          <p>place order</p>
        </Link>
      </div>
      
      
    </div>
  )
}

export default Products