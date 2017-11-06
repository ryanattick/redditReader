import React, { Component } from 'react';
import Search from './Search.js';

class YourSubreddits extends Component {
  constructor(props) {
  super(props);
  this.state = {
    yourSubreddits: ['news']
  };
  this.captureNewSubreddit = this.captureNewSubreddit.bind(this);
  this.handleRemove = this.handleRemove.bind(this);
}

captureNewSubreddit (subreddit) {
  this.state.yourSubreddits.push(subreddit);
}

handleRemove (subreddit) {
  // this.state.yourSubreddits.splice(index, 1);
  for (var i = 0; i < this.state.yourSubreddits.length; i++) {
    if (this.state.yourSubreddits[i] === subreddit) {
      this.state.yourSubreddits.splice(i, 1);
    }
  }
  this.setState({
    yourSubreddits: this.state.yourSubreddits
  })
}


  render() {
    return (
      <div style={{border: '1px solid gray', margin: '10px', minWidth: '35%', minLength: '100%'}}>
        Categories
        <Search getSearchResult={this.props.getSearchResult} captureNewSubreddit={this.captureNewSubreddit}/>
        {this.state.yourSubreddits.map((subreddit, index) =>
          <div key={index}> + {subreddit} <input type="submit" value="Remove" onClick={this.handleRemove.bind(this, subreddit)}/> </div>
        )}
      </div>
    );
  }
}

export default YourSubreddits;
