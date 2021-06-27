import React from 'react';
import {Component} from 'react';
import './Greetings.css';


class Greetings extends Component {
    render(){
        const greeting = {
            de : 'Hallo',
            en: 'Hello',
            es: 'Hola',
            fr: 'Bonjour'

            }        
        return (
            <div className="Greeting-Box">
                <p>{greeting[this.props.lang]} {this.props.children}</p>
            </div>
        )
    }
}

export default Greetings;