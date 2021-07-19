import React from 'react';
import { Component } from 'react';
import './Facebook.css';
import profiles from '../data/berlin.json'

class Facebook extends Component {
    constructor(props){
        super (props);
        this.state = {
            person : this.props
        };
    }
    render(){
        const { person } = this.state;
        return (        
            <div className="card">
                <div>
                    First Name : 
                    <b>{person.firstName}</b>
                </div>
                <div>
                    Last Name : 
                    <b>{person.lastName}</b>
                </div>
                <div>
                    Country : 
                    <b>{person.country}</b>
                </div>
                <div>
                    Type : 
                    <b>{person.isStudent === true ? 'Student' : 'Teacher'}</b>
                </div>
            </div>
        )
    }
}

export default Facebook;

//couldn't get the props to show, except for Type. 