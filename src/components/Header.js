import React from 'react';
import InputForm from './Form';

const Header = () => {
    return (  
    <>
    <header className='header'>
        <h1 className='app-title'>Movie Search App</h1>
        <InputForm/>
    </header>
    </>);
}
 
export default Header;