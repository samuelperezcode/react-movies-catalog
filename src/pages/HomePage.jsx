import Form from '../components/Form'
import Hero from '../components/Hero'
import ListMoviesHorizontal from '../components/ListMoviesHorizontal'
import { movies } from '../mocks/movies.json'

import { lang } from '../mocks/lang.json'

function HomePage () {
  return (
    <main>
      <Hero title={lang[0].Hero.title} desc={lang[0].Hero.desc} btnText={lang[0].Hero.btnText} href='/discover' />
      <div className='container'>
        <ListMoviesHorizontal movies={movies} topic='Recent Movies' />
        <ListMoviesHorizontal movies={movies} topic='Popular Movies' />
        <Form />
      </div>
    </main>
  )
}

export default HomePage
