import { useContext, useState } from 'react'
import movies from '../mocks/movies.json'
import { MoviesContext } from '../context/movies'

export function useMovies () {
  const [moviesData, setMoviesData] = useState({})
  const { query } = useContext(MoviesContext)

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

  const getMovies = () => {
    if (query) {
      setMoviesData(movies)
    } else {
      setMoviesData({ result: 'Empty' })
    }
  }

  return { movies: mappedMovies, getMovies }
}
