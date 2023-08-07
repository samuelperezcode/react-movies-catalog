import Link from "./Link"
import './Hero.css'
function Hero({title, desc, btnText}) {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-content--title">{title}</h1>
        <p className="hero-content--desc">{desc}</p>
      </div>
      <Link className="hero-btn" to={'/discover'}>{btnText}</Link>
    </section>
  )
}

export default Hero
