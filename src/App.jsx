import { lazy, Suspense } from 'react'

import HomePage from './pages/HomePage'

import Header from './components/Header'
import Footer from './components/Footer'
import Router from './components/Router'
import Route from './components/Route'
import Loader from './components/Loader'

import './App.css'
// Dinamic import
const DiscoverPage = lazy(() => import('./pages/DiscoverPage'))
const FavoritesPage = lazy(import('./pages/FavoritesPage'))
const DetailPage = lazy(() => import('./pages/DetailPage'))
const Page404 = lazy(() => import('./pages/Page404'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

function App () {
  const routes = [
    /* {
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
    }, */
    {
      path: '/favorites',
      Component: FavoritesPage
    },
    {
      path: '/detail/:query/',
      Component: DetailPage
    }
  ]

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/discover' Component={DiscoverPage} />
        </Router>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
