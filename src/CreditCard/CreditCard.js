import React from 'react';
import { Component } from 'react';
import './CreditCard.css';

class CreditCard extends Component {
    render(){
        return(
    <div className="CreditCard-Box" style={{ backgroundColor: this.props.bgColor,
        color: this.props.color}}>
        <div>
            <p>{this.props.type}</p>
        </div>
        <div>
            <p>···· ···· ···· {this.props.number.substr(-4)}</p>
        </div>
        <div>
           <p> Expires {('0'+this.props.expirationMonth).substr(-2)}/{this.props.expirationYear.toString().substr(2)} </p>
           <p>{this.props.bank}</p>
        </div>
        <div>
            <p>{this.props.owner}</p>
        </div>

    </div>
        )
    }
}

export default CreditCard;