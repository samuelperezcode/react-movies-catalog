import { useState } from "react"
import './Header.css'

function Header() {
  const [lightMode, setLightMode] = useState(false)
  const handleClick = () => {
    setLightMode(!lightMode)
  }
  const headerClass = lightMode ? 'header light' : 'header'
  const btnText = lightMode ? 'Dark Mode' : 'Light Mode'
  return (
    <div className={`${headerClass}`}>
      <h2>Film-Library</h2>
      <button onClick={handleClick} type="button">{btnText}</button>
    </div>
  )
}

export default Header