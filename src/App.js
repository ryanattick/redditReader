import React, { Component } from 'react';
import $ from 'jquery';
import EachEntry from './EachEntry.js';
import YourSubreddits from './YourSubreddits.js';
import './style/App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    redditData: [],
    subreddit: '',
    pageNotFound: false
  };
  this.getSearchResult = this.getSearchResult.bind(this);
  this.yourSubredditClick = this.yourSubredditClick.bind(this);
}

componentWillMount () {
  this.setState({
    subreddit: 'News'
  },
    () => {$.get(`https://www.reddit.com/r/${this.state.subreddit}.json`, (data) => {
      this.setState({
        redditData: data.data.children
      })
    })}
  )
}

getSearchResult (result) {
  result = result.replace(/\w\S*/g, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
  this.setState({
    subreddit: result
  },
    () => {$.get(`https://www.reddit.com/r/${this.state.subreddit}.json`, (data) => {
        this.setState({
          redditData: data.data.children,
          pageNotFound: false
        })
    }).fail(() => {
      this.setState({
        pageNotFound: true
      })
      //delete the last entry from your subreddit list and then pass the list down
    })
  })
}

yourSubredditClick (subreddit) {
  this.setState({
    subreddit: subreddit
  },
    () => {$.get(`https://www.reddit.com/r/${this.state.subreddit}.json`, (data) => {
      this.setState({
        redditData: data.data.children,
        pageNotFound: false
      })
    }).fail(() => {
      this.setState({
        pageNotFound: true
      })
      //delete the last entry from your subreddit list and then pass the list down
    })
  })
}


  render() {
    return (
      <div>
        <div className='header'>
          <h1 className='headerText'>Reddit Reader</h1>
          <h3 className='subheaderText'> Current Subreddit: {this.state.subreddit}</h3>
        </div>
          <div className='flexBox'>
            {!this.state.pageNotFound &&
            <div style={{maxWidth: '70%'}}> {this.state.redditData.map((article, index) =>
              <EachEntry key={index} article={article}/>
            )}
            </div>
          }
          {this.state.pageNotFound &&
            <div className='pageNotFound'>Hmmm. Sorry! It looks like there are no results for that search. <br/>Please try something else!<br/><img src='https://i.imgur.com/jXHOrUq.png'/></div>
          }
          <YourSubreddits getSearchResult={this.getSearchResult} yourSubredditClick={this.yourSubredditClick}/>
        </div>
      </div>
    );
  }
}

export default App;
