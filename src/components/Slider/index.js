import React, {Component} from 'react';
import '../Slider/styles.css';
import {Link} from 'react-router'

export default class Slider extends Component {
    render() {
        const drinks = this.props.drinks || [];
        console.log(drinks);
        const drinksRow = drinks.map((el, i) => {
            if (i > 4) {
                return;
            }
            return (
                <div className='block--slider-book' key={el.name} style={{'backgroundImage': `url(${el['thumbnailLink']})`}}>
                    <div className='block--slider-book-hover'>
                        <span>{el.name}</span>
                        <Link to={'/drinks/' + el.id}>More</Link>
                    </div>
                </div>
            )
        });
        return (
            <div className='block--slider'>
                <h1>{this.props.title}</h1>
                <div className='block--slider-wrapper'>
                    <div className='block--slider-books'>
                        {drinksRow}
                    </div>
                </div>
            </div>
        )
    }
}
