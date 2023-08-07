import MovieCard from "./MovieCard"
import './ListMoviesHorizontal.css'

function ListMoviesHorizontal({topic}) {
  return (
    <section className="horizontal-list">
      <h3 className="horizontal-list--topic">{topic}</h3>
      <section className="horizontal-list--slider">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </section>
    </section>
  )
}

export default ListMoviesHorizontal