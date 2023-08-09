import { useContext, useEffect, useRef, useState } from 'react'
import { MoviesContext } from '../context/movies'

export const useSearch = () => {
  const { query, setQuery } = useContext(MoviesContext)
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }
    if (query === '') {
      setError('Can not search empty names of movies')
      return
    }
    if (query.length < 1) {
      setError('scasdcsd')
      return
    }
    // todas las validaciones que necesites...

    setError(null)
  }, [query])

  return { query, setQuery, error }
}
