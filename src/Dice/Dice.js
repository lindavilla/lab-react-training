import React from 'react';
import { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    constructor(props){
        super (props)
        this.state = {
            value: this.randomNumber()
        }
        this.handleClick = this.handleClick.bind(this)
    }
    randomNumber() {
        return 1 + Math.floor(6*Math.random())
    }
    handleClick() {
        if (this.state.value) {
          this.setState(initialState => ({
            value: null
          }))
          setTimeout(() => {
            this.setState(initialState => ({
              value: this.randomNumber()
            }))
          }, 1000)
        }
      }
      render() {
        let src; 
        if (this.state.value)   
          src = `/img/dice${this.state.value}.png`
        else 
          src = `/img/dice-empty.png`
        return (
          <img 
            className="Dice" 
            onClick={this.handleClick}
            src={src} 
            
        />
        );
      }
    }

export default Dice;