import React, { Component } from 'react'
import Header from '../../components/Header'
import * as UserActions from "../../actions/UserActions";
import * as AlcosActions from "../../actions/AlcosActions";
import './styles.css'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

export class App extends Component{
    componentWillMount() {
        this.props.actions.fetchAllDrinks();
        this.props.actions.fetchAllCocktails();
        this.props.actions.fetchAllBars();
        this.props.actions.checkCookie();
    }
    render() {
        return(
            <div className='container'>
                <Header/>
                {this.props.children}
            </div>
        );
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
        actions: bindActionCreators({...UserActions, ...AlcosActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
