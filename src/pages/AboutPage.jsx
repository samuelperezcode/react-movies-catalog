/* import Link from '../components/Link' */
import Hero from '../components/Hero'
import { Article, ArticleContent } from '../components/Article'
import { ListOfPeopleCards } from '../components/ListOfPeopleCards'

function AboutPage () {
  const articles = {
    objective: {
      title: 'Our Goal',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ad quisquam ratione, sit voluptatum laboriosam nulla earum at adipisci cum qui quam, sint debitis. Distinctio explicabo sapiente commodi reprehenderit repellendus consectetur aspernatur! Quasi ipsam labore, fuga tempore, odit quidem, non quos est eum dolore dolorum porro eos eligendi? A, doloremque!'
    },
    history: {
      title: 'Our History',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ad quisquam ratione, sit voluptatum laboriosam nulla earum at adipisci cum qui quam, sint debitis. Distinctio explicabo sapiente commodi reprehenderit repellendus consectetur aspernatur! Quasi ipsam labore, fuga tempore, odit quidem, non quos est eum dolore dolorum porro eos eligendi? A, doloremque!'
    }
  }
  const employees = [
    {
      name: 'Tom Hanks',
      job: 'Project Manager',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ex maiores, pariatur earum quas iste?',
      photo: '../assets/photo.png'
    },
    {
      name: 'Mark Antony',
      job: 'Main Director',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ex maiores, pariatur earum quas iste?',
      photo: '../assets/photo.png'
    },
    {
      name: 'Joe Madison',
      job: 'SEO',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ex maiores, pariatur earum quas iste?',
      photo: '../assets/photo.png'
    }
  ]
  return (
    <main>
      <Hero title='Film Library' desc='La MAYOR libreria del país, actualizada y recomendada. TODO lo que necesitas, para disfrute familiar, como un CINE, pero desde la comoiad de tu HOGAR. ' btnText='GET IN TOUCH' />
      <section className='container'>
        <Article>
          <ArticleContent title={articles.objective.title} content={articles.objective.content} />
        </Article>
        <Article>
          <ArticleContent title={articles.history.title} content={articles.history.content} />
        </Article>
        <ListOfPeopleCards people={employees} />
      </section>
    </main>
  )
}

export default AboutPage
