import React, { Component } from 'react'
import { Link } from 'react-router'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as AlcosActions from "../../actions/AlcosActions";
import * as UserActions from "../../actions/UserActions";
//import './styles.css'

export class Cocktail extends Component{
    componentWillMount(){
        this.props.actions.fetchCocktailById(this.props.params.cocktail);
        this.props.actions.fetchAllComments(this.props.params.cocktail);
    }
    addToFavourites(e){
        e.preventDefault();
        const data = {
            type: 'cocktail',
            uid: this.props.user.uid,
            id: this.props.alcos.cocktail.id
        };
        //this.props.actions.addFavourites(data);
        this.props.actions.fetchCocktailById(this.props.params.cocktail);
        this.props.actions.fetchAllComments(this.props.params.cocktail);
    }
    sendComment(e){
        e.preventDefault();
        const rating = parseInt(document.getElementById('rating').value);
        const comment = document.getElementById('comment1').value;
        const data = {
            type: 'cocktails',
            id: this.props.alcos.cocktail.id,
            rate: rating,
            comment: comment
        };
        this.props.actions.addNewComment(data);
        this.props.actions.fetchCocktailById(this.props.params.cocktail);
        this.props.actions.fetchAllComments(this.props.params.cocktail);
    }
    render(){
        const drink = this.props.alcos.cocktail;
        const comments = this.props.alcos.comments || [];
        const commentDiv = comments.map(el => {
            this.props.actions.fetchUserById(el.user);
            var user = this.props.user;
            return (
                <div className={'comment'} key={el.id}>
                    <div className={'comment-title'}>
                        <div style={{'backgroundImage': `url(${user.img})`}} className={'comment-img'}></div>
                        <div className={'nickname'}><p>{user.name}</p></div>
                        <div className={'time'}><p>{el.date}</p></div>
                        <div className={'rate'}><p>{el.rate}/5</p></div>
                    </div>
                    <div className={'comment-text'}><p>{el.text}</p></div>
                </div>
            )
        });
        return(
            <div className='drink-cont'>
                <p className={'drinkName'}>{drink.name}</p>
                <hr/>
                <div className={'drinkPhoto'} style={{'backgroundImage': `url(${drink.imageUrl})`}}>
                </div>
                <div className={'drink-text'}>
                    <p>Name: {drink.name}</p>
                    <p>Rating: {drink.rating}/5</p>
                    {(this.props.user.isAuthenticated) ? <p><Link onClick={this.addToFavourites.bind(this)}>To favourites.</Link></p>
                        : <p><Link to={'/registration'}>Log in</Link> to add to favourites.</p>}
                </div>
                <h2>
                    Description of {drink.name}:
                </h2>
                <hr/>
                <div className={'description'}>
                    <p>{drink.description}</p>
                </div>
                {(comments.length === 0) ?
                    <h2>There is no comments for {drink.name}.</h2>
                    : <h2>Comments for {drink.name}:</h2>}
                <hr/>
                <div className={'comments'}>
                    {commentDiv}
                </div>
                <div className='about-form'>
                    <form onSubmit={this.sendComment.bind(this)}>
                        <input id='rating' type='number' min={0} max={5} placeholder='Rating' className='input-rating'/>
                        <textarea maxLength={1000} rows="10" cols="45" id='comment1' placeholder='Comment' className='large-input-comment'></textarea>
                        <button type='submit' className='input-button'>Send comment</button>
                    </form>
                </div>
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
        actions: bindActionCreators({...AlcosActions, ...UserActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cocktail)