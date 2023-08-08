import movies from '../mocks/movies.json'

export function useMovies () {
  const listMovies = movies.movies
  const mappedMovies = listMovies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    type: movie.Type,
    poster: movie.Poster,
    likes: movie.Likes,
    desc: movie.Desc,
    year: movie.Year
  }))

  return { movies: mappedMovies }
}
