import Link from "../components/Link"
import { useEffect } from "react"

function DetailPage({routeParams}) {
  
  useEffect(()=>{
    document.title = `${routeParams.query}`
    fetch(`api/${routeParams.query}`)
  },[])
  return (
    <main>
      <h1>{routeParams.query.toUpperCase()} DetailPage</h1>
      <Link to={'/'}>Go Home</Link>
    </main>
  )
}

export default DetailPage