export const getSortedMovies = (movies) => {
  return movies.sort((a, b) => a.title.localeCompare(b.title))
}
