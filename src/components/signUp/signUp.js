import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signUpWatcher } from '../../actions/signUpActions';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            birthdayDate: '',
            password: ''
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        let payload = this.state;
        this.props.signUpWatcher(payload);
    }

    emailHandler = (e) => {
        this.setState({
            email: e.currentTarget.value
        });
    }

    firstNameHandler = (e) => {
        this.setState({
            firstName: e.currentTarget.value
        });
    }

    lastNameHandler = (e) => {
        this.setState({
            lastName: e.currentTarget.value
        });
    }

    birthdayDateHandler = (e) => {
        this.setState({
            birthdayDate: e.currentTarget.value
        });
    }

    passwordHandler = (e) => {
        this.setState({
            password: e.currentTarget.value
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Email
                    <input type='email' name='email' onChange={this.emailHandler}></input>
                </label>
                <label>First Name
                    <input type='text' name='firstName' onChange={this.firstNameHandler}></input>
                </label>
                <label>Last Name
                    <input type='text' name='lastName' onChange={this.lastNameHandler}></input>
                </label>
                <label>Birthday Date
                    <input type='text' name='birthdayDate' onChange={this.birthdayDateHandler}></input>
                </label>
                <label>Password
                    <input type='password' name='password' onChange={this.passwordHandler}></input>
                </label>
                <button type='submit'>Submit</button>
            </form >
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signUpWatcher
    }, dispatch);
};

const mapStateToProps = ({signUpReducer}) => ({
    message: signUpReducer.message,
    data: signUpReducer.data,
    userId: signUpReducer.userId
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);