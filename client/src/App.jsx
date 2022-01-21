// main app component
import React from 'react';
import Search from './Search';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.searchTwitter = this.searchTwitter.bind(this);
  }

  updateSearch (event) {
    this.setState({
        search: event.target.value
      });
  }

  searchTwitter (event) {
    event.preventDefault();
    var query = {
      value: this.state.search
    }
    $.ajax({
      url: 'http://127.0.0.1:3000/search',
      data: query,
      method: 'GET',
      contentType: 'application/json',
      success: (tweets) => {
        console.log('Tweets retrieved: ', tweets);
      },
      error: (err) => {
        console.log('Error retrieving tweets: ', err);
      }
    });
  }

  render() {
    return (
      <div>
        <h1>App Name</h1>
        <Search updateSearch={this.updateSearch} searchTwitter={this.searchTwitter}/>
      </div>
    )
  }
}

export default App;