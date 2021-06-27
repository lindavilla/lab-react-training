import React from 'react';
import { Component } from 'react';
import './IdCard.css';

class IdCard extends Component {
    render(props) {
        return (
        <div className="Id-Box">
        <img width='150px' height='150px' src={this.props.picture}/>
            <div className ="">
            <div className="Id-Stat">
            <b>Last Name </b><p>: {this.props.lastName}</p>
            </div>
            <div className ="Id-Stat">
            <b>First Name </b><p>: {this.props.firstName}</p>
            </div>
            <div className ="Id-Stat">
            <b>Gender </b><p>: {this.props.gender}</p>
            </div>
            <div className ="Id-Stat">
            <b>Height </b><p>: {this.props.height}</p>
            </div>
            <div className ="Id-Stat">
            <b>Birth </b><p>: {this.props.birth.toDateString()}</p>
            </div>
            
            </div>
        </div>
        )
    }
}

export default IdCard;
