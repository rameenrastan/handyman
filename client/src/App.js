import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from '/client/src/Home';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="App">
          <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
        </div>
        <Route path="/" exact component={Home}/>
      </Router>
    );
  }
}

export default App;