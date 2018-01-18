import React, { Component } from 'react'
import { Link } from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as UserActions from "../../actions/UserActions";

import './styles.css'
export class Header extends Component{
    onLogOutClick(e){
        e.preventDefault();
        this.props.actions.logout();
    }
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
                        {this.props.user.isAuthenticated
                            ?
                            <div className='Sign'>
                                {(this.props.user.role === 'admin') ?
                                    <Link to='/admin' className='refs_for_specials'>Admin</Link>
                                    : <Link to='/account' className='refs_for_specials'>My account</Link>
                                }
                                /<Link onClick={this.onLogOutClick.bind(this)} className='refs_for_specials'>Log out</Link>
                            </div>
                            :
                            <div className='Sign'>
                            <Link to='/registration' className='refs_for_specials'>Sigh up/Log in</Link>
                            </div>
                        }
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

function mapStateToProps(state) {
    return {
        user: state.user,
        alcos: state.alcos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)