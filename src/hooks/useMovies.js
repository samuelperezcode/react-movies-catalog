import { useContext, useState } from 'react'
import { MoviesContext } from '../context/movies'
import { getMovies } from '../services/getMovies'

export function useMovies () {
  const [moviesData, setMoviesData] = useState({})
  const { query } = useContext(MoviesContext)

  const moviesFromAPI = await getMovies(query)

  const listMovies = moviesData.movies
  const mappedMovies = listMovies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    type: movie.Type,
    poster: movie.Poster,
    likes: movie.Likes,
    desc: movie.Desc,
    year: movie.Year
  }))

  return { movies: mappedMovies, getMovies }
}
