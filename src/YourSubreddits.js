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
  subreddit = subreddit.replace(/\w\S*/g, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
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
      <div style={{border: '1px solid gray', margin: '10px', minWidth: '35%', minLength: '100%', background: '#CDE3F6'}}>
        <span style={{marginBottom: '20px', fontWeight: 'bold'}}>Your Subreddits:</span>
        <Search style={{margin: '20px'}} getSearchResult={this.props.getSearchResult} captureNewSubreddit={this.captureNewSubreddit}/>
        {this.state.yourSubreddits.map((subreddit, index) =>
          <div key={index} style={{margin: '20px'}}>
            <div style={{cursor: 'pointer', color: '#2F6795', fontSize: '1.25em', textAlign: 'center'}} onClick={this.props.yourSubredditClick.bind(this, subreddit)}>{subreddit}</div><input type="submit" value="Remove" style={{cursor: 'pointer', margin: 'auto'}} onClick={this.handleRemove.bind(this, subreddit)}/></div>
        )}
      </div>
    );
  }
}

export default YourSubreddits;
