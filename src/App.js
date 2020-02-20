import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';
import { connect } from 'react-redux';
import { authorised, unAuthorised } from './Store/Action';
import userData from './Config/employeeData.json';

class App extends React.Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.auth) {
      this.props.authorised(userData);
    } else {
      this.props.unAuthorised();
      localStorage.removeItem("user");
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} isAuth={this.props.isAuth} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.authState
})

export default connect(mapStateToProps, { authorised, unAuthorised })(App);