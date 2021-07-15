import React from 'react';
import { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
          image: 0
        }
    }
        handleClick(delta) {
            let count = this.props.imgs.length
            this.setState(initialState => ({
              image: (initialState.image + delta + count) % count
            }))
        }
    render(){
        let src = this.props.imgs[this.state.image]
        return (        
        <div>
            <button onClick={()=>this.handleClick(-1)}>Left</button>
        <img
          src={src}
          alt ="profile"
         />
        <button onClick={()=>this.handleClick(1)}>Right</button>
        </div>
        );
    }
}

export default Carousel;