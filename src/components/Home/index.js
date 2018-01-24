import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import '../Home/styles.css'
import Slider from '../Slider'
import {Link} from 'react-router'
import * as AlcosActions from '../../actions/AlcosActions'

class Home extends Component {
    componentWillMount(){
        this.props.actions.fetchAllDrinks();
        this.props.actions.fetchAllCocktails();
    }
    render() {
        const drinks = this.props.alcos.drinks || [];
        const cocktails = this.props.alcos.cocktails || [];
        return (
            <div className='home'>
                <h2>Welcome to Alcos!</h2>
                <p>Don`t know what to drink? Or you want to hang out somewhere?</p>
                <p>You are at the right place!</p>
                <p><Link to={'/registration'}>Log in/Sign in</Link> to add favourites drinks and bars!</p>
                {/*<Link to={'/drinks'}>
                    <div>
                        <span>Drinks</span>
                    </div>
                </Link>*/}
                <p>Choose only best drinks!</p>
                <Slider drinks={drinks} title={'Best drinks'}/>
                <Slider drinks={cocktails} title={'Best cocktails!'}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
