import './SearchBar.css'
import { useSearch } from '../hooks/useSearch'

function SearchBar ({ fn }) {
  const { query, setQuery, error } = useSearch()

  const handleSubmit = (e) => {
    e.preventDefault()
    fn()
  }
  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
    fn()
  }

  return (
    <form action='' className='search-bar' onSubmit={handleSubmit}>
      <input onChange={handleChange} className='search-bar--input' type='text' name='query' value={query} placeholder='Avengers,Barbie...' />
      <input className='search-bar--btn' type='submit' value='Search' />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default SearchBar
