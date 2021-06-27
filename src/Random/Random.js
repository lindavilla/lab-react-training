import React from 'react';
import {Component} from 'react';
import './Random.css';

class Random extends Component {
    render(){
        const min = this.props.min
        const max = this.props.max
        const randomNumber = min + Math.floor(Math.random() * (max-min + 1))

        return (
            <div className="Random-Box">
             Random number between {this.props.min} and {this.props.max} is {randomNumber}
            </div>
        )
    }
}


export default Random;