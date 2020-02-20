import React, { Component } from 'react';
import credentials from '../Config/auth.json';
import userData from '../Config/employeeData.json';
import { connect } from 'react-redux';
import { authorised, unAuthorised } from '../Store/Action';

class Auth extends Component {
    state = {
        email: "",
        password: "",
        error: ''
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user !== null && user.auth) {
            this.props.history.push('/dashboard');
        }
    }
    setInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    submitForm = (event) => {
        const { email, password } = this.state;
        event.preventDefault();
        if (email.trim().length || password.trim().length) {
            if (email === credentials.email && password === credentials.password) {
                this.props.authorised(userData);
                localStorage.setItem("user", JSON.stringify({ auth: true }));
                this.props.history.push("/dashboard");
            } else {
                this.setState({ error: "Invalid credentials" });
                this.props.unAuthorised();
                localStorage.removeItem("user");
            }
        } else {
            this.setState({ error: "Please enter email and password" });
        }
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="col-lg-5 m-auto">
                    <div className="card card-body shadow-sm">
                        <h3 className="text-center mb-3">Sign in</h3>
                        <form onSubmit={this.submitForm}>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.setInput}
                            />
                            <br />
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.setInput}
                                autoComplete=""
                            />
                            <br />
                            <button className="btn btn-sm btn-success btn-block" type="submit" >Login</button>
                        </form>
                        {
                            this.state.error && (
                                <div className="alert alert-danger mt-3 mb-0 text-center">
                                    <small>{this.state.error}</small>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { authorised, unAuthorised })(Auth);