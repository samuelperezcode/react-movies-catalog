import MovieCard from './MovieCard'
import './ListMoviesHorizontal.css'
import photo from '../assets/poster.jpeg'

function ListMoviesHorizontal ({ topic, movies }) {
  return (
    <section className='horizontal-list'>
      <h3 className='horizontal-list--topic'>{topic}</h3>
      <section className='horizontal-list--slider'>
        {
          movies.map(movie => <MovieCard title={movie.Title} poster={photo} year={movie.Year} type={movie.Type} likes={movie.Likes} />)
        }
      </section>
    </section>
  )
}

export default ListMoviesHorizontal
