import React, { Component } from 'react'
import { Link } from 'react-router'

import './styles.scss'
export default class Header extends Component{
    render(){
        return(
            <header>
                <div className='holder'>
                    <div className='logo'><h1>Alcos</h1></div>
                    <div className='refs_and_search'>
                        <div className='refs'>
                            <Link to='/about' className='refs_for_specials'>About</Link>
                            <Link to='/for_bars' className='refs_for_specials'>For Bars</Link>
                            <Link to='/for_manufacturers' className='refs_for_specials'>For Manufacturers</Link>
                        </div>
                        <input type='search' placeholder='Search' className='search'/>
                    </div>
                    <div className='Sign'>
                        <Link to='/registration' className='refs_for_specials'>Sigh up/Log in</Link>
                    </div>
                    <nav>
                        <Link to='/' className='ref'>Main</Link>
                        <Link to='/drinks' className='ref'>Drinks</Link>
                        <Link to='/cocktails' className='ref'>Cocktails</Link>
                        <Link to='/bars' className='ref'>Bars</Link>
                    </nav>
                </div>
            </header>
        )
    }
}