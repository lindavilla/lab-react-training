import React from 'react';
import { Component } from 'react';
import './CreditCard.css';

class CreditCard extends Component {
    render(){
        return(
    <div className="CreditCard-Box" style={{ backgroundColor: this.props.bgColor,
        color: this.props.color}}>
        <div className="Info">
        <div className="Type">
            <div>{this.props.type}</div>
        </div>
        <div className="Number">
            <div>···· ···· ···· {this.props.number.substr(-4)}</div>
        </div>
        <div className="Bank">
           <div> Expires {('0'+this.props.expirationMonth).substr(-2)}/{this.props.expirationYear.toString().substr(2)}</div> 
           <div className="Bank-Text">{this.props.bank}</div>
        </div>
        <div className="Owner">
            <p>{this.props.owner}</p>
        </div>
</div>
    </div>
        )
    }
}

export default CreditCard;