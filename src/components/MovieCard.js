import React from 'react';

const MovieCard = ({movie}) => {
    return  <>
    <div className='movie-card-container'>
        <div className='image-container'>
            <div className='background-image' 
            style={{backgroundImage:`url(https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path})`}}
            />

        </div>
        <div className='movie-information'>
            <h2>Movie Details</h2>
            <div className='divider'/>
<div>
<h1>{movie.title}:</h1>
<p>
						<small>RELEASE DATE: {movie.release_date}</small>
					</p>
</div>


        </div>

    </div>
    </>;
}
 
export default MovieCard;