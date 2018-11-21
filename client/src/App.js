import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './registration';

class App extends Component {
  state = {users: []}

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  render() {
    return (
      <Router>
        <div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
            </ul>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/registration" exact component={Registration}/>
          </div>
          {/* <div className="App">
            <h1>Users</h1>
            {this.state.users.map(user =>
              <div key={user.id}>{user.username}</div>
            )}
          </div> */}
        </div>
      </Router>
    );
  }
}

export default App;