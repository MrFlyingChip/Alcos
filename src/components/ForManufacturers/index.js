import React, { Component } from 'react'

import './styles.css'

export default class ManufacturersForm extends Component{
    render(){
        return(
            <div className='for-manufacturers'>
                 <div className='for-manufacturers-text-header'>
                    <h1> Manufacturers' Form</h1>
                     <hr/>
                </div>

                <div className='for-manufacturers-text'>
                <h3> Please, attach a file with the following information: </h3>
                <ul className="for-manufacturers-list">
                    <li>The name of the company you represent;</li>
                    <li>director's name and surname;</li>
                    <li>the description of your company (be carefull, this information will be published);</li>
                    <li>photo or scan of samples of quality passports (certificate of conformity);</li>
                    <li>photo or scan of the certificate for the sign for goods and services;</li>
                    <li>photo or scan of agents' passport;</li>
                    <li>list of products you want to add.</li>
                </ul>
                </div>

                <div className='for-manufacturers-form'>
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