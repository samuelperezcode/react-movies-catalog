import './MovieCard.css'

function MovieCard ({ title, type, year, likes, poster }) {
  return (
    <a href='#' className='movie-card'>
      <figure className='movie-card--img'>
        <img src={poster} alt={`Poster of ${title}`} />
      </figure>
      <div className='movie-card--content'>
        <h3>{title}</h3>
        <p><span>Type:</span> {type}</p>
        <p><span>Year:</span> {year}</p>
      </div>
      <div className='movie-card--tags'>
        <span>Fav ⭐</span>
        <p><span>Likes:</span> {likes}</p>
      </div>
    </a>
  )
}

export default MovieCard
