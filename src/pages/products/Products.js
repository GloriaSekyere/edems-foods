import React from 'react'

//assets
import Bucket from '../../assets/bucket.png'

//components
import PageTitle from '../../components/PageTitle'


const Products = () => {
  return (
    <div className='page products'>
      
      <PageTitle title="products" linkTo="/" />

      <div className='products-content'>
        <div className='products-content-image'>
          <img src={Bucket} alt="small-jar" />
        </div>

        <div className='products-content-details'>
          <div className='products-content-details-description'>
            <p>Small <span>(500g)</span></p>
            <p><span>GHC</span> 20.00</p>
          </div>

          <div className='products-content-details-quantity'>
            <button>-</button>
            <input />
            <button>+</button>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Products