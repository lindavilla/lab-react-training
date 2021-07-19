import React from 'react';
import { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    constructor(props){
        super (props)
        this.state = {
            email : this.props.email,
            password: this.props.password,
            nationality: this.props.nationality
        };
    }
    render(){
        return (        
            <div class="form">
            <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First Name</label>
                <input type="text" className="text-input" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="text-input" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="text-input" placeholder="Email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="text-input" placeholder="Password" />
            </div>
            <div className="form-group">
            Nationality 
            <select>
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
    
            </select>
            </div>
            <button type="submit" className="submit-button">Sign Up</button>
            <p className="logIn-button">
                Already registered? <a href="#">sign in</a>
            </p>
            
        </form>
    </div>
    );
}
}

export default SignUp;