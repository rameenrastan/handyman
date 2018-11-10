import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Users from './Users';
import JobPostings from './JobPostings';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/profile" component={ Profile }/>
        <Route exact path="/users" component={ Users }/>
        <Route exact path="/postings" component={ JobPostings }/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/postings">Job Postings</Link>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;