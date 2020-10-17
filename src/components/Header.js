import React from 'react';
import InputForm from './Form';

const Header = () => {
    const handleReload=()=>{
window.location.reload()
    }
    return (  
    <>
    <header className='header' >
        <h1 className='app-title' onClick={handleReload}>Movie Search App</h1>
        <InputForm/>
    </header>
    </>);
}
 
export default Header;