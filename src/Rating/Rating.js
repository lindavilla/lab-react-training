import React from 'react';
import { Component } from 'react';
import './Rating.css';

class Rating extends Component {
    render(){
        const rating = this.props.children;
        var component;
        switch(true) {
            case rating < 0.5:
              component = <div className="Rating">☆ ☆ ☆ ☆ ☆</div>
              break;
            case rating < 1.5:
              component = <div className="Rating">★ ☆ ☆ ☆ ☆</div>
              break;
            case rating < 2.5:
              component = <div className="Rating">★ ★ ☆ ☆ ☆</div>
              break;
            case rating < 3.5:
              component = <div className="Rating">★ ★ ★ ☆ ☆</div>
              break;
            case rating < 4.5:
              component = <div className="Rating">★ ★ ★ ★ ☆</div>
              break;
            default:
              component = <div className="Rating">★ ★ ★ ★ ★</div>
              break;
          }
        return (<div className="Rating">{component}</div>)
    }
}

export default Rating;