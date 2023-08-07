import HomePage from './pages/HomePage'
import DiscoverPage from './pages/DiscoverPage'
import FavoritesPage from './pages/FavoritesPage'
import DetailPage from './pages/DetailPage'
import AboutPage from './pages/AboutPage'
import Page404 from './pages/Page404'

import Header from './components/Header'
import Footer from './components/Footer'
import Router from './components/Router'

import './App.css'


function App() {
  
  const routes = [
    {
      path:'/',
      Component: HomePage
    },
    {
      path: '/about',
      Component: AboutPage
    },
    {
      path:'/discover',
      Component: DiscoverPage
    },
    {
      path: '/favorites',
      Component: FavoritesPage
    },
    {
      path:'/detail/:query/',
      Component: DetailPage
    }
  ]

  return (
    <>
      <Header />
        <Router routes={routes} defaultComponent={Page404} />
      <Footer />
    </>
  )
}

export default App
