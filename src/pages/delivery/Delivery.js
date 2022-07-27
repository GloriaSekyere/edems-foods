import React from 'react'

//hooks
import { useTotal } from '../../hooks/useTotal'

const Delivery = () => {
  const { total } = useTotal()

  return (
    <div>Delivery</div>
  )
}

export default Delivery