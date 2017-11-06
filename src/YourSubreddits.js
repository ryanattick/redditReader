import React, { Component } from 'react';
import Search from './Search.js';

class YourSubreddits extends Component {
  constructor(props) {
  super(props);
  this.state = {
    yourSubreddits: ['News', 'Dogs', 'Movies']
  };
  this.captureNewSubreddit = this.captureNewSubreddit.bind(this);
  this.handleRemove = this.handleRemove.bind(this);
}

captureNewSubreddit (subreddit) {
  subreddit = subreddit.charAt(0).toUpperCase() + subreddit.slice(1);
  this.state.yourSubreddits.push(subreddit);
}

handleRemove (subreddit) {
  for (var i = 0; i < this.state.yourSubreddits.length; i++) {
    if (this.state.yourSubreddits[i] === subreddit) {
      this.state.yourSubreddits.splice(i, 1);
    }
    this.props.yourSubredditClick('news');
  }
  this.setState({
    yourSubreddits: this.state.yourSubreddits
  })
}


  render() {
    return (
      <div style={{border: '1px solid gray', margin: '10px', minWidth: '35%', minLength: '100%'}}>
        <span style={{marginBottom: '20px', fontWeight: 'bold'}}>Your Subreddits:</span><br/>
        <Search style={{margin: '20px'}} getSearchResult={this.props.getSearchResult} captureNewSubreddit={this.captureNewSubreddit}/>
        {this.state.yourSubreddits.map((subreddit, index) =>
          <div style={{margin: '20px'}}>
            <div key={index} onClick={this.props.yourSubredditClick.bind(this, subreddit)}> + {subreddit}</div><input type="submit" value="Remove" onClick={this.handleRemove.bind(this, subreddit)}/>
          </div>
        )}
      </div>
    );
  }
}

export default YourSubreddits;
