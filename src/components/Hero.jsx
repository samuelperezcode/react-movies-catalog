import Link from './Link'
import './Hero.css'
function Hero ({ title, desc, btnText }) {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h1 className='hero-content--title'>{title}</h1>
        <h3 className='hero-content--desc'>{desc}</h3>
      </div>
      <Link className='hero-btn' to='/discover'>{btnText}</Link>
    </section>
  )
}

export default Hero
