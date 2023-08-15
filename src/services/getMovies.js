const API_KEY = '4287ad07'

export const getMovies = async (query) => {
  if (query === '') return
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const json = await response.json()
    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      type: movie.Type,
      poster: movie.Poster,
      likes: Math.floor(Math.random() * 100),
      desc: movie.Desc,
      year: movie.Year
    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
