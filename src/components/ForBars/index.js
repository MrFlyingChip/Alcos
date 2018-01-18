import React, { Component } from 'react'

import './styles.css'

export default class BarsForm extends Component{
    render(){
        return(
            <div className='for-bars'>
                 <div className='for-bars-text-header'>
                    <h1> Bars' Form</h1>
                     <hr/>
                </div>

                <div className='for-bars-text'>
                <h3> Please, attach a file with the following information: </h3>
                <ul className="for-bars-list">
                    <li>The name of the bar( (full name, please));</li>
                    <li>director's name and surname;</li>
                    <li>the direct location of the bar;</li>
                    <li>the menu (optional);</li>
                    <li>the description of your bar (be carefull, this information will be published);</li>
                    <li>photo or scan of samples of quality passports (certificate of conformity);</li>
                    <li>photo or scan of the certificate for the sign for goods and services;</li>
                    <li>photo or scan of agents' passport.</li>
                </ul>
                </div>

                <div className='for-bars-form'>
                    <form>
                        <input type='email' placeholder='E-mail' className='input-text'/>
                        <input type='phone' placeholder='Phone' className='input-text'/>
                        <input type='file' placeholder='File' className='input-text'/>
                        <button type='submit' className='input-button'>Submit</button>
                    </form>
                </div>

                <h3> We will call you in 48 hours. Thanks!</h3>
                <div className='empty'></div>
            </div>
        )
    }
}