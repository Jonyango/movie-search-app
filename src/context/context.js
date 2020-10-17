import React, { useState,createContext,useEffect } from 'react';
import axios from "axios";


export const MovieContext=createContext();

const MovieContextProvider = ({children}) => {
    const [movies, setMovies] =useState([]);
    const [upComingMovies, setUpComingMovies]=useState([]);

  const url = ` https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

    useEffect(()=>{
        axios.get(url).then((res)=>{
            let data=res.data.results
            setUpComingMovies(data);
            console.log(data)
        })
    },[])

    const fetchMovies= async (query)=>{
        
       try {
           let res = await fetch(`${process.env.REACT_APP_API_URL}query=${query}&page=1&include_adult=false`);
           let data = await res.json();
           setMovies(data.results);

       }catch(error){
           console.log(error);
       }

    }
    return (  
    <>
    <MovieContext.Provider value={{movies, fetchMovies,upComingMovies}}>
{children}
    </MovieContext.Provider>
    </>);
}
 
export default MovieContextProvider;