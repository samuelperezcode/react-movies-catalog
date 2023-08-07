import Form from "../components/Form"
import Hero from "../components/Hero"
import ListMoviesHorizontal from "../components/ListMoviesHorizontal"

import {lang} from '../mocks/lang.json'


function HomePage() {
  return (
    <main>
      <Hero title={lang[0].Hero.title} desc={lang[0].Hero.desc} btnText={lang[0].Hero.btnText}/>
      <div className="container">
        <ListMoviesHorizontal topic={'Recent Movies'} />
        <ListMoviesHorizontal topic={'Popular Movies'} />
        <Form />
      </div>
    </main>
  )
}

export default HomePage