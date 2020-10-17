import React,{useState,useContext} from 'react';
import {MovieContext} from '../context/context'

const InputForm = () => {
    const [movieTitle, setMovieTitle]=useState('');
    const {fetchMovies}= useContext(MovieContext);

   const handleOnchange=(e)=>{
        setMovieTitle(e.target.value);

    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        fetchMovies(movieTitle);
        setMovieTitle('');
    }
    return  <>
    <form onSubmit={handleOnSubmit} className='form'>
        <input
        className='input'
        type='query'
        value={movieTitle}
        onChange={handleOnchange}
        placeholder='e.g 3 Idiots'
        />
        <button className='search-button' type='submit'>Search</button>
    </form>
    </>;
}
 
export default InputForm;