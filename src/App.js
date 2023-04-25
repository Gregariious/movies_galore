import React from 'react'
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

// 63f084be
import './App.css'
import SearchIcon from './search.svg'
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=63f084be'

// const movie1 = {
//   Title: 'Amazing Spiderman Syndrome',
//   Year: '2012',
//   imdbID: 'tt2586634',
//   Type: 'Movie',
//   Poster: 'N/A'}
const App = () => {
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('')

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = response.json();
  console.log(data)
  data.then((res) => {
  setMovies(res.Search);
  });
  }


  useEffect(() => {
    searchMovies('All')
  }, []);
  
  
  return (
    <div className='app'>
      <h1>Entertainment Galore</h1>

      <div className='search'>
        <input 
        placeholder='Search for movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
            </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }


    </div>
  )
};

export default App;