import React, { Component } from 'react'

import './styles.scss'

export default class Registration extends Component{
    render(){
        return(
            <div className='registration'>
                <div className='registration-text'>
                    <p>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefwefwefwefwefwefwe</p>
                </div>

                <div className='registration-forms'>
                    <form>
                        <input type='text' placeholder='Login' className='input-text'/>
                        <input type='password' placeholder='Password' className='input-text'/>
                        <p><input type='checkbox' value='remember'/>Remember me</p>
                        <button type='submit' className='input-button'>Log in</button>
                    </form>

                    <form>
                        <input type='email' placeholder='E-mail' className='input-text'/>
                        <input type='text' placeholder='Login' className='input-text'/>
                        <input type='password' placeholder='Password' className='input-text'/>
                        <button type='submit' className='input-button'>Sigh up</button>
                    </form>
                </div>
                <div className='empty'></div>
            </div>
        )
    }
}