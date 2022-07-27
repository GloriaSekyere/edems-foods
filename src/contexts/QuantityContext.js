import { createContext, useState } from "react";

export const QuantityContext = createContext()

export const QuantityProvider = ({ children }) => {
  const [smallQuantity, setSmallQuantity] = useState(0)
  const [mediumQuantity, setMediumQuantity] = useState(0)
  const [largeQuantity, setLargeQuantity] = useState(0)

  return (
    <QuantityContext.Provider value={{
      smallQuantity, 
      setSmallQuantity,
      mediumQuantity, 
      setMediumQuantity,
      largeQuantity, 
      setLargeQuantity
    }}>
      { children }
    </QuantityContext.Provider>
  )
}