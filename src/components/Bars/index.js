import React, { Component } from 'react'
import { Link } from 'react-router'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as AlcosActions from "../../actions/AlcosActions";
import './styles.css'

export class Bars extends Component{
    componentWillMount(){
        const {bars} = this.props.alcos;
        if(bars < 1){
            this.props.actions.fetchAllBars();
        }

    }
    render(){
        const bars = this.props.alcos.bars || [];
        const barsRow = bars.map(el => {
            return (
                <Link to={'bars/' + el.id}><div className="box">
                    <p>
                        <img src={el.photo}/>
                    </p>
                    <p>{el.name}</p>
                    <p><img src="images/star.png" id="star"/>{el.rating}/5</p>
                    <p><img src="images/comment.png" id="comment"/> {el.votes}</p>
                </div></Link>
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
                        <p>
                            <input type="checkbox" name="acc" type="radio"/>
                                <label>фильтр</label>
                        </p>
                    </aside>
                    <div className="grid">
                        {barsRow}
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

export default connect(mapStateToProps, mapDispatchToProps)(Bars)