import React, { Component } from 'react'
import { Link } from 'react-router'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as AlcosActions from "../../actions/AlcosActions";
import './styles.css'

export class Drinks extends Component{
    componentWillMount(){
        this.props.actions.fetchAllTypes();
        this.props.actions.fetchAllDrinks();
    }
    render(){
        const drinks = this.props.alcos.drinks || [];
        const types = this.props.alcos.typesDrinks || [];
        const drinksRow = drinks.map(el => {
            return (
                <Link to={'/drinks/' + el.id} key={el.name}><div className="box">
                    <p>
                        <img src={el.imageUrl}/>
                    </p>
                    <p>{el.name}</p>
                    <p><img src='images/star.png' alt='' id="star"/>{el.rating}/5</p>
                    <p><img src="images/comment.png" id="comment"/> {el.votes}</p>
                </div></Link>
            )
        });
        const drinkTypes = types.map(el => {
            return(
                    <p className={'filter'} key={el.type}><input type="checkbox" name="filter" value={el.type}/>{el.type}</p>
                )
        });
        return(
            <div className={'drinks'}>
                <div className="sortbar">
                    <div>
                        <p>Sort by:
                            <select name="otv" size="1">
                                <option value="1">No sorting</option>
                                <option value="2">For rating</option>
                                <option value="3">For comments</option>
                            </select>
                        </p>
                    </div>
                </div>
                <div id="container">
                    <aside>
                        <p>Filter by drink type:</p>
                        {drinkTypes}
                    </aside>
                    <div className="grid">
                        {drinksRow}
                    </div>
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
        actions: bindActionCreators(AlcosActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drinks)