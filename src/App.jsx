import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './components/Pages/Home'
import Favorites from './components/Pages/Favorites'
import Movie from './components/Pages/Movie'
import { useState, useEffect, createContext } from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store'

function App() {

  useEffect(() => {
    async function fetchFilms() {
      await fetch("https://67c5bc26351c081993fb3899.mockapi.io/cinema/cinema-list")
        .then(data => {
          return data.json();
        })
        .then(data => {
          changeFilms(data);
        })
        .catch(error => {
          console.log(error);
        })
    }
    fetchFilms();
  }, [])

  return (
    <>

      <BrowserRouter>
        <Header />
        <Provider store={store}>
          {/* <FilmsContext.Provider value={films}> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Provider>
        {/* </FilmsContext.Provider> */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
