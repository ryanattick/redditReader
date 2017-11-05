import React, { Component } from 'react';
import Search from './Search.js';

class YourSubreddits extends Component {

  render() {
    return (
      <div style={{border: '1px solid gray', margin: '10px', minWidth: '35%', minLength: '100%'}}>
        Categories
        <Search/>
      </div>
    );
  }
}

export default YourSubreddits;
