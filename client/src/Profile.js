import React, { Component } from 'react';

class Profile extends Component {
  state = {data: []}

  componentDidMount() {
    fetch('/profile')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="Profilse">
        <h1>Profile Page</h1>
        {this.state.data.map(data =>
          <div key={data.id}>{data.content}</div>
        )}      </div>
    );
  }
}

export default Profile;