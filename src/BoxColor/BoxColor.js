import React from 'react';
import { Component } from 'react';
import './BoxColor.css';

class BoxColor extends Component {
    render(){
        const {r,g,b} = this.props;
        return(
            <div className="Color-Box" id='123' style = {{backgroundColor: `rgb(${r},${g},${b})`}}></div>
        )
    }
}

export default BoxColor;