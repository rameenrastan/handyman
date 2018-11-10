import React, { Component } from 'react';

class JobPostings extends Component {
  state = {postings: []}

  componentDidMount() {
    fetch('/postings')
      .then(res => res.json())
      .then(postings => this.setState({ postings }));
  }

  render() {
    return (
      <div className="JobPostings">
        <h1>List of job postings</h1>
        {this.state.postings.map(posting =>
          <div key={posting.post_id}>{posting.title}  --> {posting.name} --> {posting.date} --> {posting.address}</div>
        )}
      </div>
    );
  }
}

export default JobPostings;