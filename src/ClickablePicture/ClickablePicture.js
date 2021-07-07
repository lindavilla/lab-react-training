import React from 'react';
import { Component } from 'react';
import './ClickablePicture.css';

class ClickablePicture extends Component {
    constructor(props) {
    super(props)
    this.state = {
        isClicked : false
    }
    this.isClicked = this.isClicked.bind(this)
    }

    isClicked () {
        this.setState(formerState => ({
            isClicked: !formerState.isClicked
          }))
    }

    render(){
        return (
            <img onClick = {this.isClicked} className="picture"
             src={this.state.isClicked ? this.props.imgClicked : this.props.img}>
            </img>
        )
    } 
}

export default ClickablePicture;