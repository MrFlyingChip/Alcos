import React, { Component } from 'react'
import * as UserActions from "../../actions/UserActions";
//import Slider from '../Slider'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from 'react-router'
import './styles.css'

export class Account extends Component{
    componentWillMount() {
        this.props.actions.fetchUser();
    }
//<Slider drinks={books} title={'Favourite drinks'}/>
//<Slider drinks={books} title={'Favourite cocktails'}/>
//<Slider drinks={books} title={'Favourite bars'}/>
    render(){
        return(
            <div className='account'>
                <p className={'myAccount'}>My account</p>
                <hr/>
                <Link>
                <div className={'photoHolder'} style={{'backgroundImage': `url(${this.props.user.img})`}}>

                </div>
                </Link>

                <div className={'account-text'}>
                    <p>Login: {this.props.user.name} <Link>[change login]</Link></p>
                    <p>Email: {this.props.user.email} <Link>[change email]</Link></p>
                    <p><Link>[change password]</Link></p>
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
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)