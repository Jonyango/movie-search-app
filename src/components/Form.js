import React,{useState} from 'react';

const InputForm = () => {
    const [movieTitle, setMovieTitle]=useState('');

   const handleOnchange=(e)=>{
        setMovieTitle(e.target.value);

    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(movieTitle);
        setMovieTitle('');
    }
    return  <>
    <form onSubmit={handleOnSubmit} className='form'>
        <input
        className='input'
        type='query'
        value={movieTitle}
        onChange={handleOnchange}
        placeholder='Search for a movie'
        />
        <button className='search-button' type='submit'>Search</button>
    </form>
    </>;
}
 
export default InputForm;