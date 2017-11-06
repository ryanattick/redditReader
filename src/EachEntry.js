import React, { Component } from 'react';
import './style/EachEntry.css';

class EachEntry extends Component {

  render() {
    return (
      <div className='redditPosts'>
        <div style={{fontWeight: 'bold'}}>
          <a href={this.props.article.data.url}>{this.props.article.data.title}</a>
        </div>
        <div>
          by: {this.props.article.data.author}
        </div>
        <div>
          <img src={this.props.article.data.thumbnail}/>
        </div>
        <div>
          Comments: {this.props.article.data.num_comments}
        </div>
      </div>
    );
  }
}

export default EachEntry;
