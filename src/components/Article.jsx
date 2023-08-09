import { Children } from 'react'
import './Artilcle.css'
export function ArticleContent ({ title, content }) {
  return null
}
export function Article ({ children }) {
  const articleContent = Children.map(children, ({ props }) => {
    return props
  })
  return (
    <article className='article'>
      <h2 className='article-title'>{articleContent[0].title}</h2>
      <p className='article-content'>{articleContent[0].content}</p>
    </article>
  )
}
