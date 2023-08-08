import './MovieCard.css'

function MovieCard () {
  return (
    <article className='movie-card'>
      <figure className='movie-card--img'>
        <img src='' alt='' />
      </figure>
      <div className='movie-card--content'>
        <h3>Movie Title</h3>
        <p>Triller</p>
        <p>Mon 12, July</p>
        <div className='tags'>
          <span>Views 23k</span>
          <span>Likes 💖</span>
        </div>

      </div>
    </article>
  )
}

export default MovieCard
