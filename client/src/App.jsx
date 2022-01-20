// main app component
const { Component } = React;
const { render } = ReactDOM;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      currentCommentValue: '',
      username: 'user',
      stock: 'TSLA'
    }
    this.updateCurrentCommentValue = this.updateCurrentCommentValue.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    this.retrieveComments = this.retrieveComments.bind(this);
    this.updateAllComments = this.updateAllComments.bind(this);
  }

  componentDidMount () {
    this.retrieveComments();
  }

  updateCurrentCommentValue (e) {
    this.setState({
      currentCommentValue: event.target.value
    });
  }

  addNewComment (comment) {
    var updatedComments = this.state.comments;
    updatedComments.unshift(comment);
    this.setState({
      comments: updatedComments
    });
  }

  updateAllComments (comments) {
    this.setState({
      comments: comments
    });
  }

  saveComment (e) {
    e.preventDefault();
    var currentComment = {
      username: this.state.username,
      text: this.state.currentCommentValue,
      stock: this.state.stock
    };

    $.ajax({
      url: 'http://127.0.0.1:3000/comment',
      data: JSON.stringify(currentComment),
      method: 'POST',
      contentType: 'application/json',
      success: (comment) => {
        this.addNewComment(comment);
        console.log('Comment saved!');
      },
      error: (err) => {
        console.log('This is the error: ', err);
      }
    });
  }

  retrieveComments () {
    var stockData = {
      stock: this.state.stock
    };

    $.ajax({
      url: 'http://127.0.0.1:3000/comment',
      data: stockData,
      method: 'GET',
      contentType: 'application/json',
      success: (comments) => {
        this.updateAllComments(comments);
        console.log('Comments updated: ', comments);
      },
      error: (err) => {
        console.log('This is the error: ', err);
      }
    });
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