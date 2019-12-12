import React from 'react';
import './nav.css'
function navbar({itemsnav}){
    return (
        <div className='navbar'>
        <div className='inner-style'>
            <h1 className='nav-title'>
                <a href='/' >
                    <img className='logo-docplanner' src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' alt='img' />
                    </a>
            </h1>
            <ul className='nav-main'>{
                itemsnav.map(el=>
                <li className={el.class}>{el.name}
                    <ul className='dropdown-menu' >{el.dropmenue&&el.dropmenue.map(el=><li className="dropdown-menu-link" >{el}</li>)}</ul>
                </li>)}</ul></div></div>
    )}

export default navbar