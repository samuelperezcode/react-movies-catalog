import Link from "../components/Link"
function HomePage() {
  return (
    <main>
      <h1>HomePage</h1>
      <Link to={'/about'}>Go to About</Link>
    </main>
  )
}

export default HomePage