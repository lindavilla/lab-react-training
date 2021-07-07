import React from 'react';
import { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
        constructor (props) {
            super (props);
            this.state = {
                number : 0 
            }
        }

        addClick = () => {
            const { number } = this.state;
            this.setState({
                number : number +1
            })
        }
        render() {
        return (
            <div className="Like-Button">
                <button onClick = {this.addClick}>
                    {this.state.number} Likes
                </button>
            </div>
        )
    }
}

export default LikeButton;