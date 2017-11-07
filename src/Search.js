import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
          <TextField hintText="Search Subreddits" value={this.state.value} style={{maxWidth: '60%'}}  underlineFocusStyle={{borderColor: '#2F6795'}} onChange={this.handleChange}/>
        </label>
        <RaisedButton label="Go" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

export default Search;
