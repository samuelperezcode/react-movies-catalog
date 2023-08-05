import './Header.css'
import Link from "./Link"

function Header() {
  const handleClick = () => {

  }
  return (
    <div className='header' >
      <h2><Link className='header-title' to={'/'}>Film-Library</Link></h2>

      <div className="header-links">
        <ul>
          <li><Link to={'/discover'}>Discover</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><button onClick={handleClick} type="button">Light Mode</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header