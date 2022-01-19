// main app component
// import React from 'react';
// import ReactDom from 'react-dom';
const { Component } = React;
const { render } = ReactDOM;
// import Search from '/client/src/Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: exampleCommentData
    }
  }

  render() {
    return (
      <div>
        <h1>App Name</h1>
        <AddComment />
        <br/>
        <CommentView comments={this.state.comments}/>
      </div>
    )
  }
}

const appElement = document.getElementById('app');
ReactDOM.render(<App />, appElement);