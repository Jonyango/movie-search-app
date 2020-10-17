import React from 'react';
import Header from './components/Header';
import index from './components/index';
import MovieList from './components/MovieList';
import MovieContextProvider from './context/context';

function App() {
  return (
    <MovieContextProvider>
      <div className="container">
        <Header/>
        <MovieList/>
      </div>
    </MovieContextProvider>
    
  );
}

export default App;
