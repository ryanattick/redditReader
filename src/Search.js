import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
   super(props);
   this.state = {
     value: ''
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

handleChange(event) {
  this.setState({
    value: event.target.value
  });
}

handleSubmit(event) {
    event.preventDefault();
    Promise.resolve(this.props.getSearchResult(this.state.value))
    .then(() => {
      this.props.captureNewSubreddit(this.state.value);
    })
    .then(() => {
      this.setState({
        value: ''
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style={{margin: '20px'}}>
          Search:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;
