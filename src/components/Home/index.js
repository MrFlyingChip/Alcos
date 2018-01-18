import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import '../Home/style.css'
import Slider from '../Slider'
import * as libraryActions from '../../actions/LibraryActions'
import PropTypes from 'prop-types'

class Home extends Component {
    parseIt() {
        const {simpleBooks} = this.props.libraryActions;
        simpleBooks();
    }

    render() {
        let drinks = [];
        for (let drink in this.props.app.drinks) {
            drinks.push(this.props.app.drinks[drink]);
        }

        return (
            <div className='block--home'>
                <div className="block--home-parallax" style={{'backgroundImage': "url(images/books-shelve.jpeg)"}}>
                    <h1>Welcome to our Books Shelve!</h1>
                    <p>Just relax and enjoy your time.</p>
                </div>
                {/*<div className='row'>
          <button className="parse" onClick={this.parseIt.bind(this)}>Parse It!</button>
        </div>*/}
                <Slider drinks={drinks} title={'Top 20 Books'}/>
                <div className="block--home-parallax" style={{'backgroundImage': "url(images/old-but-gold.jpg)"}}>
                    <h1>All you need is book!</h1>
                    <p>Best gift. Best pastime. Best teacher.</p>
                </div>
                <Slider drinks={drinks} title={'Old but Gold'}/>
                <div className="block--home-steps">
                    <h2> Only 4 steps to update your life.</h2>
                    <div className="block--home-step">
                        <img src={'images/welcome.jpeg'} alt={''}/>
                        <div className="block--home-step-content">
                            <h3>Step 1 - Sign Up</h3>
                            <p>Just a little bit separate you from spend all your time with books anywhere and anytime.</p>
                        </div>
                    </div>
                    <div className="block--home-step">
                        <div className="block--home-step-content">
                            <h3>Step 2 - Search</h3>
                            <p>Just a little bit separate you from spend all your time with books anywhere and anytime.</p>
                        </div>
                        <img src={'images/search.jpg'} alt={''}/>
                    </div>
                    <div className="block--home-step">
                        <img src={'images/buy.jpg'} alt={''}/>
                        <div className="block--home-step-content">
                            <h3>Step 3 - Buy</h3>
                            <p>Just a little bit separate you from spend all your time with books anywhere and anytime.</p>
                        </div>
                    </div>
                    <div className="block--home-step">
                        <div className="block--home-step-content">
                            <h3>Step 4 - Download</h3>
                            <p>Just a little bit separate you from spend all your time with books anywhere and anytime.</p>
                        </div>
                        <img src={'images/download.jpeg'} alt={''}/>
                    </div>
                    <a href="/sign-up">Let`s go!</a>
                </div>
                <div className="block--home-parallax" style={{'backgroundImage': "url(images/watch.jpg)"}}>
                    <h1>It`s amazing!</h1>
                    <p>We sure, now best time to start reading.</p>
                </div>
                <Slider drinks={drinks} title={'New books'}/>
                <div className="block--home-conclusion">
                    <h2>We hope, that you enjoy our service</h2>
                    <h3>You always can <a href={''}>toast</a> us!</h3>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        libraryActions: bindActionCreators(libraryActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
