import React, { Component } from 'react';
import Search from './Search.js';

class YourSubreddits extends Component {
  constructor(props) {
  super(props);
  this.state = {
    yourSubreddits: ['news']
  };
  this.captureNewSubreddit = this.captureNewSubreddit.bind(this);
}

captureNewSubreddit (subreddit) {
  this.state.yourSubreddits.push(subreddit);
}


  render() {
    return (
      <div style={{border: '1px solid gray', margin: '10px', minWidth: '35%', minLength: '100%'}}>
        Categories
        <Search getSearchResult={this.props.getSearchResult} captureNewSubreddit={this.captureNewSubreddit}/>
        {this.state.yourSubreddits.map((subreddit, index) =>
          <div key={index}> + {subreddit}</div>
        )}
      </div>
    );
  }
}

export default YourSubreddits;
