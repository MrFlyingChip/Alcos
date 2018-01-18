import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '../../actions/UserActions';
import './styles.css'

export class Registration extends Component{
    handleSubmitLogin(e) {
        e.preventDefault();
        const email = document.getElementById('email-login').value;
        const password = document.getElementById('password-login').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        const data = {
            email: email,
            password:password
        };
        this.props.actions.login(data);
    }
    handleSubmitSignUp(e) {
        e.preventDefault();
        const email = document.getElementById('email-reg').value;
        const password = document.getElementById('password-reg').value;
        const nickname = document.getElementById('nickname-reg').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        if (nickname.length < 4) {
            alert('Please enter a nickname.');
            return;
        }
        const data = {
            name: nickname,
            email: email,
            password:password
        };
        this.props.actions.signup(data);
    }

    render(){
        return(
            <div className='registration'>
                <div className='registration-text'>
                    <p className='text'>If you have an account, log in with your nickname and password.</p>
                    <p className='text'>You can create an account for free.
                        Join to the big family of true connoisseurs of alcohol!</p>
                </div>

                <div className='registration-forms'>
                    <form onSubmit={this.handleSubmitLogin.bind(this)}>
                        <input id={'email-login'} type='email' placeholder='Email' className='input-text'/>
                        <input id={'password-login'} type='password' placeholder='Password' className='input-text'/>
                        <p><input type='checkbox' value='remember'/>Remember me</p>
                        <button type='submit' className='input-button'>Log in</button>
                    </form>

                    <form onSubmit={this.handleSubmitSignUp.bind(this)}>
                        <input  id={'email-reg'} type='email' placeholder='E-mail' className='input-text'/>
                        <input id={'nickname-reg'} type='text' placeholder='Login' className='input-text'/>
                        <input id={'password-reg'} type='password' placeholder='Password' className='input-text'/>
                        <button type='submit' className='input-button'>Sigh up</button>
                    </form>
                </div>
                <div className='empty'></div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration)