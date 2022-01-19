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
      comments: exampleCommentData,
      currentCommentValue: '',
      username: 'user',
      stock: 'TSLA'
    }
    this.updateCurrentCommentValue = this.updateCurrentCommentValue.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  updateCurrentCommentValue (e) {
    this.setState({
      currentCommentValue: event.target.value
    });
  }

  saveComment (e) {
    e.preventDefault();
    $.ajax({
      url: 'http://127.0.0.1:3000/comment',
      data: JSON.stringify({
        username: this.state.username,
        text: this.state.currentCommentValue,
        stock: this.state.stock
      }),
      method: 'POST',
      contentType: 'application/json',
      success: () => {
        console.log('Comment saved!');
      },
      error: (err) => {
        console.log('This is the error: ', err);
      }
    })
  }

  render() {
    return (
      <div>
        <h1>App Name</h1>
        <AddComment updateCurrentCommentValue={this.updateCurrentCommentValue} saveComment={this.saveComment}/>
        <br/>
        <CommentView comments={this.state.comments}/>
      </div>
    )
  }
}

const appElement = document.getElementById('app');
ReactDOM.render(<App />, appElement);