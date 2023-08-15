import { createContext, useState } from 'react'

export const MoviesContext = createContext()

export function MoviesProvider ({ children }) {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState(false)

  return (
    <MoviesContext.Provider value={{ query, setQuery, sort, setSort }}>
      {children}
    </MoviesContext.Provider>
  )
}
