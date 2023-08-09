/* import Link from '../components/Link' */
import Movies from '../components/Movies'
import SearchBar from '../components/SearchBar'
import { useMovies } from '../hooks/useMovies'

function DiscoverPage () {
  const { movies, getMovies } = useMovies()

  return (
    <main>
      <h1 style={{ paddingTop: '2rem' }}>Discover Best Movies</h1>
      <SearchBar fn={getMovies} />
      <div className='container'>
        <Movies listMovies={movies} />
      </div>
    </main>
  )
}

export default DiscoverPage
