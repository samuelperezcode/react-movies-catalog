import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import DiscoverPage from './pages/DiscoverPage'
import FavoritesPage from './pages/FavoritesPage'
import AboutPage from './pages/AboutPage'
import Header from './components/Header'
import './App.css'
import { EVENTS } from './constants/events'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  useEffect(()=>{
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    }

  }, [])
  return (
    <>
      <Header />
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
      {currentPath === '/discover' && <DiscoverPage />}
      {currentPath === '/favorites' && <FavoritesPage />}
    </>
  )
}

export default App
