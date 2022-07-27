import { useContext } from "react";
import { QuantityContext } from "../contexts/QuantityContext";

export const useQuantity = () => {
  const context = useContext(QuantityContext)

  if (context === undefined) {
    throw new Error("useTotal must be used inside a QuantityProvider")
  }

  return context
}