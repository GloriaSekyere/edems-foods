//hooks
import { useState } from 'react'
import { useQuantity } from '../hooks/useQuantity'

//assets
import Bucket from '../assets/bucket.png'

//components
import Jar from './Jar'

const MediumJar = () => {
  const { mediumQuantity, setMediumQuantity } = useQuantity()
  const [prevMediumQuantity, setPrevMediumQuantity] = useState(0)

  return (
    <Jar
      image={Bucket}
      size="Medium"
      weight="750g"
      price={30.00}
      quantity={mediumQuantity}
      setQuantity={setMediumQuantity}
      prevQuantity={prevMediumQuantity}
      setPrevQuantity={setPrevMediumQuantity}
    />
  )
}

export default MediumJar