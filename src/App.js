import React, { Component } from 'react';
import $ from 'jquery';
import EachEntry from './EachEntry.js';
import YourSubreddits from './YourSubreddits.js';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    redditData: [],
    subreddit: ''
  };
  this.getSearchResult = this.getSearchResult.bind(this);
}

componentWillMount () {
  this.setState({
    subreddit: 'news'
  },
    () => {$.get(`https://www.reddit.com/r/${this.state.subreddit}.json`, (data) => {
      this.setState({
        redditData: data.data.children
      })
    })}
  )
}

getSearchResult (result) {
  this.setState({
    subreddit: result
  },
    () => {$.get(`https://www.reddit.com/r/${this.state.subreddit}.json`, (data) => {
      this.setState({
        redditData: data.data.children
      })
    })}
  )
}


  render() {
    return (
      <div>
          <h1 style={{textAlign: 'center'}}>Reddit Reader</h1>
          <h3 style={{marginLeft: '20px'}}> Current Subreddit: {this.state.subreddit}</h3>
          <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center', alignContent: 'stretch', alignItems: 'flex-start'}}>
            <div style={{maxWidth: '70%'}}> {this.state.redditData.map((article, index) =>
              <EachEntry key={index} article={article}/>
            )}
          </div>
          <YourSubreddits getSearchResult={this.getSearchResult} />
        </div>
      </div>
    );
  }
}

export default App;
