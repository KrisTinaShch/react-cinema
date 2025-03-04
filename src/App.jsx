import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './components/Pages/Home'
import Favorites from './components/Pages/Favorites'
import Movie from './components/Pages/Movie'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/favorites' element={<Favorites />}> </Route>
          <Route path='/movie' element={<Movie />}> </Route>
          <Route path='*' element={<Home />}> </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
