import MovieCard from './MovieCard'
import './Movies.css'

const NoMovies = () => {
  return <h3>Results did not match</h3>
}

const ListOfMovies = ({ movies }) => {
  return movies.map(movie => <MovieCard key={movie.id} title={movie.title} likes={movie.likes} poster={movie.poster} type={movie.type} year={movie.year} />)
}

function Movies ({ listMovies }) {
  const hasMovies = listMovies?.length > 0
  return (
    <section className='movies-container'>
      {
          hasMovies
            ? <ListOfMovies movies={listMovies} />
            : <NoMovies />
      }
    </section>
  )
}

export default Movies
