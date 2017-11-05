import React, { Component } from 'react';

class EachEntry extends Component {

  render() {
    return (
      <div style={{border: '1px solid gray', margin: '10px'}}>
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
          COMMENTS {this.props.article.data.num_comments}
        </div>
      </div>
    );
  }
}

export default EachEntry;
