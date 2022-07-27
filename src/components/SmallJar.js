//hooks
import { useState } from 'react'
import { useQuantity } from '../hooks/useQuantity'

//assets
import Bucket from '../assets/bucket.png'

//components
import Jar from './Jar'

const SmallJar = () => {
  const { smallQuantity, setSmallQuantity } = useQuantity()
  const [prevSmallQuantity, setPrevSmallQuantity] = useState(0)
  
  return (
    <Jar 
      image={Bucket}
      size="Small"
      weight="500g"
      price={20.00}
      quantity={smallQuantity}
      setQuantity={setSmallQuantity}
      prevQuantity={prevSmallQuantity}
      setPrevQuantity={setPrevSmallQuantity}
    /> 
  )
}

export default SmallJar