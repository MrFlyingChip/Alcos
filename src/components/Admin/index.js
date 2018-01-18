import React, {Component} from 'react';
import '../Admin/styles.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as AdminActions from "../../actions/AdminActions";

export class Admin extends Component {
    addDrink(e){
        e.preventDefault();
        const name = document.getElementById('drink-name').value;
        const description = document.getElementById('drink-description').value;
        const maker = document.getElementById('drink-maker').value;
        const country = document.getElementById('drink-country').value;
        const kind = document.getElementById('drink-kind').value;
        const image = document.getElementById('drink-image').files[0];
        const data = {
            name: name,
            description: description,
            maker: maker,
            country: country,
            kind: kind,
            image: image
        };
        this.props.actions.addNewDrink(data);
    }

    addCocktail(e){
        e.preventDefault();
        const name = document.getElementById('cocktail-name').value;
        const description = document.getElementById('cocktail-description').value;
        const receipt = document.getElementById('cocktail-receipt').value;
        const image = document.getElementById('cocktail-image').files[0];
        const data = {
            name: name,
            description: description,
            receipt: receipt,
            image: image
        };
        this.props.actions.addNewCocktail(data);
    }

    addBar(e){
        e.preventDefault();
        const name = document.getElementById('bar-name').value;
        const description = document.getElementById('bar-description').value;
        const phone = document.getElementById('bar-phone').value;
        const address = document.getElementById('bar-address').value;
        const averageCheckPrice = parseInt(document.getElementById('bar-averageCheckPrice').value);
        const image = document.getElementById('bar-image').files[0];
        const workingHours = document.getElementById('bar-workingHours').value;
        const lat = parseFloat(document.getElementById('bar-lat').value);
        const lng = parseFloat(document.getElementById('bar-lng').value);
        const data = {
            name: name,
            description: description,
            phone: phone,
            address: address,
            averageCheckPrice: averageCheckPrice,
            image: image,
            workingHours: workingHours,
            lat: lat,
            lng: lng
        };
        this.props.actions.addNewBar(data);
    }
    render(){
        return(
            <div className={'admin'}>
                <form className={'input-forms'} name='addDrink' onSubmit={this.addDrink.bind(this)}>
                    <h2 className=''>Add new drink</h2>
                        <input id="drink-name" placeholder={'Drink name'} required type={'text'} className="input-text"/>
                        <textarea id="drink-description" required placeholder={'Drink description'} className="input-text"/>
                        <input id="drink-maker" placeholder={'Drink maker'} required className="input-text"/>
                        <input id="drink-country" placeholder={'Drink country'} required className="input-text"/>
                        <input id="drink-kind" placeholder={'Drink kind'} required className="input-text"/>
                        <input id="drink-image" type='file' required placeholder={'File'} accept='.jpg'
                                                 className="input-text"/>
                    <button className={'input-button'} type='submit'>Done</button>
                </form>

                <form className={'input-forms'} name='addCocktail' onSubmit={this.addCocktail.bind(this)}>
                    <h2 className=''>Add new cocktail</h2>
                    <input id="cocktail-name" placeholder={'Cocktail name'} required type={'text'} className="input-text"/>
                    <textarea id="cocktail-description" required placeholder={'Cocktail description'} className="input-text"/>
                    <input id="cocktail-receipt" placeholder={'Cocktail receipt'} required className="input-text"/>
                    <input id="cocktail-image" type='file' required placeholder={'File'} accept='.jpg'
                           className="input-text"/>
                    <button className={'input-button'} type='submit'>Done</button>
                </form>

                <form className={'input-forms'} name='addBar' onSubmit={this.addBar.bind(this)}>
                    <h2 className=''>Add new bar</h2>
                    <input id="bar-name" placeholder={'Bar name'} required type={'text'} className="input-text"/>
                    <textarea id="bar-description" required placeholder={'Bar description'} className="input-text"/>
                    <input id="bar-phone" type={'tel'} placeholder={'Bar phone'} required className="input-text"/>
                    <input id="bar-address" placeholder={'Bar address'} required  className="input-text"/>
                    <input id="bar-averageCheckPrice" placeholder={'Bar averageCheckPrice'} type={'number'} required className="input-text"/>
                    <input id="bar-workingHours" placeholder={'Bar workingHours'} required className="input-text"/>
                    <input id="bar-lat" placeholder={'Bar lat'} required type={'number'} step="0.0001" className="input-text"/>
                    <input id="bar-lng" placeholder={'Bar lng'} required type={'number'} step="0.0001" className="input-text"/>
                    <input id="bar-image" type='file' required placeholder={'File'} accept='.jpg'
                           className="input-text"/>
                    <button className={'input-button'} type='submit'>Done</button>
                </form>
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
        actions: bindActionCreators(AdminActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)