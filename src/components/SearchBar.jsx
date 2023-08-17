import './SearchBar.css'
import { useSearch } from '../hooks/useSearch'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

function SearchBar ({ fn }) {
  const { query, setQuery, error, sort, setSort } = useSearch()

  const debounceGetMovies = useCallback(
    debounce(search =>
      fn({ query: search }), 400)
    , [])

  const handleSubmit = (e) => {
    e.preventDefault()
    fn({ query })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
    debounceGetMovies(newQuery)
  }

  return (
    <form action='' className='search-bar' onSubmit={handleSubmit}>
      <input onChange={handleChange} className='search-bar--input' type='text' name='query' value={query} placeholder='Avengers,Barbie...' />
      <input type='checkbox' checked={sort} onChange={handleSort} />
      <input className='search-bar--btn' type='submit' value='Search' />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default SearchBar
