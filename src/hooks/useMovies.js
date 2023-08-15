import { useCallback, useContext, useMemo, useRef, useState } from 'react'
import { MoviesContext } from '../context/movies'
import { getMovies } from '../services/getMovies'
import { getSortedMovies } from '../services/getSortedMovies'

export function useMovies () {
  const [movies, setMovies] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { query, sort } = useContext(MoviesContext)
  const previousSearch = useRef(query)

  const searchMovies = useCallback(async ({ query }) => {
    console.log('render')
    //* Evitar hacer la misma buskeda dos veces
    if (query === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = query
      const newMovies = await getMovies(query)
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    if (movies === undefined) return
    return sort
      ? getSortedMovies([...movies])
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, loading, error, searchMovies }
}
