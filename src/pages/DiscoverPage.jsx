import Movies from '../components/Movies'
import SearchBar from '../components/SearchBar'
import { useMovies } from '../hooks/useMovies'

function DiscoverPage () {
  const { movies, loading, error, searchMovies } = useMovies()

  return (
    <main>
      <h1 style={{ paddingTop: '2rem' }}>Discover Best Movies</h1>
      <SearchBar fn={searchMovies} />
      <div className='container'>
        {
          error ??
          loading
            ? <p>Searching Movies...</p>
            : <Movies listMovies={movies} />
        }
      </div>
    </main>
  )
}

export default DiscoverPage
