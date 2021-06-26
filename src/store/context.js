import { createContext, useEffect, useState } from "react"

export const StoreContext = createContext(null)

export const StoreContextProvider = ({ children }) => {
  const [news, setNews] = useState({})
  useEffect(() => {
    console.log('news', news)
  }, [news])

  const store = {
    news: [news, setNews]
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}