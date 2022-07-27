//hooks
import { useState } from 'react'
import { useQuantity } from '../hooks/useQuantity'

//assets
import Bucket from '../assets/bucket.png'

//components
import Jar from './Jar'

const LargeJar = () => {
  const { largeQuantity, setLargeQuantity } = useQuantity()
  const [prevLargeQuantity, setPrevLargeQuantity] = useState(0)

  return (
    <Jar
      image={Bucket}
      size="Large"
      weight="1kg"
      price={40.00}
      quantity={largeQuantity}
      setQuantity={setLargeQuantity}
      prevQuantity={prevLargeQuantity}
      setPrevQuantity={setPrevLargeQuantity}
    />
  )
}

export default LargeJar