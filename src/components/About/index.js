import React, { Component } from 'react'
import { Link } from 'react-router'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as FormActions from "../../actions/FormActions";
import './styles.css'

export class About extends Component{
    sendRespond(e){
        e.preventDefault();
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const respond = document.getElementById('respond').value;
        const data = {
          email: email,
          name: name,
          respond: respond
        };
        this.props.actions.addNewRespond(data);
    }

    render(){
        return(
            <div className='about'>
                <div className='about-text-header'>
                    <h1> About us </h1>
                    <hr/>
                </div>
                <div className='about-text'>
                    <p>We are an independent group of enthusiasts who just want to make our life easier.
                    Because there are a lot of resources with different information about drinks, cocktails, bars,
                    but all of it is separated. So we decided to unite all pieces together
                    and create a resource where you can find whatever you want connecting with alcohol. </p>
                    <p>And, the most important part is that we are going to use it by ourselves, it is the main idea, 
                    so you can expect the highest quality and the most atmospheric platform.</p>
                    <p>If you want to leave a response or to join our team, or, maybe, 
                    you have an interesting offer, you can fill the form below or send the email to alcos@mt2015.com.</p>
                    <p> If you want to add your drinks to our base, please, click 
                            <Link to='/for_manufacturers' className='refs_for_specials'>here</Link>
                            and if you want to add your bar, please, fill the form 
                            <Link to='/for_bars' className='refs_for_specials'>here</Link>. 
                    </p>
                </div>

                <div className='about-form'>
                    <form onSubmit={this.sendRespond.bind(this)}>
                        <input id='email' type='email' placeholder='E-mail' className='input-text'/>
                        <input id='name' type='text' placeholder='Name' className='input-text'/>
                        <textarea maxLength={1000} rows="10" cols="45" id='respond' placeholder='Respond' className='large-input-text'></textarea>
                       
                        <button type='submit' className='input-button'>Send</button>
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
        actions: bindActionCreators(FormActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)