import React from 'react';
import Header from './components/Header';
import index from './components/index';
import MovieContextProvider from './context/context';

function App() {
  return (
    <MovieContextProvider>
<div className="container">
      <Header/>
    </div>
    </MovieContextProvider>
    
  );
}

export default App;
