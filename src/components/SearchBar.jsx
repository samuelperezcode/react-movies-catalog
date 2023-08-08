import './SearchBar.css'

function SearchBar () {
  return (
    <form action='' className='search-bar'>
      <input className='search-bar--input' type='text' name='movie' id='movie' placeholder='Avengers,Barbie...' />
      <input className='search-bar--btn' type='submit' value='Search' />
    </form>
  )
}

export default SearchBar
