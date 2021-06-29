import React from 'react';
import { Component } from 'react';
import './DriverCard.css';
import Rating from '../Rating/Rating';

class DriverCard extends Component {
    render() {
        return (
            <div className="LicenseBox">
                <div className="Image">
                    <img src={this.props.img}></img>
                </div>
                <div>
                    <p>
                        {this.props.name}
                    </p>
                    <div>
                        <Rating>{this.props.rating}</Rating>
                    </div>
                    <p>
                        {this.props.car.model}
                        -
                        {this.props.car.licensePlate}
                    </p>
                </div>
            </div>
        )
    }
}

export default DriverCard;