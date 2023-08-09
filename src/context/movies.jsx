import { createContext, useState } from 'react'

export const MoviesContext = createContext()

export function MoviesProvider ({ children }) {
  const [query, setQuery] = useState('')

  return (
    <MoviesContext.Provider value={{ query, setQuery }}>
      {children}
    </MoviesContext.Provider>
  )
}
