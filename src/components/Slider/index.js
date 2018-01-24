import React, {Component} from 'react';
import '../Slider/styles.css';
import {Link} from 'react-router'

export default class Slider extends Component {
    render() {
        const drinks = this.props.drinks || [];
        const drinksRow = drinks.map((el, i) => {
            if (i > 4) {
                return;
            }
            return (

                <div className='block--slider-book' key={el.name} style={{'backgroundImage': `url(${el['imageUrl']})`}}>
                    <div className='block--slider-book-hover'>
                        <span>{el.name}</span>
                        <span><img src='images/star.png' alt='' id="star"/>{el.rating}/5</span>
                        <span><img src="images/comment.png" id="comment"/> {el.votes}</span>
                        <Link to={'/drinks/' + el.id}>no</Link>
                    </div>
                </div>

            )
        });
        return (
            <div className='block--slider'>
                <h2>{this.props.title}</h2>
                <div className='block--slider-wrapper'>
                    <div className='block--slider-books'>
                        {drinksRow}
                    </div>
                </div>
            </div>
        )
    }
}
