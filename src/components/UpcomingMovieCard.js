import React,{useContext}from 'react';
import {MovieContext} from './../context/context';



const UpcomingMovieCard = () => {
    const {upComingMovies} =useContext(MovieContext);

    return (  
    <>
    <div className='upcoming-movie-grid' >
        
    {upComingMovies.length === 0 ? <h1 className='loading'>Loading...</h1>:upComingMovies.filter((movie)=>movie.poster_path).map((movie)=>{
        return   <div className='upcoming-movie' key={movie.id}>
            <div>
             <img
             src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
             alt={`${movie.title} Poster`}
             />
            </div>
            <p className='upcoming-movie-release-date'>{movie.release_date}</p>
           

        </div>

   
    })}
    </div>
   
    </>);
}
 
export default UpcomingMovieCard;