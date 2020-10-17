import React, { useState,createContext } from 'react';

export const MovieContext=createContext();

const MovieContextProvider = ({children}) => {
    const [movies, setMovies] =useState([]);

    const fetchMovies= async (query)=>{
        
       try {
           let res = await fetch(`${process.env.REACT_APP_API_URL}query=${query}&page=1&include_adult=false`);
           let data = await res.json();
           setMovies(data.results);
           console.log(data)

       }catch(error){
           console.log(error);
       }

    }
    return (  
    <>
    <MovieContext.Provider value={{movies, fetchMovies}}>
{children}
    </MovieContext.Provider>
    </>);
}
 
export default MovieContextProvider;