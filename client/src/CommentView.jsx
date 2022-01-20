// contain feed with comments about stock
class CommentView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      currentCommentValue: '',
    }
    this.updateCurrentCommentValue = this.updateCurrentCommentValue.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    this.retrieveComments = this.retrieveComments.bind(this);
    this.updateAllComments = this.updateAllComments.bind(this);
  }

  componentDidMount () {
    // this.askForUsername();
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
      stock: this.props.stock
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
      <div id="comment-view">
        <AddComment updateCurrentCommentValue={this.updateCurrentCommentValue} saveComment={this.saveComment}/>
        {this.state.comments.map((comment) => {
          return <Comment key ={comment._id} comment={comment}/>
        })}
      </div>
    )
  }
}