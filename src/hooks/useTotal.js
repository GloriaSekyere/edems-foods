import { useContext } from "react";
import { TotalContext } from "../contexts/TotalContext";

export const useTotal = () => {
  const context = useContext(TotalContext)

  if (context === undefined) {
    throw new Error("useTotal must be used inside a TotalProvide")
  }

  return context
}