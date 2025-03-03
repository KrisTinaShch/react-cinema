import './App.css'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './components/Pages/Home'
import Favorites from './components/Pages/Favorites'
import Movie from './components/Pages/Movie'
function App() {
  return (
    <>
      <Header />
      <Movie />
      <Footer />
    </>
  )
}

export default App;
