import React, { Component } from 'react';
import Search from './Search.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';

class YourSubreddits extends Component {
  constructor(props) {
  super(props);
  this.state = {
    yourSubreddits: ['Dogs', 'Movies']
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
        <div style={{border: '1px solid gray', margin: '10px', minWidth: '35%', minLength: '100%', background: '#CDE3F6'}}>
          <div style={{marginBottom: '20px', fontWeight: 'bold'}}>Your Subreddits:</div>
          <Search style={{margin: '20px'}} getSearchResult={this.props.getSearchResult} captureNewSubreddit={this.captureNewSubreddit}/>
          <div style={{margin: '20px'}}>
            <span style={{cursor: 'pointer', color: '#2F6795', fontSize: '1.25em', textAlign: 'center'}} onClick={this.props.yourSubredditClick.bind(this, 'News')}>News</span></div>
          {this.state.yourSubreddits.map((subreddit, index) =>
            <div key={index} style={{margin: '20px'}}>
              <span style={{cursor: 'pointer', color: '#2F6795', fontSize: '1.25em', textAlign: 'center'}} onClick={this.props.yourSubredditClick.bind(this, subreddit)}>{subreddit}</span><DeleteForever onClick={this.handleRemove.bind(this, subreddit)} style={{cursor: 'pointer', float: '', maxWidth: '5%'}} /></div>
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default YourSubreddits;
