import React, { Component } from 'react';
import Search from './Search.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import './style/YourSubreddits.css';

class YourSubreddits extends Component {
  constructor(props) {
  super(props);
  this.state = {
    yourSubreddits: []
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
    this.props.yourSubredditClick('News');
  }
  this.setState({
    yourSubreddits: this.state.yourSubreddits
  })
}


  render() {
    return (
      <MuiThemeProvider>
        <div className='yourSubredditsBox'>
          <h3 style={{textAlign: 'center', fontWeight: 'bold'}}>Your Subreddits</h3>
          <Search style={{margin: '20px'}} getSearchResult={this.props.getSearchResult} captureNewSubreddit={this.captureNewSubreddit}/>
          <div style={{margin: '20px'}}>
            <span className='yourSubreddits' onClick={this.props.yourSubredditClick.bind(this, 'News')}>News</span></div>
          {this.state.yourSubreddits.map((subreddit, index) =>
            <div key={index} style={{margin: '20px'}}>
              <span className='yourSubreddits' onClick={this.props.yourSubredditClick.bind(this, subreddit)}>{subreddit}</span><DeleteForever onClick={this.handleRemove.bind(this, subreddit)} style={{cursor: 'pointer', maxWidth: '5%'}} /></div>
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default YourSubreddits;
