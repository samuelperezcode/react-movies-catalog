import Link from "../components/Link"
function HomePage() {
  return (
    <main>
      <h1>HomePage</h1>
      <Link to={'/about'}>Go to About</Link>
      <Link to={'/discover'}>Go to discover</Link>
      <Link to={'/favorites'}>Go to favorites</Link>
    </main>
  )
}

export default HomePage