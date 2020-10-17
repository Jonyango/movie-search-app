import React,{useContext} from 'react';
import {MovieContext} from './../context/context';
import MovieCard from './MovieCard';
import UpcomingMovieCard from './UpcomingMovieCard'

const MovieList = () => {
const {movies} =useContext(MovieContext);

    return (  
    <section className='home'>
        {movies.length === 0 ? <UpcomingMovieCard/>:
    <div className='card--grid'>
        
        {movies.filter((movie)=>movie.poster_path).map((movie)=>{
             return <MovieCard movie={movie} key={movie.id}/>
        })}
        
    </div>
}
    </section>);
}
 
export default MovieList;