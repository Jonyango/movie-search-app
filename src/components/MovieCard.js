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
            <h2 className='card-title'>MOVIE DETAILS</h2>
            <div className='divider'/>
<div>
<h1 className='movie-title'>{movie.title}:</h1>
<p>
						<small>RELEASE DATE: {movie.release_date}</small>
					</p>
</div>
 <div className='movie-ratings'>
     <h4 id='movie-rating'>{movie.vote_average}</h4>
     <span role="img" aria-label="star-emoji" className='ratings'>⭐</span>
     <span role="img" aria-label="star-emoji">⭐</span>
     <span role="img" aria-label="star-emoji">⭐</span>
     <span role="img" aria-label="star-emoji">☆</span>
     <span role="img" aria-label="star-emoji">☆</span>
 </div>
 <p className='movie-overview'>{movie.overview}</p>

        </div>

    </div>
    </>;
}
 
export default MovieCard;